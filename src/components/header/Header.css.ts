import { style } from '@vanilla-extract/css';
import { global } from '@/styles/global.css';

export const headerContainer = style({
  width: '100%',
  margin: '0 auto',

  borderBottom: `0.1rem solid ${global.color.gray[300]}`,
  backgroundColor: '#FFFFFF',

  '@media': {
    'screen and (min-width: 768px) and (max-width: 1199px)': {},
    'screen and (max-width: 767px)': {},
  },
});

export const headerBox = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '62.5%',
  height: '70px',
  margin: '0 auto',
});

export const logoContainer = style({
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
});

export const logoImage = style({
  '@media': {
    'screen and (max-width: 767px)': {
      width: '140px',
    },
  },
});

export const title = style({
  marginLeft: '10px',
  fontSize: '12px',
  color: '#333',
});

export const userInfo = style({
  width: '170px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const notificationContainer = style({
  position: 'relative',
});

export const alarmModalContainer = style({
  position: 'absolute',
  top: '40px',
  right: '200px',
  zIndex: 10,
});

export const notificationButton = style({
  fontSize: '12px',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  '@media': {
    'screen and (max-width: 767px)': {
      fontSize: '10px',
    },
  },
});

export const icon = style({});

export const divider = style({
  width: '1px',
  height: '22px',
  backgroundColor: `${global.color.gray[300]}`,
  margin: '1px',
});

export const avatarContainer = style({
  position: 'relative',
});

export const avatar = style({
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  border: `1px solid ${global.color.gray[300]}`,
});

export const authButtons = style({
  display: 'flex',
  gap: '10px',
  minWidth: '111px',
});

export const authButton = style({
  fontSize: '14px',
  backgroundColor: '#FFFFFF',
  color: '#1b1b1b',
  cursor: 'pointer',
  transition: 'background-color 0.2s ease',
});
