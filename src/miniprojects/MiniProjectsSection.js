import { Section, Chapter } from 'MasterDetail';
import VeganDragon from './VeganDragon';

export default function MiniProjectsSection() {
  return (
    <Section title="Mini projects">
      <Chapter title="Vegan Dragon" component={VeganDragon} />
    </Section>
  );
}
