import { lazy } from 'react';
import { Section, Chapter } from 'components/MasterDetail';
// import UsingContext from './UsingContext';
// import UsingSwr from './UsingSwr';
// import UsingReactQuery from './UsingReactQuery';

const UsingContext = lazy(() => import('./UsingContext'));
const UsingSwr = lazy(() => import('./UsingSwr'));
const UsingReactQuery = lazy(() => import('./UsingReactQuery'));

export function DataFecthingSection() {
  return (
    <Section title="Data fecthing">
      <Chapter title="Context" component={UsingContext} />
      <Chapter title="SWR" component={UsingSwr} />
      <Chapter title="React Query" component={UsingReactQuery} />
    </Section>
  );
}
