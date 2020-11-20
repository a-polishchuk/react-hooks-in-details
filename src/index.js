import React from 'react';
import ReactDOM from 'react-dom';
// import { Example } from './useState/useCounter';
// import { Example } from './useState/useLegacyState';
import { Example } from './useState/lazyInit';

ReactDOM.render(
  <React.StrictMode>
    <Example />
  </React.StrictMode>,
  document.getElementById('root')
);
