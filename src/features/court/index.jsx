import React from 'react';

import { HalfCourt } from './components/half-court';
import { SubCourt } from './components/sub-court';

import styles from './index.module.scss';

/** @type {React.FC} */
export const Court = () => {
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
