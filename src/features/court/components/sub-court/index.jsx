import React from 'react';

/** @type {React.FC<Props>} */
export const SubCourt = (props) => {
  return (
    <div className={props.className}>
      <p>{props.name}</p>
    </div>
  );
};

/**
 * @typedef {Object} Props
 * @prop {string} name
 * @prop {string} className
 */
