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
import { MAX_SUB_IMAGES } from '@/constants/activities';
import { CATEGORY_LIST } from '@/constants/categories';
import { useActivityEditForm } from '@/hooks/useActivityEditForm';
import useDetectClose from '@/hooks/useDetectClose';
import useResponsiveQuery from '@/hooks/useMediaQuery';
import useSingleImageUpload from '@/hooks/useSingleImageUpload';
import { ReservationDateTime } from '@/types/reservation-date-time';
import { StyledEngineProvider } from '@mui/material';
import { DatePicker, LocalizationProvider, TimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import 'dayjs/locale/ko';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import { createPortal } from 'react-dom';
import { Controller } from 'react-hook-form';
import * as styles from './page.css';

export default function MyActivitiesEditPage() {
  // 1. Router/Navigation
  const { id } = useParams();

  // 2. State
  const [showModifyModal, setShowModifyModal] = useState(false);

  // 3. Refs
  const dropDownRef = useRef(null);
  const bannerFileRef = useRef<HTMLInputElement | null>(null);
  const subFileRef = useRef<HTMLInputElement | null>(null);

  // 4. Custom Hooks
  const { isPc, isTablet, isMobile, isLargeScreen } = useResponsiveQuery();
  const { imageSrc, setImageSrc, handleSingleImagePreview } = useSingleImageUpload();
  const open = useDaumPostcodePopup();
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
  const [isDropdownOpen, setIsDropdownOpen] = useDetectClose(dropDownRef, false) as [
    boolean,
    React.Dispatch<React.SetStateAction<boolean>>,
  ];

  // 5. Derived State
  const isPCOrTablet = isPc || isTablet;

  // 6. Effects
  useEffect(() => {
    if (isDataLoaded) {
      const banner = getValues('bannerImage');
      if (typeof banner === 'string') {
        setImageSrc(banner);
      }
    }
  }, [isDataLoaded, getValues, setImageSrc]);

  useEffect(() => {
    if (isSuccess) {
      setShowModifyModal(true);
    }
  }, [isSuccess]);

  // 7. Event Handlers
  const handleAddressComplete = (data: {
    address: string;
    addressType: string;
    bname: string;
    buildingName: string;
  }) => {
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
    open({ onComplete: handleAddressComplete });
  };

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

  // 8. Utility Functions
  const getSubImageContainerClass = () => {
    const subImages = getValues('subImages');
    const length = subImages?.length || 0;

    if (length <= 1) return styles.subImageBox[0];
    if (length <= 3) return styles.subImageBox[2];
    if (length === 4) return styles.subImageBox[4];
    return styles.baseSubImageContainer;
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

  return (
    <>
      <div className={styles.activitiesPageContainer}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.topLayout}>
            {isLargeScreen && (
              <>
                <h2 className={styles.h2Title}>내 체험 수정</h2>
                <button className={styles.submitButton}>수정하기</button>
              </>
            )}
          </div>
          {!isLargeScreen && (
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
                            {CATEGORY_LIST.map((option) => (
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
                <div className={getSubImageContainerClass()}>
                  <div className={styles.subImageUploadBox} onClick={handleSubFileClick}>
                    <label htmlFor='subfile-upload' />
                    <div>
                      <div className={styles.fileUploadtext}>
                        <IconPlus />
                        <span>이미지 등록</span>
                      </div>
                    </div>
                    <input
                      multiple
                      className={styles.fileUploadInput}
                      id='subfile-upload'
                      type='file'
                      ref={subFileRef}
                      onChange={(e) => {
                        if (e.target.files && e.target.files.length > 0) {
                          const newFiles = Array.from(e.target.files);
                          const currentSubImages = getValues('subImages') || [];
                          const remainingSlots = MAX_SUB_IMAGES - currentSubImages.length;

                          if (remainingSlots <= 0) {
                            alert(`소개 이미지는 최대 ${MAX_SUB_IMAGES}개까지만 등록할 수 있습니다.`);
                            e.target.value = '';
                            return;
                          }

                          const filesToAdd = newFiles.slice(0, remainingSlots);

                          if (newFiles.length > remainingSlots) {
                            alert(
                              `소개 이미지는 최대 ${MAX_SUB_IMAGES}개까지만 등록할 수 있습니다. ${remainingSlots}개만 추가됩니다.`,
                            );
                          }

                          Promise.all(filesToAdd.map((file) => encodeFileToBase64(file))).then(
                            (newBase64Images: string[]) => {
                              const newImages: Array<{ src: string; file: File }> = [];

                              for (let i = 0; i < filesToAdd.length; i++) {
                                newImages.push({ src: newBase64Images[i], file: filesToAdd[i] });
                              }

                              setValue('subImages', [...currentSubImages, ...newImages], {
                                shouldDirty: true,
                                shouldTouch: true,
                                shouldValidate: true,
                              });

                              e.target.value = '';
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
                {!isLargeScreen && (
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
