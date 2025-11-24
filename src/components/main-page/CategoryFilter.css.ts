import { globalStyle, style } from '@vanilla-extract/css';
import { global } from '@/styles/global.css';

export const container = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',

  selectors: {
    '&.active': {
      color: '#FFFFFF',
    },
  },
});

export const categoryWrapper = style({
  position: 'relative',
});

export const categoryList = style({
  display: 'flex',
  gap: '24px',
  overflowX: 'scroll',

  '@media': {
    'screen and (max-width: 1199px) and (min-width: 768px)': {
      gap: '14px',
    },
    'screen and (max-width: 767px)': {
      gap: '8px',
    },
  },
});

globalStyle(`${categoryList}::-webkit-scrollbar`, {
  display: 'none',
});

export const categoryButton = style({
  width: '127px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '58px',
  fontSize: global.fontSize.regular,
  lineHeight: global.lineHeights.small,
  border: `1px solid ${global.color.green[200]}`,
  color: global.color.green[200],
  borderRadius: '15px',
  backgroundColor: '#FFFFFF',
  textWrap: 'nowrap',

  selectors: {
    '&:hover': {
      backgroundColor: global.color.green[200],
      color: '#FFFFFF',
    },
  },

  '@media': {
    'screen and (max-width: 1199px) and (min-width: 768px)': {
      maxWidth: '120px',
    },
    'screen and (max-width: 767px)': {
      maxWidth: '80px',
      fontSize: global.fontSize.small,
      lineHeight: global.lineHeights.small,
      height: '41px',
    },
  },
});

export const activeCategoryButton = style({
  backgroundColor: global.color.green[200],
  color: '#FFFFFF',
});

export const sortButton = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '127px',
  height: '62px',
  fontSize: '1rem',
  backgroundColor: '#FFFFFF',
  border: '1px solid green',
  borderRadius: '2rem',
  padding: '1rem 1.25rem',

  '@media': {
    'screen and (max-width: 1199px) and (min-width: 768px)': {
      width: '90px',
      height: '46px',
      fontSize: '0.875rem',
      padding: '0.75rem 1rem',
    },
    'screen and (max-width: 767px)': {
      width: '80px',
      height: '40px',
      fontSize: '0.75rem',
      padding: '0.5rem 0.75rem',
    },
  },
});

export const popoverWrapper = style({
  position: 'absolute',
  top: 0,
  right: 0,
  width: '14px',
  height: '100%',

  '@media': {
    'screen and (max-width: 1199px) and (min-width: 768px)': {
      width: '10px',
    },
    'screen and (max-width: 767px)': {
      width: '8px',
    },
  },
});
