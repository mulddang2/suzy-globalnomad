import { globalStyle, style } from '@vanilla-extract/css';

export const categoryListContainer = style({
  minHeight: '1204px',
});

export const container = style({
  marginTop: '35px',
  marginBottom: '32px',
  fontWeight: 'bold',
  display: 'flex',
  alignItems: 'center',
  fontSize: '36px',
  gap: '12px',

  '@media': {
    'screen and (max-width: 767px)': {
      fontSize: '18px',
      marginTop: '24px',
      marginBottom: '24px',
    },
  },
});

export const gridContainer = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', // 내부 이미지 컨텐츠 커졌을 경우 그리드 꺠짐 방지
  columnGap: '24px',
  rowGap: '48px',
  marginBottom: '64px',
  width: '100%',
  gridAutoRows: '450px',

  '@media': {
    'screen and (min-width: 768px) and (max-width: 1199px)': {
      gridTemplateColumns: 'repeat(3, 1fr)',
      columnGap: '16px',
      rowGap: '32px',
      gridAutoRows: '400px',
    },
    'screen and (min-width: 320px) and (max-width: 767px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
      columnGap: '8px',
      rowGap: '20px',
      gridAutoRows: '380px',
    },
  },
});

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
});

export const title = style({
  fontSize: '2rem',
  fontWeight: 'bold',
  marginBottom: '2rem',
  '@media': {
    'screen and (max-width: 640px)': {
      fontSize: '1.125rem',
      marginBottom: '1.5rem',
    },
    'screen and (min-width: 768px) and (max-width: 1199px)': {
      fontSize: '1.75rem',
    },
  },
});

export const skeletonContainer = style({
  display: 'flex',
  gap: '1.5rem',
  minWidth: 'max-content',
  '@media': {
    'screen and (max-width: 1024px)': {
      gap: '2rem',
    },
    'screen and (max-width: 640px)': {
      gap: '1rem',
    },
  },
});

export const emptyContainer = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '23.75rem',
  fontSize: '1.25rem',
  '@media': {
    'screen and (max-width: 1024px)': {
      height: '19.8125rem',
    },
    'screen and (max-width: 640px)': {
      height: '11.625rem',
      fontSize: '1rem',
    },
  },
});

export const noActivities = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '2rem',
  fontWeight: '500',
  color: '#FF6F61',
  '@media': {
    'screen and (max-width: 640px)': {
      fontSize: '1rem',
    },
  },
});

export const paginationContainer = style({
  marginTop: '2rem',
  display: 'flex',
  justifyContent: 'center',
  '@media': {
    'screen and (max-width: 640px)': {
      marginTop: '1rem',
    },
  },
});

globalStyle('::-webkit-scrollbar', {
  display: 'none',
});
