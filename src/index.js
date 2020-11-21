import React from 'react';
import ReactDOM from 'react-dom';
// import { Example } from './useState/useCounter';
// import { Example } from './useState/useLegacyState';
// import { Example } from './useState/lazyInit';
// import { Example } from './useState/storingFunctions';
import { Example } from './useState/staleState';

ReactDOM.render(
  <React.StrictMode>
    <Example delay={3000} />
  </React.StrictMode>,
  document.getElementById('root')
);
