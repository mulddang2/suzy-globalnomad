import { fontSizes, fontWeights } from '@/styles/fontStyles.css';
import { style } from '@vanilla-extract/css';
import { global } from '@/styles/global.css';

export const cardContainer = style({
  position: 'relative',
  aspectRatio: '1 / 1',
  width: '100%',
  cursor: 'pointer',
  overflow: 'hidden',
  borderRadius: '24px',
});

export const imageContainer = style({
  position: 'relative',
  width: '100%',
  height: '100%',
});

export const popularActivityImage = style({
  objectFit: 'cover',
  width: '100%',
  height: '100%',
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
  width: '90%',
  maxWidth: '251px',
  '@media': {
    'screen and (min-width: 320px) and (max-width: 767px)': {
      bottom: '24px',
      maxWidth: '146px',
      gap: '6px',
    },
    'screen and (max-width: 1199px)': {
      textOverflow: 'ellipsis',
      minWidth: '146px',
      overflow: 'hidden',
    },
  },
});

export const ratingContainer = style([
  fontWeights.semibold,
  {
    display: 'flex',
    gap: '4px',
  },
]);

export const title = style([
  fontSizes.text3xl,
  fontWeights.bold,
  {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    height: '84px',
    '@media': {
      'screen and (min-width: 320px) and (max-width: 767px)': {
        height: '52px',
        fontSize: global.fontSize.regular,
        lineHeight: global.lineHeights.small,
      },
    },
  },
]);

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

export const pricePerPerson = style([
  fontSizes.textMd,
  fontWeights.regular,
  {
    color: global.color.gray[700],
  },
]);
