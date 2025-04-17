import { style } from '@vanilla-extract/css';

export const bannerWrapper = style({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  width: '100%',
  height: '600px',
  '@media': {
    'screen and (min-width: 768px) and (max-width: 1199px)': {
      height: '550px',
    },
    'screen and (max-width: 767px)': {
      height: '240px',
    },
  },
});

export const loadingOverlay = style({
  position: 'absolute',
  inset: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 3,
});

export const overlay = style({
  position: 'absolute',
  inset: 0,
  backgroundColor: 'black',
  opacity: 0.3,
});

export const contentWrapper = style({
  position: 'absolute',
  zIndex: 10,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '62.5%',
  height: '100%',
  '@media': {
    'screen and (min-width: 768px) and (max-width: 1199px)': {
      width: '93.5%',
    },
    'screen and (min-width: 320px) and (max-width: 767px)': {
      width: '91.5%',
    },
  },
});

export const textWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  width: '502px',
  justifyContent: 'center',
  '@media': {
    'screen and (min-width: 768px) and (max-width: 1199px)': {},
    'screen and (max-width: 767px)': {},
  },
});

export const title = style({
  color: 'white',
  fontSize: '68px',
  lineHeight: '81px',
  fontWeight: 'bold',

  '@media': {
    'screen and (min-width: 768px) and (max-width: 1199px)': {
      fontSize: '54px',
      lineHeight: '64px',
    },
    'screen and (max-width: 767px)': {
      fontSize: '24px',
      lineHeight: '29px',
    },
  },
});

export const subtitle = style({
  color: 'white',
  fontSize: '24px',
  lineHeight: '29px',
  fontWeight: 'bold',
  '@media': {
    'screen and (min-width: 768px) and (max-width: 1199px)': {
      fontSize: '20px',
      lineHeight: '26px',
    },
    'screen and (max-width: 767px)': {
      fontSize: '14px',
      lineHeight: '26px',
    },
  },
});

export const errorWrapper = style({
  display: 'flex',
  justifyContent: 'center',
  textAlign: 'center',
  color: 'white',
  fontWeight: 'bold',
});

export const loadingWrapper = style({
  display: 'flex',
  justifyContent: 'center',
});
