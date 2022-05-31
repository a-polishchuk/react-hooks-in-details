import { Section, Chapter } from 'components/MasterDetail';
import { ControlledVsUncontrolled } from './Chapter8';
import { StoringStateInUseRef } from './Chapter9';
import { UseImperativeHandleExample } from './Chapter10';

export function ImperativeCodeSection() {
  return (
    <Section title="Imperative code, useRef">
      <Chapter
        title="8. Controlled vs uncontrolled"
        component={ControlledVsUncontrolled}
      />
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
