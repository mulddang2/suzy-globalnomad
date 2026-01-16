import { fontSizes, fontWeights } from '@/styles/fontStyles.css';
import { style } from '@vanilla-extract/css';
import { global } from '@/styles/global.css';

export const sidebarContainer = style({
  width: '100%',
  border: `1px solid ${global.color.gray[200]}`,
  padding: '24px',
  borderRadius: '12px',
  boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.05)',
  backgroundColor: global.color.white,
  position: 'sticky',
  top: '24px',
  transition: 'all 0.3s ease-in-out',

  '@media': {
    'screen and (max-width: 1199px)': {
      position: 'static',
      width: '100%',
      border: 'none',
      borderRadius: '24px 24px 0 0',
      boxShadow: '0px -4px 10px rgba(0, 0, 0, 0.1)',
      padding: '16px 24px',
    },
  },
});

export const open = style({});

export const toggleHandle = style({
  display: 'none',
  width: '40px',
  height: '4px',
  backgroundColor: global.color.gray[300],
  borderRadius: '2px',
  margin: '0 auto 16px auto',
  cursor: 'pointer',
  '@media': {
    'screen and (max-width: 1199px)': {
      display: 'block',
    },
  },
});

export const contentWrapper = style({
  display: 'block',
  overflow: 'hidden',
  transition: 'max-height 0.3s ease-in-out',

  selectors: {
    [`${sidebarContainer}:not(.${open}) &`]: {
      '@media': {
        'screen and (max-width: 1199px)': {
          display: 'none',
        },
      },
    },
  },
});

export const priceLayout = style({
  display: 'flex',
  alignItems: 'center',
  gap: '5px',
  marginBottom: '16px',
});

export const price = style([
  fontSizes.text3xl,
  fontWeights.bold,
  {
    color: global.color.nomadBlack,
  },
]);

export const priceUnit = style([
  fontSizes.textLg,
  fontWeights.regular,
  {
    color: global.color.nomadBlack,
  },
]);

export const divider = style({
  width: '100%',
  height: '1px',
  backgroundColor: global.color.gray[200],
  margin: '16px 0',
});

export const sectionTitle = style([
  fontSizes.textXl,
  fontWeights.bold,
  {
    color: global.color.nomadBlack,
    marginBottom: '8px',
  },
]);

export const totalPriceLayout = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: '24px',
  marginBottom: '24px',
});

export const totalPriceLabel = style([
  fontSizes.textXl,
  fontWeights.bold,
  {
    color: global.color.nomadBlack,
  },
]);

export const totalPrice = style([
  fontSizes.textXl,
  fontWeights.bold,
  {
    color: global.color.nomadBlack,
  },
]);

export const reserveButton = style({
  width: '100%',
  padding: '14px',
  backgroundColor: global.color.nomadBlack,
  color: global.color.white,
  borderRadius: '8px',
  fontSize: '16px',
  fontWeight: 'bold',
  cursor: 'pointer',
  border: 'none',
  transition: 'background-color 0.2s',
  ':hover': {
    backgroundColor: '#333',
  },
  ':disabled': {
    backgroundColor: global.color.gray[100],
    cursor: 'not-allowed',
  },
});
