import { globalStyle, style } from '@vanilla-extract/css';

export const container = style({
  marginTop: '34px',
  marginBottom: '3.75rem',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '32px',

  '@media': {
    'screen and (min-width: 768px) and (max-width: 1199px)': {
      marginTop: '18px',
      marginBottom: '2.5rem',
    },
    'screen and (min-width: 320px) and (max-width: 767px)': {
      marginTop: '24px',
      marginBottom: '2.5rem',
      gap: '16px',
    },
  },
});

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '43px',

  '@media': {
    'screen and (min-width: 320px) and (max-width: 767px)': {
      height: '21px',
    },
  },
});

export const title = style({
  fontSize: '36px',
  fontWeight: 'bold',

  '@media': {
    'screen and (min-width: 320px) and (max-width: 767px)': {
      fontSize: '18px',
    },
  },
});

export const swiperNavigationButtons = style({
  display: 'flex',
  gap: '10px',

  '@media': {
    'screen and (min-width: 320px) and (max-width: 1199px)': {
      display: 'none',
    },
  },
});

export const buttonActive = style({
  color: '#4B4B4B',
  cursor: 'pointer',
});

export const buttonDisabled = style({
  color: '#A1A1A1',
  cursor: 'default',
});

export const cardContainer = style({});

export const skeletonCardContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  width: '100%',
});

export const skeletonContainer = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
  gap: '16px',
  width: '100%',
});

export const emptyContainer = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '23.75rem',
  fontSize: '1.25rem',

  '@media': {
    'screen and (min-width: 768px) and (max-width: 1199px)': {
      height: '19.8125rem',
    },
    'screen and (min-width: 320px) and (max-width: 767px)': {
      height: '11.625rem',
      fontSize: '1rem',
    },
  },
});

globalStyle('::-webkit-scrollbar', {
  display: 'none',
});

globalStyle('.swiper-wrapper', {
  display: 'flex',
  flexWrap: 'nowrap',
});

globalStyle('.swiperContainer', {
  overflow: 'hidden',
  '@media': {
    'screen and (min-width: 320px) and (max-width: 1199px)': {
      overflow: 'visible',
    },
  },
});

globalStyle('.swiper-button-next > svg, .swiper-button-prev > svg', {
  display: 'none',
});
