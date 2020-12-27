import React from 'react';

import styles from './index.module.scss';

/** @type {React.FC<Props>} */
export const SubCourt = (props) => {
  return (
    <div className={styles.container}>
      <span className={styles.name}>{props.name}</span>
      <div className={`${styles.court_image} ${props.imageStyles}`} />
    </div>
  );
};

/**
 * @typedef {Object} Props
 * @prop {string} name
 * @prop {string} imageStyles
 */
