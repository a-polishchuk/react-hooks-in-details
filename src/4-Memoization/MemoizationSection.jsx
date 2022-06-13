import { Section, Chapter } from 'components/MasterDetail';
import { ListWithoutMemoization } from './Chapter11/ListWithoutMemoization';
import { ListWithMemoization } from './Chapter11/ListWithMemoization';
import { UseUpdateEffectExample } from './Chapter11/UseUpdateEffectExample';
import { WhenReactRenderComponents } from './Chapter12/WhenReactRenderComponents';
import { UseMemoExample } from './Chapter12/UseMemoExample';

export function MemoizationSection() {
  return (
    <Section title="Memoization">
      <Section title="11. useCallback">
        <Chapter
          title="List without memoization"
          component={ListWithoutMemoization}
        />
        <Chapter
          title="List with memoization"
          component={ListWithMemoization}
        />
        <Chapter title="useUpdateEffect" component={UseUpdateEffectExample} />
      </Section>
      <Section title="12. useMemo">
        <Chapter
          title="When React render components?"
          component={WhenReactRenderComponents}
        />
        <Chapter title="useMemo" component={UseMemoExample} />
      </Section>
    </Section>
  );
}
