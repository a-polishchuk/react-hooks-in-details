import ReactDOM from 'react-dom';
import { MasterDetail } from './MasterDetail/MasterDetail';

import Chapter1 from './Chapter-1';
import Chapter2 from './Chapter-2';
import Chapter3 from './Chapter-3';
import Chapter4 from './Chapter-4';
import Chapter5 from './Chapter-5';
import Chapter6 from './Chapter-6';
import Chapter7 from './Chapter-7';
import Chapter8 from './Chapter-8';
import Chapter9 from './Chapter-9';
import Chapter10 from './Chapter-10';
import Chapter11 from './Chapter-11';
import Chapter12 from './Chapter-12';
import Chapter13 from './Chapter-13';
import Chapter14 from './Chapter-14';
import ContactBook from './Chapter-14/ContactBook';
import Chapter15 from './Chapter-15';
import Chapter16 from './Chapter-16';
import Chapter17 from './Chapter-17';
import Chapter18 from './Chapter-18';
import Chapter19 from './Chapter-19';
import Chapter20 from './Chapter-20';
import Chapter21 from './Chapter-21';
import Chapter22 from './Chapter-22';
import Chapter23 from './Chapter-23';
import Chapter24 from './Chapter-24';
import Chapter25 from './Chapter-25';
import Chapter26 from './Chapter-26';
import Chapter27 from './Chapter-27';
import Chapter28 from './Chapter-28';
import Chapter29 from './Chapter-29';

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
  ch_13: { name: 'Chapter 13', component: Chapter13 },
  ch_14: { name: 'Chapter 14', component: Chapter14 },
  ch_14_1: { name: 'Chapter 14 - Contact Book', component: ContactBook },
  ch_15: { name: 'Chapter 15', component: Chapter15 },
  ch_16: { name: 'Chapter 16', component: Chapter16 },
  ch_17: { name: 'Chapter 17', component: Chapter17 },

  ch_18: { name: 'useEventListener', component: Chapter18 },
  ch_19: { name: 'useWhatCausedRender', component: Chapter19 },
  ch_20: { name: 'useDebounce, useThrottle', component: Chapter20 },
  ch_21: { name: 'useLocalStorage', component: Chapter21 },
  ch_22: { name: 'useWindowSize', component: Chapter22 },
  ch_23: { name: 'useAsync, useAnimatedText', component: Chapter23 },
  ch_24: { name: 'usePrevious', component: Chapter24 },
  ch_25: { name: 'useHistory', component: Chapter25 },
  ch_26: { name: 'useInterval', component: Chapter26 },
  ch_27: { name: 'useTimeout', component: Chapter27 },
  ch_28: { name: 'useMountedRef', component: Chapter28 },
  ch_29: { name: 'useHovered', component: Chapter29 },
};

ReactDOM.render(
  <MasterDetail content={content} />,
  document.getElementById('root')
);
