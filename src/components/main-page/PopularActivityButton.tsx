import PopularLeftArrowBtn from '@/assets/icons/popular-arrow-left.svg';
import PoPularRightArrowBtn from '@/assets/icons/popular-arrow-right.svg';
import React from 'react';
import * as styles from './PopularActivityButton.css';

interface PopularActivityButtonProps {
  onLeftClick: () => void;
  onRightClick: () => void;
  isLeftDisabled: boolean;
  isRightDisabled: boolean;
}

const PopularActivityButton = ({
  onLeftClick,
  onRightClick,
  isLeftDisabled,
  isRightDisabled,
}: PopularActivityButtonProps) => {
  return (
    <div className={styles.buttonContainer}>
      <button
        type='button'
        onClick={onLeftClick}
        disabled={isLeftDisabled}
        aria-label='Go to previous Activity'
        className={`${styles.arrowButton} ${isLeftDisabled ? styles.arrowButtonDisabled : ''}`}
      >
        <PopularLeftArrowBtn
          className={styles.icon[isLeftDisabled ? 'disabled' : 'enabled']}
        />
      </button>

      <button
        type='button'
        onClick={onRightClick}
        disabled={isRightDisabled}
        aria-label='Go to next Activity'
        className={`${styles.arrowButton} ${isRightDisabled ? styles.arrowButtonDisabled : ''}`}
      >
        <PoPularRightArrowBtn
          className={styles.icon[isRightDisabled ? 'disabled' : 'enabled']}
        />
      </button>
    </div>
  );
};

export default PopularActivityButton;
