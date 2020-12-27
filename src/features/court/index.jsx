import React, { useEffect } from 'react';

import { HalfCourt } from './components/half-court';
import { SubCourt } from './components/sub-court';

import styles from './index.module.scss';

/** @type {React.FC} */
export const Court = () => {
  useEffect(() => {
    const onScreenChange = () => {
      const bodyStyle = document.body.style;
      const width = Math.round(0.8 * document.body.clientWidth);
      const height = Math.round(315 / 680 * width);
      bodyStyle.setProperty('--court_width', `${width}px`);
      bodyStyle.setProperty('--court_height', `${height}px`);
    }

    onScreenChange();
    window.addEventListener('resize', onScreenChange);

    return () => {
      window.removeEventListener('resize', onScreenChange);
    };
  });

  return (
    <div className={styles.court}>
      <HalfCourt className={styles.left_half}>
        <SubCourt className={styles.left_side} name="1"/>
        <SubCourt className={styles.right_side} name="2"/>
      </HalfCourt>
      <HalfCourt className={styles.right_half}>
        <SubCourt className={styles.left_side} name="3"/>
        <SubCourt className={styles.right_side} name="4"/>
      </HalfCourt>
    </div>
  );
};
