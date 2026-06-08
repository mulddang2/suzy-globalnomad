import ArrowDown from '@/assets/icons/arrow-down.svg';
import AddTimeBtn from '@/assets/icons/btn-add-time.svg';
import BtnCanceled from '@/assets/icons/btn-canceled.svg';
import MinusTimeBtn from '@/assets/icons/btn-minus-time.svg';
import CheckMark from '@/assets/icons/check-mark.svg';
import IconPlus from '@/assets/icons/plus.svg';
import Input from '@/components/Input';
import useDetectClose from '@/hooks/useDetectClose';
import useMultipleImageUpload from '@/hooks/useMultipleImageUpload';
import useSingleImageUpload from '@/hooks/useSingleImageUpload';
import { ReservationDateTime } from '@/types/reservation-date-time';
import { DatePicker, TimePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import Image from 'next/image';
import React, { useRef, useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import * as styles from './MyActivitiesCreate.css';

interface UseStateFormErrors {
  title?: string;
  category?: boolean;
  description?: boolean;
  price?: string;
  address?: string;
  bannerImage?: boolean;
  availableDateTimeList?: Array<string | null> | null;
}

interface Props {
  options: string[];
  onSubmit?: (data: unknown) => void;
}

export default function MyActivitiesCreateUseState({ options, onSubmit }: Props) {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState<string | null>(null);
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [address, setAddress] = useState('');
  const [bannerImageFile, setBannerImageFile] = useState<File | null>(null);
  const [subfileImage, setSubfileImage] = useState<FileList | null>(null);
  const [availableDateTimeList, setAvailableDateTimeList] = useState<ReservationDateTime[]>([
    {
      frontEndId: `${Date.now()}-${Math.random()}`,
      date: null,
      startTime: null,
      endTime: null,
    },
  ]);

  const [errors, setErrors] = useState<UseStateFormErrors>({});

  const dropDownRef = useRef(null);
  const [isDropdownOpen, setIsDropdownOpen] = useDetectClose(dropDownRef, false) as [
    boolean,
    React.Dispatch<React.SetStateAction<boolean>>,
  ];

  const { imageSrc, setImageSrc, handleSingleImagePreview } = useSingleImageUpload();
  const { imageSrcs, setImageSrcs, handleMultipleImagePreview } = useMultipleImageUpload();

  const open = useDaumPostcodePopup();

  const handleComplete = (data: { address: string; addressType: string; bname: string; buildingName: string }) => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') extraAddress += data.bname;
      if (data.buildingName !== '') extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }

    setAddress(fullAddress);
    setErrors((prev) => ({ ...prev, address: undefined }));
  };

  const handleAddressClick = () =>
    open({
      onComplete: handleComplete,
      onError: (e) => {
        console.error('[benchmark] 주소 검색 팝업 오류', e);
        alert('주소 검색 창을 열지 못했습니다. 잠시 후 다시 시도하거나 팝업 차단을 해제해주세요.');
      },
    });

  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  const bannerFileRef = useRef<HTMLInputElement | null>(null);
  const subFileRef = useRef<HTMLInputElement | null>(null);
  const handleBannerFileClick = () => bannerFileRef?.current?.click();
  const handleSubFileClick = () => subFileRef?.current?.click();

  const handleSingleImageCancelClick = () => {
    setImageSrc(null);
    setBannerImageFile(null);
  };

  const handleMultipleImageCancelClick = (index: number) => {
    setImageSrcs((prev) => prev.filter((_, i) => i !== index));
  };

  const validateAvailableDateTimeList = (value: ReservationDateTime[]): Array<string | null> | null => {
    const errs: Array<string | null> = [];
    let isError = false;
    for (let i = 0; i < value.length; i++) {
      const item = value[i];
      let error: string | null = null;
      if (!item.date && !item.startTime && !item.endTime) {
        errs.push(null);
        continue;
      }
      if (!item.date) error = '날짜를 입력해주세요.';
      else if (!item.startTime) error = '시작 시간을 입력해주세요.';
      else if (!item.endTime) error = '종료 시간을 입력해주세요.';
      else if (item.startTime >= item.endTime) error = '종료 시간은 시작 시간 이후여야 합니다.';
      else {
        const startDateTime = item.date.hour(item.startTime.hour()).minute(item.startTime.minute());
        if (startDateTime.isBefore(dayjs(), 'minute')) error = '지난 날짜 및 시간은 등록이 불가능합니다';
      }
      for (let j = 0; j < value.length; j++) {
        if (i !== j) {
          const otherItem = value[j];
          if (
            item.date?.toString() === otherItem.date?.toString() &&
            item.startTime &&
            otherItem.endTime &&
            item.endTime &&
            otherItem.startTime &&
            item.startTime < otherItem.endTime &&
            item.endTime > otherItem.startTime
          ) {
            error = '겹치는 예약 가능 시간대가 존재합니다.';
            break;
          }
        }
      }
      if (error !== null) isError = true;
      errs.push(error);
    }
    return isError ? errs : null;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: UseStateFormErrors = {};
    if (!title) newErrors.title = '제목은 필수 입력 사항입니다.';
    if (!category) newErrors.category = true;
    if (!description) newErrors.description = true;
    if (!price) newErrors.price = '가격은 필수 입력 사항입니다.';
    if (!address) newErrors.address = '주소는 필수 입력 사항입니다.';
    if (!bannerImageFile) newErrors.bannerImage = true;
    const dateTimeErrors = validateAvailableDateTimeList(availableDateTimeList);
    if (dateTimeErrors) newErrors.availableDateTimeList = dateTimeErrors;
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      onSubmit?.({
        title,
        category,
        description,
        price: Number(price),
        address,
        bannerImageFile,
        subfileImage,
        availableDateTimeList,
      });
    }
  };

  const dateTimeErrors = errors.availableDateTimeList ?? null;

  return (
    <form onSubmit={handleSubmit}>
      <section className={styles.inputSectionContainer}>
        <div>
          <Input
            placeholder='제목'
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              if (errors.title) setErrors((prev) => ({ ...prev, title: undefined }));
            }}
            error={Boolean(errors.title)}
            errorMessage={errors.title}
          />
        </div>

        <div>
          <div className={`${styles.selectBoxContainer} `} ref={dropDownRef}>
            <div
              onClick={toggleDropdown}
              className={`${errors.category ? styles.errorStyle : styles.defaultInputStyle} ${styles.selectedOptionStyle} `}
            >
              <input placeholder='카테고리' className={styles.categoryInput} value={category ?? ''} readOnly />
              <ArrowDown className={`${styles.arrow} ${isDropdownOpen ? styles.rotated : ''}`} />
            </div>
            {errors.category && <p className={styles.errorMessageStyle}>카테고리는 필수 선택 사항입니다.</p>}
            {isDropdownOpen && (
              <ul className={styles.selectBoxList}>
                {options.map((option, index) => (
                  <li
                    key={index}
                    tabIndex={0}
                    aria-selected={category === option}
                    onClick={() => {
                      setCategory(option);
                      setErrors((prev) => ({ ...prev, category: undefined }));
                      toggleDropdown();
                    }}
                    className={styles.selectBoxItem}
                    role='option'
                  >
                    <CheckMark className={styles.checkMark} />
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div>
          <textarea
            className={`${styles.descriptionInput}` + (errors.description ? ` ${styles.errorStyle}` : '')}
            placeholder='설명'
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
              if (errors.description) setErrors((prev) => ({ ...prev, description: undefined }));
            }}
          />
          {errors.description && <p className={styles.errorMessageStyle}>설명은 필수 입력 사항입니다.</p>}
        </div>

        <div className={styles.inputContainer}>
          <h2 className={styles.inputTitle}>가격</h2>
          <div>
            <Input
              type='number'
              step='1000'
              placeholder='가격'
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
                if (errors.price) setErrors((prev) => ({ ...prev, price: undefined }));
              }}
              error={Boolean(errors.price)}
              errorMessage={errors.price}
            />
          </div>
        </div>

        <div className={styles.inputContainer}>
          <h2 className={styles.inputTitle}>주소</h2>
          <div className={styles.addressContainer}>
            <div>
              <Input
                placeholder='주소를 입력해주세요'
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                error={Boolean(errors.address)}
                errorMessage={errors.address}
                readOnly
              />
            </div>
            <button type='button' className={styles.BtnAddressFinder} onClick={handleAddressClick}>
              검색
            </button>
          </div>
        </div>

        <h2 className={styles.inputTitle}>예약 가능한 시간대</h2>
        <div>
          <div className={styles.datePickerLabelContainer}>
            <div className={`${styles.datePickerLabel}`}>날짜</div>
            <div className={`${styles.startTimePickerLabel}`}>시작 시간</div>
            <div className={styles.endTimePickerLabel}>종료 시간</div>
          </div>
          {availableDateTimeList.map((availableDateTime, index) => (
            <div className={styles.datePickerLabelContainer} key={availableDateTime.frontEndId}>
              {index === 1 && <div className={styles.horizon}></div>}
              <DatePicker
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: `${dateTimeErrors !== null && dateTimeErrors[index]?.includes('날짜') ? '#FF472E' : '#79747E'}`,
                    },
                    '&.Mui-focused fieldset': { borderColor: '#0B3B2D' },
                  },
                }}
                className={`${styles.datePickerContainer}`}
                value={availableDateTime.date}
                onChange={(v) => {
                  setAvailableDateTimeList((prev) => {
                    const next = [...prev];
                    next[index] = { ...next[index], date: v };
                    return next;
                  });
                }}
                slotProps={{ textField: { placeholder: 'YYYY/MM/DD' } }}
              />
              <TimePicker
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: `${dateTimeErrors !== null && dateTimeErrors[index]?.includes('시작') ? '#FF472E' : '#79747E'}`,
                    },
                    '&.Mui-focused fieldset': { borderColor: '#0B3B2D' },
                  },
                }}
                className={`${styles.startTimePickerContainer}`}
                value={availableDateTime.startTime}
                onChange={(v) => {
                  setAvailableDateTimeList((prev) => {
                    const next = [...prev];
                    next[index] = { ...next[index], startTime: v };
                    return next;
                  });
                }}
              />
              <div className={`${styles.waveSign}`}>~</div>
              <TimePicker
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: `${dateTimeErrors !== null && dateTimeErrors[index]?.includes('종료') ? '#FF472E' : '#79747E'}`,
                    },
                    '&.Mui-focused fieldset': { borderColor: '#0B3B2D' },
                  },
                }}
                className={`${styles.endTimePickerContainer}`}
                value={availableDateTime.endTime}
                onChange={(v) => {
                  setAvailableDateTimeList((prev) => {
                    const next = [...prev];
                    next[index] = { ...next[index], endTime: v };
                    return next;
                  });
                }}
              />
              {index === 0 ? (
                <div
                  className={styles.TimeButton}
                  onClick={() => {
                    setAvailableDateTimeList((prev) => [
                      {
                        frontEndId: `${Date.now()}-${Math.random()}`,
                        date: null,
                        startTime: null,
                        endTime: null,
                      },
                      ...prev,
                    ]);
                  }}
                >
                  <AddTimeBtn />
                </div>
              ) : (
                <div
                  className={styles.TimeButton}
                  onClick={() => {
                    setAvailableDateTimeList((prev) => prev.filter((_, i) => i !== index));
                  }}
                >
                  <MinusTimeBtn />
                </div>
              )}
              {dateTimeErrors !== null && dateTimeErrors[index] !== null && (
                <p className={styles.errorMessageStyle}>{dateTimeErrors[index]}</p>
              )}
            </div>
          ))}
        </div>

        <h2 className={styles.inputTitle}>배너 이미지</h2>
        <div>
          <div className={styles.fileUploadLayout}>
            <div
              className={`${errors.bannerImage ? styles.fileUploadWithError : styles.fileUploadDefault}`}
              onClick={handleBannerFileClick}
            >
              <label htmlFor='bannerImage-us' />
              <div className={styles.fileUploadtext}>
                <IconPlus />
                <span>이미지 등록</span>
              </div>
              <input
                className={styles.fileUploadInput}
                id='bannerImage-us'
                type='file'
                ref={bannerFileRef}
                onChange={(e) => {
                  handleSingleImagePreview(e);
                  if (e.target.files && e.target.files[0]) {
                    setBannerImageFile(e.target.files[0]);
                    setErrors((prev) => ({ ...prev, bannerImage: undefined }));
                  }
                }}
              />
            </div>
            {imageSrc && (
              <div className={styles.previewImageContainer}>
                <div className={styles.previewImageBox}>
                  <Image
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                    fill
                    src={imageSrc}
                    alt='배너 이미지'
                  />
                </div>
                <BtnCanceled className={styles.btnCanceled} onClick={handleSingleImageCancelClick} />
              </div>
            )}
          </div>
          {errors.bannerImage && <p className={styles.errorMessageStyle}>배너 이미지는 필수 입력 사항입니다.</p>}
        </div>

        <h2 className={styles.inputTitle}>소개 이미지</h2>
        <div className={styles.subImageContainer}>
          <div className={styles.subImageUploadBox} onClick={handleSubFileClick}>
            <label htmlFor='subfile-upload-us' />
            <div>
              <div className={styles.fileUploadtext}>
                <IconPlus />
                <span>이미지 등록</span>
              </div>
            </div>
            <input
              multiple
              className={styles.fileUploadInput}
              id='subfile-upload-us'
              type='file'
              ref={subFileRef}
              onChange={(e) => {
                handleMultipleImagePreview(e);
                if (e.target.files && e.target.files.length > 0) {
                  setSubfileImage(e.target.files);
                }
              }}
            />
          </div>
          {imageSrcs.map((src, index) => (
            <div key={index} className={styles.previewImageContainer}>
              <div className={styles.previewImageBox}>
                <Image
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                  fill
                  src={src}
                  alt={`소개 이미지 미리보기 ${index + 1}`}
                />
              </div>
              <BtnCanceled className={styles.btnCanceled} onClick={() => handleMultipleImageCancelClick(index)} />
            </div>
          ))}
        </div>
        <p className={styles.descPhrase}>*이미지는 최대 4개까지 등록 가능합니다.</p>

        <button type='submit' style={{ display: 'none' }} />
      </section>
    </form>
  );
}
