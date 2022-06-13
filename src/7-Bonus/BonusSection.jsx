import { Section, Chapter } from 'components/MasterDetail';
import OrderedList from './KeysExample/OrderedListExample';
import GeneratedKey from './KeysExample/GeneratedKeyExample';
import ConditionalKey from './KeysExample/ConditionalKeyExample';
import { RandomContainerTest } from './Lifecycle/RandomContainerTest';
import { MemoContainerTest } from './Lifecycle/MemoContainerTest';
import DataRequestTest from './Conditional/DataRequestTest';
import SwitchTest from './Conditional/SwitchTest';
import UpdatesBatching from './UpdatesBatching';
import DomManipulation from './DomManipulation';
import { StrictModeExample } from './SctricMode';
import { ChildrenExample } from './Children';
import Events from './Events';
import { EventDelegation } from './EventDelegation';
import { ThreeJsDemo } from './ThreeJs';

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
      <Chapter title="Strict mode" component={StrictModeExample} />
      <Chapter title="Children" component={ChildrenExample} />
      <Chapter title="Events" component={Events} />
      <Chapter title="Event delegation" component={EventDelegation} />
      <Chapter title="three.js" component={ThreeJsDemo} />
    </Section>
  );
}
