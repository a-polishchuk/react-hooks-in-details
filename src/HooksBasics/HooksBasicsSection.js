import { Section, Chapter } from 'MasterDetail';
import Chapter1 from './Chapter-1';
import Chapter2 from './Chapter-2';
import Chapter3 from './Chapter-3';
import Chapter4 from './Chapter-4';
import Chapter5 from './Chapter-5';

export default function HooksBasicsSection() {
  return (
    <Section title="Hooks basics, useState">
      <Chapter title="useState basics" component={Chapter1} />
      <Chapter title="Function vs class" component={Chapter2} />
      <Chapter title="First custom hooks" component={Chapter3} />
      <Chapter title="Lazy init" component={Chapter4} />
      <Chapter title="Storing functions" component={Chapter5} />
    </Section>
  );
}
