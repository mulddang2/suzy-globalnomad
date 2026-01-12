'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

export default function KakaoMap({ address }: { address: string }) {
  const KAKAO_API_KEY = process.env.NEXT_PUBLIC_KAKAORESTKEY;
  const [coords, setCoords] = useState({
    lat: 0,
    lng: 0,
  });

  const [placeName, setPlaceName] = useState('');

  useEffect(() => {
    if (!address || !KAKAO_API_KEY) {
      return;
    }

    const fetchCoordinates = async (address: string) => {
      try {
        const response = await axios.get('https://dapi.kakao.com/v2/local/search/address.json', {
          params: { query: address },
          headers: { Authorization: `KakaoAK ${KAKAO_API_KEY}` },
        });

        if (response.data.documents.length > 0) {
          const { x: lng, y: lat } = response.data.documents[0]; // x = 경도, y = 위도
          setCoords({ lat: parseFloat(lat), lng: parseFloat(lng) });

          // NOTE: 좌표를 기반으로 장소 검색 실행
          fetchPlaceName(parseFloat(lat), parseFloat(lng));
        }
      } catch (error) {
        console.error('좌표 변환 실패:', error);
      }
    };

    const fetchPlaceName = async (lat: number, lng: number) => {
      try {
        const placeResponse = await axios.get('https://dapi.kakao.com/v2/local/search/keyword.json', {
          params: { query: address, x: lng, y: lat, radius: 100 }, // 반경 100m 내에서 검색
          headers: { Authorization: `KakaoAK ${KAKAO_API_KEY}` },
        });

        if (placeResponse.data.documents.length > 0) {
          setPlaceName(placeResponse.data.documents[0].place_name);
        } else {
          setPlaceName('장소 정보 없음');
        }
      } catch (error) {
        console.error('장소 검색 실패:', error);
      }
    };

    fetchCoordinates(address);
  }, [address, KAKAO_API_KEY]);

  return (
    <div>
      {coords.lat !== 0 && coords.lng !== 0 ? (
        <Map key={`${coords.lat}-${coords.lng}`} center={coords} style={{ width: '100%', height: '360px' }}>
          <MapMarker position={coords}>
            <div style={{ color: '#000' }}>{placeName}</div>
          </MapMarker>
        </Map>
      ) : (
        <p>지도를 불러오는 중...</p>
      )}
    </div>
  );
}
