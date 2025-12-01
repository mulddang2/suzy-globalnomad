import { StyleRule, style } from '@vanilla-extract/css';
import { global } from '@/styles/global.css';

const sharedButtonStyle: StyleRule = {
  width: '4rem',
  height: '4rem',
  backgroundColor: '#fff',
  border: '1px solid #ccc',
  borderRadius: '0.5rem',
  cursor: 'pointer',
  transition: 'background-color 0.3s, color 0.3s',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  fontWeight: 'bold',
  fontSize: '1rem',
};

export const pageButton = style({
  ...sharedButtonStyle,
  selectors: {
    '&:hover': {
      backgroundColor: 'rgba(11, 59, 45, 0.05)',
      color: global.color.green[200],
    },
    '&:disabled': {
      backgroundColor: '#E0E0E0',
      color: '#9E9E9E',
      borderColor: '#E0E0E0',
      cursor: 'not-allowed',
      opacity: 0.7,
    },
  },
});

export const activePageButton = style({
  fontWeight: 'bold',
  color: '#fff',
  backgroundColor: global.color.green[200],

  selectors: {
    '&:hover': {
      backgroundColor: 'rgba(11, 59, 45, 0.05)',
      color: global.color.green[200],
    },
  },
});

export const prevNextButton = style({
  ...sharedButtonStyle,
  padding: '0.65rem',
  selectors: {
    '&:hover': {
      backgroundColor: 'rgba(11, 59, 45, 0.05)',
      color: global.color.green[200],
    },
    '&:disabled': {
      backgroundColor: '#E0E0E0',
      color: '#9E9E9E',
      borderColor: '#E0E0E0',
      cursor: 'not-allowed',
      opacity: 0.7,
    },
  },
});

export const rightArrow = style({
  transition: 'fill 0.3s',
  fill: '#000',
  selectors: {
    '&:hover': {
      color: global.color.green[200],
    },
    '[disabled] &': {
      fill: '#6c757d',
    },
  },
});

export const leftArrow = style({
  transition: 'fill 0.3s',
  fill: '#000',
  selectors: {
    '&:hover': {
      backgroundColor: 'rgba(11, 59, 45, 0.05)',
      color: global.color.green[200],
    },
    '[disabled] &': {
      fill: '#6c757d',
    },
  },
});

export const paginationContainer = style({
  display: 'flex',
  gap: '0.5rem',
  alignItems: 'center',
  justifyContent: 'center',
});
