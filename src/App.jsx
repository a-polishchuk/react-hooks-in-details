import { MasterDetail } from 'components/MasterDetail';

import { IntroSection } from '0-Intro/IntroSection';
import { HooksBasicsSection } from '1-HooksBasics/HooksBasicsSection';
import { SideEffectsSection } from '2-SideEffects/SideEffectsSection';
import { ImperativeCodeSection } from '3-ImperativeCode/ImperativeCodeSection';
import { MemoizationSection } from '4-Memoization/MemoizationSection';
import { AdvancedHooksSection } from '5-AdvancedHooks/AdvancedHooksSection';
import { HooksCollectionSection } from '6-HooksCollection/HooksCollectionSection';
import { BonusSection } from '7-Bonus/BonusSection';
import { DataFecthingSection } from '8-DataFecthing/DataFetchingSection';
import { MiniAppsSection } from '9-MiniApps/MiniAppsSection';

export function App() {
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
