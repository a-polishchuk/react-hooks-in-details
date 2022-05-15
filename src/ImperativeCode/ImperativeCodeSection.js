import { Section, Chapter } from 'MasterDetail';
import Chapter8 from './Chapter-8';
import Chapter9 from './Chapter-9';
import Chapter10 from './Chapter-10';

export default function ImperativeCodeSection() {
  return (
    <Section title="Imperative code, useRef">
      <Chapter title="useRef" component={Chapter8} />
      <Chapter title="useImperativeHandle" component={Chapter9} />
      <Chapter title="HOCs" component={Chapter10} />
    </Section>
  );
}
