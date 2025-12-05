import { style } from '@vanilla-extract/css';
import { global } from '@/styles/global.css';

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  backgroundColor: global.color.whiteBg,
});

export const mainLayout = style({
  width: '62.5%',
  margin: '0 auto',
  '@media': {
    'screen and (min-width: 768px) and (max-width: 1199px)': {
      width: '93.5%',
    },
    'screen and (min-width: 320px) and (max-width: 767px)': {
      width: '91.5%',
    },
  },
});
