import { fontSizes } from '@/styles/fontStyles.css';
import { style, styleVariants } from '@vanilla-extract/css';
import { global } from '@/styles/global.css';

const defaultVariant = {
  borderRadius: '4px',
  padding: '15px 16px',
};

export const variantStyles = styleVariants({
  default: defaultVariant,

  /** 로그인, 회원가입만 해당 스타일 */
  authPage: {
    borderRadius: '6px',
    padding: '16px 20px',
  },

  withIcon: {
    ...defaultVariant,
    padding: '8px 16px 8px 12px',
  },
});

export const inputContainer = style({
  display: 'grid',
  alignItems: 'center',
  gridTemplateColumns: 'auto 1fr auto',
  width: '100%',
  height: '100%',
  outline: `1px solid ${global.color.gray[800]}`,
  backgroundColor: '#fff',

  selectors: {
    '&:focus-within': {
      outline: `2px solid ${global.color.green[200]}`,
    },
  },
});

export const errorStyle = style({
  outline: `1px solid ${global.color.red[300]}`,

  selectors: {
    '&:focus-within': {
      outline: `2px solid ${global.color.red[300]}`,
      border: 'none',
    },
  },
});

export const errorMessage = style({
  fontSize: fontSizes.textXs,
  color: global.color.red[300],
  marginTop: '8px',
});

export const leftIconDiv = style({
  gridColumn: '1',
  display: 'flex',
  alignItems: 'center',
  paddingRight: '12px',
});

export const inputField = style({
  margin: '0',
  padding: '0',
  gridColumn: '2',
  minWidth: '0',
  width: '100%',
  border: 'none',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',

  selectors: {
    '&:focus': {
      outline: 'none',
    },

    '&::placeholder': {
      color: global.color.gray[600],
    },
  },

  '@media': {
    'screen and (max-width: 768px)': {
      selectors: {
        '&::placeholder': {
          fontSize: '14px',
        },
      },
    },
  },
});

export const rightIconDiv = style({
  gridColumn: '3',
});
