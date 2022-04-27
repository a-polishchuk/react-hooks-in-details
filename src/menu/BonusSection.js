import { lazy } from 'react';
import { Section, Chapter } from '../MasterDetail';

const OrderedList = lazy(() => import('Bonus/KeysExample/OrderedListExample'));
const GeneratedKey = lazy(() =>
  import('Bonus/KeysExample/GeneratedKeyExample')
);
const ConditionalKey = lazy(() =>
  import('Bonus/KeysExample/ConditionalKeyExample')
);
const RandomContainerTest = lazy(() =>
  import('Bonus/Lifecycle/RandomContainerTest')
);
const MemoContainerTest = lazy(() =>
  import('Bonus/Lifecycle/MemoContainerTest')
);
const DataRequestTest = lazy(() => import('Bonus/Conditional/DataRequestTest'));
const SwitchTest = lazy(() => import('Bonus/Conditional/SwitchTest'));
const UpdatesBatching = lazy(() => import('Bonus/UpdatesBatching'));
const DomManipulation = lazy(() => import('Bonus/DomManipulation'));
const StrictMode = lazy(() => import('Bonus/StrictMode'));
const Children = lazy(() => import('Bonus/Children'));
const Events = lazy(() => import('Bonus/Events'));
const EventDelegation = lazy(() => import('Bonus/EventDelegation'));

export function BonusSection() {
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
