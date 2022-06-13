import { Section, Chapter } from 'components/MasterDetail';
import { ControlledInput } from './Chapter8/ControlledInput';
import { UncontrolledInput } from './Chapter8/UncontrolledInput';
import { RockScissorsPaper } from './Chapter8/RockScissorsPaper';
import { StoringStateInUseRef } from './Chapter9';
import { UseImperativeHandleExample } from './Chapter10';

export function ImperativeCodeSection() {
  return (
    <Section title="Imperative code, useRef">
      <Section title="8. Controlled vs uncontrolled">
        <Chapter title="Controlled input" component={ControlledInput} />
        <Chapter title="Uncontrolled input" component={UncontrolledInput} />
        <Chapter title="Rock Scissors Paper" component={RockScissorsPaper} />
      </Section>
      <Chapter
        title="9. Storing state in useRef"
        component={StoringStateInUseRef}
      />
      <Chapter
        title="10. useImperativeHandle"
        component={UseImperativeHandleExample}
      />
    </Section>
  );
}
