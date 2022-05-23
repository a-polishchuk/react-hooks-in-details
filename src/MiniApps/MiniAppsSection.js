import { Section, Chapter } from 'MasterDetail';
import VeganDragon from './VeganDragon';

export default function MiniAppsSection() {
  return (
    <Section title="Mini apps">
      <Chapter title="Vegan Dragon" component={VeganDragon} />
    </Section>
  );
}
