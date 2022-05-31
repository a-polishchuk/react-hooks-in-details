import { Section, Chapter } from 'components/MasterDetail';
import { ListWithoutMemoization } from './Chapter11/ListWithoutMemoization';
import { ListWithMemoization } from './Chapter11/ListWithMemoization';
import { WhenReactRenderComponents } from './Chapter12/WhenReactRenderComponents';
import { UseMemoExample } from './Chapter12/UseMemoExample';

export function MemoizationSection() {
  return (
    <Section title="Memoization">
      <Section title="11. useCallback">
        <Chapter
          title="Without memoization"
          component={ListWithoutMemoization}
        />
        <Chapter title="With memoization" component={ListWithMemoization} />
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
