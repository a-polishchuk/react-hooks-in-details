import { Section, Chapter } from 'components/MasterDetail';
import { HelloWorld } from './HelloWorld';
import { JsxBasics } from './JSX/JsxBasics';
import { ReactWithoutJsx } from './JSX/ReactWithoutJsx';
import { Fragments } from './JSX/Fragments';
import { Arrays } from './JSX/Arrays';
import { EventHandlers } from './JSX/EventHandlers';
import { PropsAndChildren } from './PropsAndChildren';
import { RenderingProcess } from './RenderingProcess';

export function IntroSection() {
  return (
    <Section title="Intro">
      <Chapter title="Hello, world!" component={HelloWorld} />
      <Section title="JSX">
        <Chapter title="JSX Basics" component={JsxBasics} />
        <Chapter title="React.createElement()" component={ReactWithoutJsx} />
        <Chapter title="Fragments" component={Fragments} />
        <Chapter title="Arrays" component={Arrays} />
        <Chapter title="Event handlers" component={EventHandlers} />
      </Section>
      <Chapter
        title="Components, props, children"
        component={PropsAndChildren}
      />
      <Chapter title="Rendering process" component={RenderingProcess} />
    </Section>
  );
}
