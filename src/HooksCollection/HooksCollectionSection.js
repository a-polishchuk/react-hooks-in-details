import { Section, Chapter } from 'components/MasterDetail';
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
import Chapter30 from './Chapter-30';
import Chapter31 from './Chapter-31';

export default function HooksCollectionSection() {
  return (
    <Section title="Custom hooks collection">
      <Chapter title="useToggle 2.0" component={Chapter17} />
      <Chapter title="useEventListener" component={Chapter18} />
      <Chapter title="useWhatCausedRender" component={Chapter19} />
      <Chapter title="useDebounce + useThrottle" component={Chapter20} />
      <Chapter title="useLocalStorage" component={Chapter21} />
      <Chapter title="useWindowSize" component={Chapter22} />
      <Chapter title="useAsync + useAnimatedText" component={Chapter23} />
      <Chapter title="usePrevious" component={Chapter24} />
      <Chapter title="useHistory" component={Chapter25} />
      <Chapter title="useElementSize" component={Chapter26} />
      <Chapter title="useInterval" component={Chapter27} />
      <Chapter title="useTimeout" component={Chapter28} />
      <Chapter title="useMountedRef" component={Chapter29} />
      <Chapter title="useHovered" component={Chapter30} />
      <Chapter title="useAsync 2.0" component={Chapter31} />
    </Section>
  );
}
