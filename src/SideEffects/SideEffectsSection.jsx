import { Section, Chapter } from 'MasterDetail';
import { UseEffectBasics } from './Chapter6/UseEffectBasics';
import { UseEffectAndInterval } from './Chapter6/UseEffectAndInterval';
import { YouDontNeedUseEffect } from './Chapter6/YouDontNeedUseEffect';
import { Chapter7 } from './Chapter7';

export function SideEffectsSection() {
  return (
    <Section title="Side effects, useEffect">
      <Section title="6. useEffect">
        <Chapter title="6.1. useEffect basics" component={UseEffectBasics} />
        <Chapter
          title="6.2. useEffect + setInterval"
          component={UseEffectAndInterval}
        />
        <Chapter
          title="6.3. You don't need useEffect"
          component={YouDontNeedUseEffect}
        />
      </Section>
      <Chapter title="7. useEffect vs useLayoutEffect" component={Chapter7} />
    </Section>
  );
}
