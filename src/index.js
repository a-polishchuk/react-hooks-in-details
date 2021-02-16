import ReactDOM from 'react-dom';
import { MasterDetail } from './MasterDetail/MasterDetail';

import { Clicker as Chapter1 } from './Chapter-1';
import { FormExample as Chapter2 } from './Chapter-2';
import { Example as Chapter3 } from './Chapter-3';
import { Example as Chapter4 } from './Chapter-4';
import { Calculator as Chapter5 } from './Chapter-5';
import { Counter as Chapter6 } from './Chapter-6';
import { Example as Chapter7 } from './Chapter-7';
import { Example as Chapter8 } from './Chapter-8';
import { Chapter9 } from './Chapter-9';
import { Chapter10 } from './Chapter-10';
import { Chapter11 } from './Chapter-11';
import { Chapter12 } from './Chapter-12';

const content = {
  ch_1: { name: 'Chapter 1', component: Chapter1 },
  ch_2: { name: 'Chapter 2', component: Chapter2 },
  ch_3: { name: 'Chapter 3', component: Chapter3 },
  ch_4: { name: 'Chapter 4', component: Chapter4 },
  ch_5: { name: 'Chapter 5', component: Chapter5 },
  ch_6: { name: 'Chapter 6', component: Chapter6 },
  ch_7: { name: 'Chapter 7', component: Chapter7 },
  ch_8: { name: 'Chapter 8', component: Chapter8 },
  ch_9: { name: 'Chapter 9', component: Chapter9 },
  ch_10: { name: 'Chapter 10', component: Chapter10 },
  ch_11: { name: 'Chapter 11', component: Chapter11 },
  ch_12: { name: 'Chapter 12', component: Chapter12 },
};

ReactDOM.render(
  <MasterDetail content={content} />,
  document.getElementById('root')
);
