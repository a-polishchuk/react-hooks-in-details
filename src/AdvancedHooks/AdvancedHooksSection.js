import { Section, Chapter } from 'MasterDetail';
import Chapter11 from './Chapter-11';
import Chapter12 from './Chapter-12';
import Chapter13 from './Chapter-13';
import Chapter14 from './Chapter-14';
import Chapter15 from './Chapter-15';
import Chapter16 from './Chapter-16';

export default function AdvancedHooksSection() {
  return (
    <Section title="Advanced hooks and concepts">
      <Chapter title="11. useCallback" component={Chapter11} />
      <Chapter title="12. useMemo" component={Chapter12} />
      <Chapter title="13. useContext" component={Chapter13} />
      <Chapter title="14. useReducer" component={Chapter14} />
      <Chapter title="15. useDebugValue" component={Chapter15} />
      <Chapter title="16. Hooks factory" component={Chapter16} />
    </Section>
  );
}
