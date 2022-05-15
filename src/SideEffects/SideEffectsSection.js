import { Section, Chapter } from 'MasterDetail';
import Chapter6 from './Chapter-6';
import Chapter7 from './Chapter-7';

export default function SideEffectsSection() {
  return (
    <Section title="Side effects, useEffect">
      <Chapter title="useEffect basics" component={Chapter6} />
      <Chapter title="useLayoutEffect" component={Chapter7} />
    </Section>
  );
}
