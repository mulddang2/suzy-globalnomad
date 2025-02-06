'use client';

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

export default function KakaoMap({ address }: { address: string }) {
  const KAKAO_API_KEY = process.env.NEXT_PUBLIC_KAKAORESTKEY;
  const [coords, setCoords] = useState({
    lat: 0,
    lng: 0,
  });

  const [placeName, setPlaceName] = useState('');

  useEffect(() => {
    const getCoordinates = async () => {
      if (!KAKAO_API_KEY) {
        console.error('Kakao API Key가 설정되지 않았습니다.');
        return;
      }

      try {
        const response = await axios.get('https://dapi.kakao.com/v2/local/search/address.json', {
          params: { query: address },
          headers: { Authorization: `KakaoAK ${KAKAO_API_KEY}` },
        });

        if (response.data.documents.length > 0) {
          const { x: lng, y: lat } = response.data.documents[0]; // x = 경도, y = 위도

          // 좌표 기반 장소 검색 요청
          const placeResponse = await axios.get('https://dapi.kakao.com/v2/local/search/keyword.json', {
            params: { query: address, x: lng, y: coords.lat, radius: 100 }, // 반경 100m 내에서 검색
            headers: { Authorization: `KakaoAK ${KAKAO_API_KEY}` },
          });

          if (placeResponse.data.documents.length > 0) {
            const foundPlaceName = placeResponse.data.documents[0].place_name;
            console.log('장소 이름:', foundPlaceName);
            setPlaceName(foundPlaceName);
          } else {
            console.log('해당 주소에 대한 장소 검색 결과 없음');
            setPlaceName('');
          }
          setCoords({ lat: parseFloat(lat), lng: parseFloat(lng) });
        }
      } catch (error) {
        console.error('카카오 API 요청 실패:', error);
      }
    };

    if (address) {
      getCoordinates();
    }
  }, [address, KAKAO_API_KEY]);

  return (
    <div>
      {coords.lat !== 0 && coords.lng !== 0 ? (
        <Map key={`${coords.lat}-${coords.lng}`} center={coords} style={{ width: '100%', height: '360px' }}>
          <MapMarker position={coords}>
            <div style={{ color: '#000' }}>{placeName || '위치 정보 없음'}</div>
          </MapMarker>
        </Map>
      ) : (
        <p>지도를 불러오는 중...</p>
      )}
    </div>
  );
}
