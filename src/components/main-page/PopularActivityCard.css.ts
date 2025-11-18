import { style } from '@vanilla-extract/css';

export const cardContainer = style({
  position: 'relative',
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'nowrap',
  // width: '384px',
  gap: '16px',
  height: '384px',
  cursor: 'pointer',
});

export const imageContainer = style({
  position: 'relative',
  borderRadius: '24px',
  width: '384px',

  '@media': {
    'screen and (min-width: 320px) and (max-width: 767px)': {
      // width: '50%',
    },
  },
});

export const popularActivityImage = style({
  borderRadius: '24px',
  objectFit: 'cover',
  position: 'absolute',
});

export const overlay = style({
  position: 'absolute',
  inset: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.3)',
  borderRadius: '24px',
});

export const contentContainer = style({
  position: 'absolute',
  bottom: '32px',
  left: '20px',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  color: 'white',
  '@media': {
    'screen and (min-width: 320px) and (max-width: 767px)': {
      bottom: '24px',
      width: '146px',
      gap: '6px',
    },
  },
});

export const ratingContainer = style({
  display: 'flex',
  gap: '4px',
});

export const title = style({
  fontSize: '2rem',
  fontWeight: 'bold',
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  '@media': {
    'screen and (min-width: 768px) and (max-width: 1199px)': {
      fontSize: '1.5rem',
    },
    'screen and (min-width: 320px) and (max-width: 767px)': {
      fontSize: '1rem',
      WebkitLineClamp: 1,
    },
  },
});

export const priceContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
  fontSize: '1.25rem',
  fontWeight: 'bold',
  '@media': {
    'screen and (min-width: 320px) and (max-width: 767px)': {
      fontSize: '1rem',
    },
  },
});
