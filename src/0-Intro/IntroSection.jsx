import { Section, Chapter } from 'components/MasterDetail';
import { HelloWorld } from './HelloWorld';
import { JsxBasics } from './JSX/JsxBasics';
import { Fragments } from './JSX/Fragments';
import { Arrays } from './JSX/Arrays';

export function IntroSection() {
  return (
    <Section title="Intro to React">
      <Chapter title="Hello, world!" component={HelloWorld} />
      <Section title="JSX">
        <Chapter title="JSX Basics" component={JsxBasics} />
        <Chapter title="React.createElement()" />
        <Chapter title="Fragments" component={Fragments} />
        <Chapter title="Arrays" component={Arrays} />
        <Chapter title="Event handlers" />
      </Section>
      <Chapter title="Components, props, children" />
      <Chapter title="Virtual DOM" />
    </Section>
  );
}
