import { Section, Chapter } from 'components/MasterDetail';
import { UseEffectBasics } from './Chapter6/UseEffectBasics';
import { UseEffectAndInterval } from './Chapter6/UseEffectAndInterval';
import { YouDontNeedUseEffect } from './Chapter6/YouDontNeedUseEffect';
import { Chapter7 } from './Chapter7';

export function SideEffectsSection() {
  return (
    <Section title="Side effects, useEffect">
      <Section title="6. useEffect">
        <Chapter title="useEffect basics" component={UseEffectBasics} />
        <Chapter
          title="useEffect + setInterval"
          component={UseEffectAndInterval}
        />
        <Chapter
          title="You don't need useEffect"
          component={YouDontNeedUseEffect}
        />
      </Section>
      <Chapter title="7. useLayoutEffect" component={Chapter7} />
    </Section>
  );
}
