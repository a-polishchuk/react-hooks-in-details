import { Section, Chapter } from 'MasterDetail';
import { Chapter1 } from './Chapter1';
import Chapter2 from './Chapter2';
import { Chapter3 } from './Chapter3';
import Chapter4 from './Chapter4';
import Chapter5 from './Chapter5';

export default function HooksBasicsSection() {
  return (
    <Section title="Hooks basics, useState">
      <Chapter title="1. useState basics" component={Chapter1} />
      <Chapter title="2. Function vs class" component={Chapter2} />
      <Chapter title="3. First custom hooks" component={Chapter3} />
      <Chapter title="4. Lazy init" component={Chapter4} />
      <Chapter title="5. Storing functions" component={Chapter5} />
    </Section>
  );
}
