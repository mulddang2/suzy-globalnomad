import { style } from '@vanilla-extract/css';
import { global } from '@/styles/global.css';

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  paddingBottom: '8rem',
  backgroundColor: global.color.whiteBg,
  '@media': {
    'screen and (min-width: 768px) and (max-width: 1199px)': {
      width: 'calc(100% - 1rem)',
    },
    'screen and (min-width: 320px) and (max-width: 767px)': {
      width: '100%',
      padding: '0.5rem',
    },
    'screen and (min-width: 1200px)': {
      width: '100%',
    },
  },
});
