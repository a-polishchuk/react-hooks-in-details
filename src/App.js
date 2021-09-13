import { MasterDetail, Section, Chapter } from './MasterDetail';
import {
  Chapter1,
  Chapter2,
  Chapter3,
  Chapter4,
  Chapter5,
  Chapter6,
  Chapter7,
  Chapter8,
  Chapter9,
  Chapter10,
  Chapter11,
  Chapter12,
  Chapter13,
  Chapter14,
  Chapter15,
  Chapter16,
} from './HooksBasics';
import {
  Chapter17,
  Chapter18,
  Chapter19,
  Chapter20,
  Chapter21,
  Chapter22,
  Chapter23,
  Chapter24,
  Chapter25,
  Chapter26,
  Chapter27,
  Chapter28,
  Chapter29,
  Chapter30,
  Chapter31,
} from './HooksCollection';
import { SWR } from './DataFecthing';
import {
  OrderedList,
  GeneratedKey,
  ConditionalKey,
  UpdatesBatching,
  DomManipulation,
  StrictMode,
  Children,
  Events,
  EventDelegation,
} from './Bonus';

export default function App() {
  return (
    <MasterDetail>
      <Section title="Hooks basics, useState">
        <Chapter title="useState basics" component={Chapter1} />
        <Chapter title="Function vs class" component={Chapter2} />
        <Chapter title="First custom hooks" component={Chapter3} />
        <Chapter title="Lazy init" component={Chapter4} />
        <Chapter title="Storing functions" component={Chapter5} />
      </Section>

      <Section title="Side effects, useEffect">
        <Chapter title="useEffect basics" component={Chapter6} />
        <Chapter title="useLayoutEffect" component={Chapter7} />
      </Section>

      <Section title="Imperative code, useRef">
        <Chapter title="useRef" component={Chapter8} />
        <Chapter title="Master-detail layout" component={Chapter9} />
        <Chapter title="useImperativeHandle" component={Chapter10} />
        <Chapter title="HOCs" component={Chapter11} />
      </Section>

      <Section title="Advanced hooks and concepts">
        <Chapter title="useCallback" component={Chapter11} />
        <Chapter title="useMemo + How render works" component={Chapter12} />
        <Chapter title="useContext" component={Chapter13} />
        <Chapter title="useReducer" component={Chapter14} />
        <Chapter title="useDebugValue" component={Chapter15} />
        <Chapter title="Hooks fabric" component={Chapter16} />
      </Section>

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

      <Section title="Data fecthing">
        <Chapter title="SWR" component={SWR} />
      </Section>

      <Section title="Bonus">
        <Section title="Keys">
          <Chapter title="Ordered list" component={OrderedList} />
          <Chapter title="Generated key" component={GeneratedKey} />
          <Chapter title="Conditional" component={ConditionalKey} />
        </Section>
        <Chapter title="Updated batching" component={UpdatesBatching} />
        <Chapter title="DOM manipulation" component={DomManipulation} />
        <Chapter title="Strict mode" component={StrictMode} />
        <Chapter title="Children" component={Children} />
        <Chapter title="Events" component={Events} />
        <Chapter title="Event delegation" component={EventDelegation} />
      </Section>
    </MasterDetail>
  );
}
