import React from 'react';

import styles from './index.module.scss';

/** @type {React.FC} */
export const HalfCourt = ({children}) => {
  return (
    <div className={styles.half_court}>
      {children}
    </div>
  );
};
