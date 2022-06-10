import { MasterDetail } from 'components/MasterDetail';
import { IntroSection } from '0-Intro/IntroSection';
import { HooksBasicsSection } from 'HooksBasics/HooksBasicsSection';
import { SideEffectsSection } from 'SideEffects/SideEffectsSection';
import { ImperativeCodeSection } from 'ImperativeCode/ImperativeCodeSection';
import { MemoizationSection } from 'Memoization/MemoizationSection';
import { AdvancedHooksSection } from 'AdvancedHooks/AdvancedHooksSection';
import { HooksCollectionSection } from 'HooksCollection/HooksCollectionSection';
import { DataFecthingSection } from 'DataFecthing/DataFetchingSection';
import { BonusSection } from 'Bonus/BonusSection';
import { MiniAppsSection } from 'MiniApps/MiniAppsSection';

export default function App() {
  return (
    <MasterDetail>
      <IntroSection />
      <HooksBasicsSection />
      <SideEffectsSection />
      <ImperativeCodeSection />
      <MemoizationSection />
      <AdvancedHooksSection />
      <HooksCollectionSection />
      <BonusSection />
      <DataFecthingSection />
      <MiniAppsSection />
    </MasterDetail>
  );
}
