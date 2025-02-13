import { style } from '@vanilla-extract/css';

export const profileImageBox = style({
  backgroundColor: '#E3E5E8',
  position: 'relative',
  width: '45px',
  height: '45px',
  borderRadius: '50%',
  overflow: 'hidden',
});

export const profileImageContent = style({
  position: 'absolute',
});

export const profileDefaultImage = style({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
});
