import { globalStyle, style } from '@vanilla-extract/css';

export const container = style({
  marginTop: '2.5rem',
  marginBottom: '3.75rem',
  '@media': {
    'screen and (min-width: 768px) and (max-width: 1199px)': {
      marginTop: '1.5rem',
      marginBottom: '2.5rem',
    },
    'screen and (min-width: 320px) and (max-width: 767px)': {
      marginTop: '1.5rem',
      marginBottom: '2.5rem',
    },
  },
});

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '33px',
  '@media': {
    'screen and (min-width: 320px) and (max-width: 767px)': {
      marginBottom: '24px',
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

export const cardContainer = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '16px',
  width: '100%',
  maxWidth: '1200px',

  '@media': {
    'screen and (min-width: 768px) and (max-width: 1199px)': {
      gridTemplateColumns: 'repeat(3, 80%)',
      overflowX: 'auto',
      scrollSnapType: 'x mandatory',
    },
    'screen and (max-width: 767px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
  },
});

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
  padding: '1rem',
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
