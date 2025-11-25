import { fontSizes, fontWeights } from '@/styles/fontStyles.css';
import { style } from '@vanilla-extract/css';

export const activityCardWrapper = style({
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  width: '100%',
});

export const activityCardInnerWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
});

export const activityCardImageBox = style({
  position: 'relative',
  width: '100%',
  aspectRatio: '1 / 1',
  overflow: 'hidden',
  borderRadius: '24px',
});

export const activityCardImage = style({
  objectFit: 'cover',
  width: '100%',
  height: '100%',
});

export const activityCardDetails = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  borderRadius: '16px',

  selectors: {
    '&:hover': {
      backgroundColor: '#F5F5F5',
      color: '#333',
    },
  },
});

export const ratingWrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
});

export const ratingText = style({
  fontWeight: '500',
});

export const reviewCountText = style({
  color: '#888',
});

export const activityTitle = style([
  fontSizes.text2xl,
  fontWeights.semibold,
  {
    marginBottom: '5px',
    width: '100%',

    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 2,
    overflow: 'hidden',
    textOverflow: 'ellipsis',

    '@media': {
      'screen and (min-width: 768px) and (max-width: 1199px)': {},
      'screen and (min-width: 320px) and (max-width: 767px)': {
        fontSize: '18px',
      },
    },
  },
]);

export const priceWrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
  fontSize: '28px',
  fontWeight: '700',
  '@media': {
    'screen and (min-width: 768px) and (max-width: 1199px)': {},
    'screen and (min-width: 320px) and (max-width: 767px)': {},
  },
});

export const perPersonText = style({
  fontSize: '16px',
  color: '#888',
});
