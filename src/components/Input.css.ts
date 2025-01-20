import { fontSizes } from '@/styles/fontStyles.css';
import { style, styleVariants } from '@vanilla-extract/css';
import { global } from '@/styles/global.css';

export const variantStyles = styleVariants({
  default: {
    borderRadius: '4px',
    padding: '15px 16px',
  },
  /** 로그인, 회원가입만 해당 스타일 */
  authPage: {
    borderRadius: '6px',
    padding: '16px 20px',
  },
});

export const inputContainer = style({
  display: 'grid',
  alignItems: 'center',
  gridTemplateColumns: 'auto 1fr auto',
  width: '100%',
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
});

export const inputField = style({
  gridColumn: '2',
  minWidth: '100px',
  border: 'none',

  selectors: {
    '&:focus': {
      outline: 'none',
    },

    '&::placeholder': {
      color: global.color.gray[600],
    },
  },
});

export const rightIconDiv = style({
  gridColumn: '3',
});
