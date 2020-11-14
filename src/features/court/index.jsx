import React from 'react';

import {HalfCourt} from './components/half-court';
import {SubCourt} from './components/sub-court';

/** @type {React.FC} */
export const Court = () => {
  return (
    <div>
      <HalfCourt>
        <SubCourt name="1"/>
        <SubCourt name="2"/>
      </HalfCourt>
      <HalfCourt>
        <SubCourt name="3"/>
        <SubCourt name="4"/>
      </HalfCourt>
    </div>
  );
};
