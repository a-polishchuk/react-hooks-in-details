import { Section, Chapter } from 'components/MasterDetail';
import { UseEffectBasics } from './Chapter6/UseEffectBasics';
import { UseEffectAndInterval } from './Chapter6/UseEffectAndInterval';
import { FetchDataInUseEffect } from './Chapter6/FetchDataInUseEffect';
import { BewareOfInfiniteLoops } from './Chapter6/BewareOfInfiniteLoops';
import { YouDontNeedUseEffect } from './Chapter6/YouDontNeedUseEffect';
import { EffectsSequence } from './Chapter7/EffectsSequence';
import { UseLayoutEffectExample } from './Chapter7/UseLayoutEffectExample';

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
          title="Fetch data in useEffect"
          component={FetchDataInUseEffect}
        />
        <Chapter
          title="Beware of infinite loops"
          component={BewareOfInfiniteLoops}
        />
        <Chapter
          title="You don't need useEffect"
          component={YouDontNeedUseEffect}
        />
      </Section>
      <Section title="7. useLayoutEffect">
        <Chapter title="Effects sequence" component={EffectsSequence} />
        <Chapter title="Batching effects" component={UseLayoutEffectExample} />
      </Section>
    </Section>
  );
}
