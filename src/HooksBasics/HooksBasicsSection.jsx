import { Section, Chapter } from 'MasterDetail';
import { UseStateBasics } from './Chapter1';
import { PreviousStateUpdate } from './Chapter2';
import { UseCounterExample } from './Chapter3/UseCounterExample';
import { UseMergedStateExample } from './Chapter3/UseMergedStateExample';
import { LazyInitialization } from './Chapter4';
import { StoringFunctions } from './Chapter5';

export function HooksBasicsSection() {
  return (
    <Section title="Hooks basics, useState">
      <Chapter title="1. useState basics" component={UseStateBasics} />
      <Chapter
        title="2. Previous state update"
        component={PreviousStateUpdate}
      />
      <Section title="3. First custom hooks">
        <Chapter title="3.1. useCounter" component={UseCounterExample} />
        <Chapter
          title="3.2. useMergedState"
          component={UseMergedStateExample}
        />
      </Section>
      <Chapter title="4. Lazy initialization" component={LazyInitialization} />
      <Chapter title="5. Storing functions" component={StoringFunctions} />
    </Section>
  );
}
