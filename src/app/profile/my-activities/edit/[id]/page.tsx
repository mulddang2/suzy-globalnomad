'use client';

import ArrowDown from '@/assets/icons/arrow-down.svg';
import AddTimeBtn from '@/assets/icons/btn-add-time.svg';
import BtnCanceled from '@/assets/icons/btn-canceled.svg';
import MinusTimeBtn from '@/assets/icons/btn-minus-time.svg';
import CheckMark from '@/assets/icons/check-mark.svg';
import IconPlus from '@/assets/icons/plus.svg';
import Input from '@/components/Input';
import CustomDrawer from '@/components/drawer/CustomDrawer';
import Dialog from '@/components/modal/Dialog';
import Modal from '@/components/modal/Modal';
import { useMyActivitiesEdit } from '@/hooks/use-my-activities-edit';
import { useActivityEditForm } from '@/hooks/useActivityEditForm';
import useDetectClose from '@/hooks/useDetectClose';
import useResponsiveQuery from '@/hooks/useMediaQuery';
import { useMyActivitiesDetails } from '@/hooks/useMyActivitiesDetails';
import useSingleImageUpload from '@/hooks/useSingleImageUpload';
import { uploadImage } from '@/hooks/useUploadImage';
import { MyActivities } from '@/types/my-activities';
import { MyActivitiesEditData } from '@/types/my-activities-edit-data';
import { ReservationDateTime } from '@/types/reservation-date-time';
import { StyledEngineProvider } from '@mui/material';
import { DatePicker, LocalizationProvider, TimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import { createPortal } from 'react-dom';
import { Controller, FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import * as styles from './page.css';

export default function MyActivitiesEditPage() {
  const { isPc, isTablet, isMobile } = useResponsiveQuery();
  const isPCOrTablet = isPc || isTablet;

  const open = useDaumPostcodePopup();
  // const mutation = useMyActivitiesEdit();

  const { id } = useParams();
  // const { data: currentData, status } = useMyActivitiesDetails(Number(id));
  const { imageSrc, setImageSrc, handleSingleImagePreview } = useSingleImageUpload();

  const [showModifyModal, setShowModifyModal] = useState(false);

  const handleComplete = (data: { address: string; addressType: string; bname: string; buildingName: string }) => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }

    setValue('address', fullAddress);
    trigger('address');
  };

  const handleClick = () => {
    open({ onComplete: handleComplete });
  };

  const encodeFileToBase64 = (file: File) => {
    return new Promise<string>((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => {
        if (typeof reader.result === 'string') {
          resolve(reader.result);
        }
      };
    });
  };

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setValue,
    getValues,
    trigger,
    onSubmit,
    isSuccess,
    isDataLoaded,
    clearErrors,
  } = useActivityEditForm({ activityId: Number(id) });

  useEffect(() => {
    if (isDataLoaded) {
      const banner = getValues('bannerImage');
      if (typeof banner === 'string') {
        setImageSrc(banner);
      }
    }
  }, [isDataLoaded, getValues, setImageSrc]);

  const categories = ['문화 · 예술', '식음료', '스포츠', '투어', '관광', '웰빙'];

  const dropDownRef = useRef(null);
  const bannerFileRef = useRef<HTMLInputElement | null>(null);
  const subFileRef = useRef<HTMLInputElement | null>(null);

  const [isDropdownOpen, setIsDropdownOpen] = useDetectClose(dropDownRef, false) as [
    boolean,
    React.Dispatch<React.SetStateAction<boolean>>,
  ];
  const toggleDropdown = () => setIsDropdownOpen((prev: boolean) => !prev);

  const handleBannerFileClick = () => {
    bannerFileRef?.current?.click();
  };

  const handleSingleImageCancelClick = () => {
    setImageSrc(null);
    setValue('bannerImage', '');
  };

  const handleSubFileClick = () => {
    subFileRef?.current?.click();
  };

  const handleModifyModalState = () => {
    setShowModifyModal(!showModifyModal);
  };

  useEffect(() => {
    if (isSuccess) {
      setShowModifyModal(true);
    }
  }, [isSuccess]);

  return (
    <>
      <div className={styles.activitiesPageContainer}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.topLayout}>
            {isPCOrTablet && (
              <>
                <h2 className={styles.h2Title}>내 체험 수정</h2>
                <button className={styles.submitButton}>수정하기</button>
              </>
            )}
          </div>
          {isMobile && (
            <>
              <div className={styles.topLayout}>
                <div className={styles.mobileMenuTitle}>
                  <CustomDrawer />
                  <h2 className={styles.h2Title}>내 체험 수정</h2>
                </div>
              </div>
            </>
          )}
          <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='ko'>
            <StyledEngineProvider injectFirst>
              <section className={styles.inputSectionContainer}>
                <div>
                  <Input
                    placeholder='제목'
                    {...register('title', { required: '제목은 필수 입력 사항입니다.' })}
                    error={Boolean(errors.title)}
                    errorMessage={errors.title?.message as string | undefined}
                  />
                </div>

                <Controller
                  name='category'
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <div>
                      <div className={`${styles.selectBoxContainer} `} ref={dropDownRef}>
                        <div
                          onClick={toggleDropdown}
                          className={`${errors.category ? styles.errorStyle : styles.defaultInputStyle} ${styles.selectedOptionStyle} `}
                        >
                          <input
                            placeholder='카테고리'
                            className={styles.categoryInput}
                            value={field.value ?? ''}
                            readOnly
                          />
                          <ArrowDown className={`${styles.arrow} ${isDropdownOpen ? styles.rotated : ''}`} />
                        </div>
                        {errors.category && (
                          <p className={styles.errorMessageStyle}>카테고리는 필수 선택 사항입니다.</p>
                        )}
                        {isDropdownOpen && (
                          <ul className={styles.selectBoxList}>
                            {categories.map((option) => (
                              <li
                                key={option}
                                tabIndex={0} // 포커스 가능하도록 설정
                                aria-selected={field.value === option}
                                onClick={() => {
                                  field.onChange(option); // react-hook-form에 값 전달
                                  toggleDropdown(); // 드롭다운 닫기
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
                  )}
                />
                <div>
                  <textarea
                    className={`${styles.descriptionInput}` + (errors.description ? ` ${styles.errorStyle}` : '')}
                    placeholder='설명'
                    {...register('description', { required: true })}
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
                      {...register('price', { required: '가격은 필수 입력 사항입니다.' })}
                      error={Boolean(errors.price)}
                      errorMessage={errors.price?.message as string | undefined}
                    />
                  </div>
                </div>
                <div className={styles.inputContainer}>
                  <h2 className={styles.inputTitle}>주소</h2>
                  <div className={styles.addressContainer}>
                    <Input
                      placeholder='주소'
                      {...register('address', { required: '주소는 필수 입력 사항입니다.' })}
                      error={Boolean(errors.address)}
                      errorMessage={errors.address?.message as string | undefined}
                      readOnly
                    />
                    <button type='button' className={styles.BtnAddressFinder} onClick={handleClick}>
                      검색
                    </button>
                  </div>
                </div>
                <h2 className={styles.inputTitle}>예약 가능한 시간대</h2>

                <Controller
                  name='availableDateTimeList'
                  control={control}
                  rules={{
                    validate: (value) => {
                      const errors: Array<string | null> = [];
                      let isError = false;

                      for (let i = 0; i < value.length; i++) {
                        const item = value[i];
                        let error = null;

                        if (!item.date && !item.startTime && !item.endTime) {
                          errors.push(null);
                          continue;
                        }

                        // 날짜와 시간대 기본 유효성 검사
                        if (!item.date) {
                          error = `날짜를 입력해주세요.`;
                        } else if (!item.startTime) {
                          error = `시작 시간을 입력해주세요.`;
                        } else if (!item.endTime) {
                          error = `종료 시간을 입력해주세요.`;
                        } else if (item.startTime >= item.endTime) {
                          error = `종료 시간은 시작 시간 이후여야 합니다.`;
                        }

                        // 시간대 중복 검사
                        if (item.date && item.startTime && item.endTime) {
                          for (let j = 0; j < value.length; j++) {
                            if (i !== j) {
                              const otherItem = value[j];
                              if (!otherItem.date || !otherItem.startTime || !otherItem.endTime) continue;

                              // 날짜와 시간대 비교
                              if (
                                item.date?.toString() === otherItem.date?.toString() &&
                                item.startTime < otherItem.endTime &&
                                item.endTime > otherItem.startTime
                              ) {
                                error = `겹치는 예약 가능 시간대가 존재합니다.`;
                                break;
                              }
                            }
                          }
                        }
                        if (error !== null) {
                          isError = true;
                        }
                        errors.push(error);
                      }

                      return !isError ? true : JSON.stringify(errors);
                    },
                  }}
                  render={({ field, fieldState: { error } }) => {
                    const errors = error && error.message ? JSON.parse(error.message) : null;
                    return (
                      <div>
                        <div className={styles.datePickerLabelContainer}>
                          <div className={styles.datePickerLabel}>날짜</div>
                          <div className={styles.startTimePickerLabel}>시작 시간</div>
                          <div className={styles.endTimePickerLabel}>종료 시간</div>
                        </div>
                        {field.value.map((availableDateTime: ReservationDateTime, index: number) => (
                          <div className={styles.datePickerLabelContainer} key={availableDateTime.frontEndId}>
                            {index === 1 && <div className={styles.horizon}></div>}
                            <DatePicker
                              key={`${availableDateTime.frontEndId}-date`}
                              sx={{
                                '& .MuiOutlinedInput-root': {
                                  '& fieldset': {
                                    borderColor: `${errors !== null && errors[index] !== null && errors[index]?.includes('날짜') ? '#FF472E' : '#79747E'}`,
                                  },
                                  '&.Mui-focused fieldset': {
                                    borderColor: '#0B3B2D',
                                  },
                                },
                              }}
                              className={`${styles.datePickerContainer}`}
                              value={availableDateTime.date}
                              onChange={(v) => {
                                const newValues = [...field.value];
                                const updatedItem = { ...newValues[index], date: v };
                                delete updatedItem.id;
                                newValues[index] = updatedItem;
                                field.onChange(newValues);
                              }}
                              slotProps={{ textField: { placeholder: 'YYYY/MM/DD' } }}
                            />
                            <TimePicker
                              key={`${availableDateTime.frontEndId}-start`}
                              sx={{
                                '& .MuiOutlinedInput-root': {
                                  '& fieldset': {
                                    borderColor: `${errors !== null && errors[index] !== null && errors[index]?.includes('시작') ? '#FF472E' : '#79747E'}`,
                                  },
                                  '&.Mui-focused fieldset': {
                                    borderColor: '#0B3B2D',
                                  },
                                },
                              }}
                              value={availableDateTime.startTime}
                              onChange={(v) => {
                                const newValues = [...field.value];
                                const updatedItem = { ...newValues[index], startTime: v };
                                delete updatedItem.id;
                                newValues[index] = updatedItem;
                                field.onChange(newValues);
                              }}
                              className={styles.startTimePickerContainer}
                            />

                            <div className={styles.waveSign}>~</div>
                            <TimePicker
                              key={`${availableDateTime.frontEndId}-end`}
                              sx={{
                                '& .MuiOutlinedInput-root': {
                                  '& fieldset': {
                                    borderColor: `${errors !== null && errors[index] !== null && errors[index]?.includes('종료') ? '#FF472E' : '#79747E'}`,
                                  },
                                  '&.Mui-focused fieldset': {
                                    borderColor: '#0B3B2D',
                                  },
                                },
                              }}
                              className={styles.endTimePickerContainer}
                              value={availableDateTime.endTime}
                              onChange={(v) => {
                                const newValues = [...field.value];
                                const updatedItem = { ...newValues[index], endTime: v };
                                delete updatedItem.id;
                                newValues[index] = updatedItem;
                                field.onChange(newValues);
                              }}
                            />
                            {index === 0 ? (
                              <div
                                className={styles.TimeButton}
                                onClick={() => {
                                  field.onChange([
                                    {
                                      frontEndId: `${Date.now()}-${Math.random()}`,
                                      date: null,
                                      startTime: null,
                                      endTime: null,
                                    },
                                    ...field.value,
                                  ]);
                                }}
                              >
                                <AddTimeBtn />
                              </div>
                            ) : (
                              <div
                                className={styles.TimeButton}
                                onClick={() => {
                                  field.onChange(
                                    field.value.filter((v: ReservationDateTime, i: number) => i !== index),
                                  );
                                }}
                              >
                                <MinusTimeBtn />
                              </div>
                            )}

                            {errors !== null && errors[index] !== null && (
                              <p className={styles.errorMessageStyle}>{errors[index]}</p>
                            )}
                          </div>
                        ))}
                      </div>
                    );
                  }}
                />

                <h2 className={styles.inputTitle}>배너 이미지</h2>
                <div>
                  <div className={styles.fileUploadLayout}>
                    <div
                      className={`${errors.bannerImage ? styles.fileUploadWithError : styles.fileUploadDefault}`}
                      onClick={handleBannerFileClick}
                    >
                      <label htmlFor='bannerImage' />
                      <div className={styles.fileUploadtext}>
                        <IconPlus />
                        <span>이미지 등록</span>
                      </div>
                      <input
                        {...register('bannerImage', { required: true })}
                        className={styles.fileUploadInput}
                        id='bannerImage'
                        type='file'
                        ref={bannerFileRef}
                        onChange={(e) => {
                          handleSingleImagePreview(e);
                          if (e.target.files && e.target.files[0]) {
                            setValue('bannerImage', e.target.files[0]);
                          }
                          clearErrors('bannerImage');
                        }}
                      />
                    </div>

                    {imageSrc && (
                      <div className={styles.previewImageContainer}>
                        <div className={styles.previewImageBox}>
                          <Image
                            fill
                            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                            src={imageSrc}
                            alt='배너 이미지'
                          />
                        </div>
                        {imageSrc !== null && (
                          <BtnCanceled className={styles.btnCanceled} onClick={handleSingleImageCancelClick} />
                        )}
                      </div>
                    )}
                  </div>
                  {errors.bannerImage && (
                    <p className={styles.errorMessageStyle}>배너 이미지는 필수 입력 사항입니다.</p>
                  )}
                </div>
                <h2 className={styles.inputTitle}>소개 이미지</h2>
                <div
                  className={
                    getValues('subImages') === undefined ||
                    getValues('subImages').length === 0 ||
                    getValues('subImages').length === 1
                      ? styles.subImageBox[0]
                      : getValues('subImages').length === 2 || getValues('subImages').length === 3
                        ? styles.subImageBox[2]
                        : getValues('subImages').length === 4
                          ? `${styles.subImageBox[4]}`
                          : styles.baseSubImageContainer
                  }
                >
                  <div className={styles.subImageUploadBox} onClick={handleSubFileClick}>
                    <label htmlFor='subfile-upload' />
                    <div>
                      <div className={styles.fileUploadtext}>
                        <IconPlus />
                        <span>이미지 등록</span>
                      </div>
                    </div>
                    <input
                      {...register('subImages')}
                      multiple
                      className={styles.fileUploadInput}
                      id='subfile-upload'
                      type='file'
                      ref={subFileRef}
                      onChange={(e) => {
                        if (e.target.files && e.target.files.length > 0) {
                          const newFiles = Array.from(e.target.files);

                          Promise.all(newFiles.map((file) => encodeFileToBase64(file))).then(
                            (newBase64Images: string[]) => {
                              const newImages: Array<{ src: string; file: File }> = [];

                              for (let i = 0; i < newFiles.length; i++) {
                                newImages.push({ src: newBase64Images[i], file: newFiles[i] });
                              }

                              setValue('subImages', [...getValues('subImages'), ...newImages], {
                                shouldDirty: true,
                                shouldTouch: true,
                                shouldValidate: true,
                              });
                            },
                          );
                        }
                      }}
                    />
                  </div>
                  {getValues('subImages')?.map(({ src }: { src: string }, index: number) => (
                    <div key={index} className={styles.previewImageContainer}>
                      <div className={styles.previewImageBox}>
                        <Image
                          fill
                          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                          src={src}
                          alt={`소개 이미지 미리보기 ${index + 1}`}
                        />
                      </div>
                      <BtnCanceled
                        className={styles.btnCanceled}
                        onClick={() => {
                          setValue(
                            'subImages',
                            getValues('subImages').filter((_: unknown, i: number) => i !== index),
                            {
                              shouldDirty: true,
                              shouldTouch: true,
                              shouldValidate: true,
                            },
                          );
                        }}
                      />
                    </div>
                  ))}
                </div>
                <p className={styles.descPhrase}>*이미지는 최대 4개까지 등록 가능합니다.</p>
                {isMobile && (
                  <button type='submit' className={styles.submitButton}>
                    수정하기
                  </button>
                )}
              </section>
            </StyledEngineProvider>
          </LocalizationProvider>
        </form>
      </div>

      {showModifyModal &&
        createPortal(
          <Modal
            content={<Dialog message='체험 수정이 완료되었습니다' handleModalState={handleModifyModalState} />}
            handleModalState={handleModifyModalState}
          />,
          document.body,
        )}
    </>
  );
}
