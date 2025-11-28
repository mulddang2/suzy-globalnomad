import { globalStyle, style } from '@vanilla-extract/css';
import { global } from '@/styles/global.css';

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

export const mobileCategoryWrapper = style({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  width: '447px',

  '@media': {
    'screen and (max-width: 767px)': {
      width: '256px',
      maxWidth: '63%',
    },
    'screen and (min-width: 768px) and (max-width: 1199px)': {
      width: '522px',
      maxWidth: '60%',
    },
  },
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
  height: '100%',
});

export const mobileCategoryItem = style({
  width: 'auto !important',
  flexShrink: 0,
});

export const mobileCategoryList = style({
  padding: '0 !important',
  marginLeft: '0 !important',
  marginRight: '0 !important',
  listStyle: 'none !important',

  width: '100%',
  height: '100%',
  position: 'relative',
  overflow: 'hidden',

  selectors: {
    '&::after': {
      content: '',
      position: 'absolute',
      right: '0',
      background: 'linear-gradient(to left, #FAFBFC, rgba(250, 251, 252, 0.8), transparent) ',
      bottom: 0,
      width: '50px',
      height: '100%',
      zIndex: 10,
      pointerEvents: 'none',
    },
  },

  '@media': {
    'screen and (min-width: 320px) and (max-width: 767px)': {
      selectors: {
        '&::after': {
          width: '40px',
          right: '0',
          background: 'linear-gradient(to left, #FAFBFC 72%, rgba(250, 251, 252, 0.8), transparent) ',
        },
      },
    },
  },
});

export const mobileCategoryRemovePseudo = style({
  selectors: {
    '&::after': {
      content: 'none',
    },
  },
});

export const mobileCategoryNextButton = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '50%',
  width: '32px',
  height: '32px',
  objectFit: 'cover',
  objectPosition: 'center',
  position: 'absolute',
  right: '-50px',
  top: '50%',
  transform: 'translateY(-50%)',
  border: `1px solid ${global.color.gray[700]}`,
  backgroundColor: '#FFFFFF',
  cursor: 'pointer',
  zIndex: 11,

  '@media': {
    'screen and (min-width: 320px) and (max-width: 767px)': {
      display: 'none',
    },
  },
});

export const priceDropdownWrapper = style({
  height: '53px',
  minWidth: '130px',
  width: 'auto',
  '@media': {
    'screen and (min-width: 768px) and (max-width: 1199px)': {
      minWidth: '120px',
      maxWidth: '120px',
    },
    'screen and (min-width: 320px) and (max-width: 767px)': {
      maxHeight: '41px',
      width: '90px',
      minWidth: '90px',
      maxWidth: '90px',
    },
  },
});

export const categoryButton = style({
  width: '100px',
  height: '100%',
  display: 'flex',
  flexShrink: 0,
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: global.fontSize.regular,
  lineHeight: global.lineHeights.small,
  border: `1px solid ${global.color.green[200]}`,
  color: global.color.green[200],
  borderRadius: '15px',
  backgroundColor: '#FFFFFF',
  textWrap: 'nowrap',
  fontWeight: '500',
  padding: '16px 0',
  maxHeight: '58px',

  selectors: {
    '&:hover': {
      backgroundColor: global.color.green[200],
      color: '#FFFFFF',
    },
  },

  '@media': {
    'screen and (max-width: 1199px) and (min-width: 768px)': {
      width: '120px',
      maxWidth: '120px',
    },
    'screen and (max-width: 767px)': {
      maxWidth: '80px',
      padding: '7.5px 0',

      fontSize: global.fontSize.small,
      lineHeight: global.lineHeights.small,
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
      height: '40px',
      fontSize: '0.75rem',
      padding: '0.5rem 0.75rem',
    },
  },
});

// export const popoverWrapper = style({
//   position: 'absolute',
//   top: 0,
//   right: 0,
//   width: '14px',
//   height: '100%',

//   '@media': {
//     'screen and (max-width: 1199px) and (min-width: 768px)': {
//       width: '10px',
//     },
//     'screen and (max-width: 767px)': {
//       width: '8px',
//     },
//   },
// });

globalStyle('.swiper-scrollbar', {
  display: 'none',
});

globalStyle(`${categoryList}::-webkit-scrollbar`, {
  display: 'none',
});
