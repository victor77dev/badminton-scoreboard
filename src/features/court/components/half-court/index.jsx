import React from 'react';

import styles from './index.module.scss';

/** @type {React.FC<Props>} */
export const HalfCourt = ({className, children}) => {
  return (
    <div className={`${styles.half_court} ${className}`}>
      {children}
    </div>
  );
};

/**
 * @typedef {Object} Props
 * @prop {string} className
 */
