import React, { useEffect } from 'react';

import { HalfCourt } from './components/half-court';
import { SubCourt } from './components/sub-court';

import styles from './index.module.scss';

/** @type {React.FC} */
export const Court = () => {
  useEffect(() => {
    const onScreenChange = () => {
      const bodyStyle = document.body.style;
      const width = Math.floor(0.8 * document.body.clientWidth / 2) * 2;
      const height = Math.floor(315 / 680 * width / 2) * 2;
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
      <HalfCourt>
        <SubCourt
          imageStyles={styles.left_left}
          name="player 1"
        />
        <SubCourt
          imageStyles={styles.left_right}
          name="player 2"
        />
      </HalfCourt>
      <HalfCourt>
        <SubCourt
          imageStyles={styles.right_right}
          name="player 3"
        />
        <SubCourt
          imageStyles={styles.right_left}
          name="player 4"
        />
      </HalfCourt>
    </div>
  );
};
