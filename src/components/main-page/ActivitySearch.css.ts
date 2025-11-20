import { fontSizes } from '@/styles/fontStyles.css';
import { style } from '@vanilla-extract/css';
import { global } from '@/styles/global.css';

export const container = style({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  background: 'none',
  paddingBottom: '158px',

  '@media': {
    'screen and (min-width: 768px) and (max-width: 1199px)': {
      paddingBottom: '142px',
    },
    'screen and (max-width: 767px)': {
      paddingBottom: '93px',
    },
  },
});

export const form = style({
  position: 'absolute',
  top: '-60px',
  display: 'flex',
  flexDirection: 'column',
  gap: '32px',
  width: '100%',
  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
  borderRadius: '16px',
  backgroundColor: 'white',
  padding: '32px 24px',

  '@media': {
    'screen and (min-width: 320px) and (max-width: 767px)': {
      padding: '16px 24px',
      gap: '15px',
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

export const inputGroup = style({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  height: '56px',
});

export const inputWrapper = style({
  flexGrow: 1,
  height: '56px',
});

export const button = style([
  fontSizes.textLg,
  {
    backgroundColor: global.color.nomadBlack,
    color: global.color.white,
    borderRadius: '4px',
    fontWeight: 'bold',
    width: '136px',
    height: '56px',
    padding: '0 40px',
    textAlign: 'center',
    ':hover': {
      backgroundColor: '#444',
    },

    '@media': {
      'screen and (max-width: 767px)': {
        padding: '15px 20px',
        fontSize: global.fontSize.xxTiny,
        lineHeight: global.lineHeights.xxTiny,
      },
    },
  },
]);
