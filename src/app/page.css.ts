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
    'screen and (min-width: 320px) and (max-width: 767px)': {},
    'screen and (min-width: 1200px)': {},
  },
});
