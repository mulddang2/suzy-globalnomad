import { fontSizes } from '@/styles/fontStyles.css';
import { style } from '@vanilla-extract/css';
import { global } from '@/styles/global.css';

export const container = style({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  background: 'none',
  paddingBottom: '118px',

  '@media': {
    'screen and (max-width: 767px)': {
      paddingBottom: '73px',
    },
  },
});

export const form = style({
  position: 'absolute',
  top: '-56px',
  display: 'flex',
  flexDirection: 'column',
  gap: '32px',
  width: '100%',
  padding: '24px',
  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
  borderRadius: '16px',
  backgroundColor: 'white',
  '@media': {
    'screen and (max-width: 1199px) and (min-width: 768px)': {},
    'screen and (max-width: 767px)': {
      gap: '15px',
      padding: '16px',
    },
  },
});

export const label = style([
  fontSizes.textXl,
  {
    color: global.color.black,
    fontWeight: 'bold',
    '@media': {
      'screen and (max-width: 767px)': {
        fontSize: '1rem',
      },
    },
  },
]);

export const inputContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  width: '100%',
  height: '56px',
});

export const button = style([
  fontSizes.textLg,
  {
    backgroundColor: global.color.nomadBlack,
    color: global.color.white,
    borderRadius: '4px',
    fontWeight: 'bold',
    minWidth: '136px',
    height: '56px',
    padding: '0 40px',
    ':hover': {
      backgroundColor: '#444',
    },
    '@media': {
      'screen and (max-width: 767px)': {
        minWidth: '96px',
        padding: '0 20px',
      },
    },
  },
]);
