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
      <Chapter title="useCallback" component={Chapter11} />
      <Chapter title="useMemo + How render works" component={Chapter12} />
      <Chapter title="useContext" component={Chapter13} />
      <Chapter title="useReducer" component={Chapter14} />
      <Chapter title="useDebugValue" component={Chapter15} />
      <Chapter title="Hooks fabric" component={Chapter16} />
    </Section>
  );
}
