import { Section, Chapter } from 'components/MasterDetail';
import { UseContextExample } from './Chapter13';
import { UseReducerExample } from './Chapter14';
import { UseDebugValueExample } from './Chapter15';
import { HooksFactory } from './Chapter16';

export function AdvancedHooksSection() {
  return (
    <Section title="Advanced hooks and concepts">
      <Chapter title="13. useContext" component={UseContextExample} />
      <Chapter title="14. useReducer" component={UseReducerExample} />
      <Chapter title="15. useDebugValue" component={UseDebugValueExample} />
      <Chapter title="16. Hooks factory" component={HooksFactory} />
    </Section>
  );
}
