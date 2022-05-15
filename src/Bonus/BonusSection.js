import { lazy } from 'react';
import { Section, Chapter } from 'MasterDetail';

const OrderedList = lazy(() => import('./KeysExample/OrderedListExample'));
const GeneratedKey = lazy(() => import('./KeysExample/GeneratedKeyExample'));
const ConditionalKey = lazy(() =>
  import('./KeysExample/ConditionalKeyExample')
);
const RandomContainerTest = lazy(() =>
  import('./Lifecycle/RandomContainerTest')
);
const MemoContainerTest = lazy(() => import('./Lifecycle/MemoContainerTest'));
const DataRequestTest = lazy(() => import('./Conditional/DataRequestTest'));
const SwitchTest = lazy(() => import('./Conditional/SwitchTest'));
const UpdatesBatching = lazy(() => import('./UpdatesBatching'));
const DomManipulation = lazy(() => import('./DomManipulation'));
const StrictMode = lazy(() => import('./StrictMode'));
const Children = lazy(() => import('./Children'));
const Events = lazy(() => import('./Events'));
const EventDelegation = lazy(() => import('./EventDelegation'));

export default function BonusSection() {
  return (
    <Section title="Bonus">
      <Section title="Keys">
        <Chapter title="Ordered list" component={OrderedList} />
        <Chapter title="Generated key" component={GeneratedKey} />
        <Chapter title="Conditional" component={ConditionalKey} />
      </Section>
      <Section title="Lifecycle">
        <Chapter title="Random container" component={RandomContainerTest} />
        <Chapter title="Memoized container" component={MemoContainerTest} />
      </Section>
      <Section title="Conditional rendering">
        <Chapter title="Data request" component={DataRequestTest} />
        <Chapter title="Switch" component={SwitchTest} />
      </Section>
      <Chapter title="Updated batching" component={UpdatesBatching} />
      <Chapter title="DOM manipulation" component={DomManipulation} />
      <Chapter title="Strict mode" component={StrictMode} />
      <Chapter title="Children" component={Children} />
      <Chapter title="Events" component={Events} />
      <Chapter title="Event delegation" component={EventDelegation} />
    </Section>
  );
}
