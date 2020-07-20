import React from 'react';
import loadable from '@loadable/component';

const Moment = loadable.lib(() => import('moment'));
export default function FromNow({ date }) {
  return (
    <div>
      <Moment fallback={date.toLocaleDateString()}>
        {({ default: momenta }) =>
          setTimeout(() => momenta(date).fromNow(), 10000000)
        }
      </Moment>
    </div>
  );
}
