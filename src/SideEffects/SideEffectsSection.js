import { Section, Chapter } from 'MasterDetail';
import { Chapter6 } from './Chapter6';
import { Chapter7 } from './Chapter7';

export default function SideEffectsSection() {
  return (
    <Section title="Side effects, useEffect">
      <Chapter title="6. useEffect basics" component={Chapter6} />
      <Chapter title="7. useLayoutEffect" component={Chapter7} />
    </Section>
  );
}
