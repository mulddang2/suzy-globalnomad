import { globalStyle, style } from '@vanilla-extract/css';
import { global } from '@/styles/global.css';

export const container = style({});

// export const categoryWrapper = style({
//   position: 'relative',
// });

export const pcLayout = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  selectors: {
    '&.active': {
      color: '#FFFFFF',
    },
  },

  '@media': {
    'screen and (max-width: 1199px) and (min-width: 768px)': {},
    'screen and (max-width: 767px)': {
      height: '51px',
    },
  },
});

export const mobileLayout = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const categoryList = style({
  display: 'flex',
  overflowX: 'auto',
  gap: '14px',

  '@media': {
    'screen and (min-width: 768px) and (max-width: 1199px)': {
      maxWidth: '522px',
    },
    'screen and (max-width: 767px)': {
      gap: '8px',
      maxWidth: '225px',
    },
  },
});

export const categoryItem = style({
  flex: '1 1 0',
});

export const mobileCategoryItem = style({
  // flexShrink: 0,
});

export const mobileCategoryList = style({
  overflowX: 'hidden',

  '@media': {
    'screen and (min-width: 320px) and (max-width: 767px)': {
      width: '256px',
    },
    'screen and (min-width: 768px) and (max-width: 1199px)': {
      width: '522px',
    },
  },
  // width: '100px',
});

globalStyle(`${categoryList}::-webkit-scrollbar`, {
  display: 'none',
});

export const categoryButton = style({
  width: '100px',
  display: 'flex',
  flexShrink: 0,
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
  fontWeight: '500',

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
      // width: '80px',
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
