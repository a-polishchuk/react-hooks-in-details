import { Section, Chapter } from 'components/MasterDetail';
import { UseContextExample } from './Chapter13';
import { UseCounterReducer } from './Chapter14/UseCounterReducer';
import { UseToggleReducer } from './Chapter14/UseToggleReducer';
import { ContactBook } from './Chapter14/ContactBook';
import { UseDebugValueExample } from './Chapter15';
import { HooksFactory } from './Chapter16';

export function AdvancedHooksSection() {
  return (
    <Section title="Advanced hooks and concepts">
      <Chapter title="13. useContext" component={UseContextExample} />
      <Section title="14. useReducer">
        <Chapter title="Counter reducer" component={UseCounterReducer} />
        <Chapter title="Toggle reducer" component={UseToggleReducer} />
        <Chapter title="Contact book" component={ContactBook} />
      </Section>
      <Chapter title="15. useDebugValue" component={UseDebugValueExample} />
      <Chapter title="16. Hooks factory" component={HooksFactory} />
    </Section>
  );
}
