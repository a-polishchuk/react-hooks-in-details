import { useState } from 'react';
import TabHeader from './TabHeader';
import RandomCat from './RandomCat';
import RandomDog from './RandomDog';

const Tabs = {
  cat: 'cat',
  dog: 'dog',
};

const styles = {
  headerRow: {
    display: 'flex',
    flexDirection: 'row',
  },
  tabContent: {
    padding: 10,
  },
};

export default function Chapter28() {
  const [tab, setTab] = useState(Tabs.cat);

  const showCat = () => {
    setTab(Tabs.cat);
  };

  const showDog = () => {
    setTab(Tabs.dog);
  };

  return (
    <>
      <h2>Chapter 28: useIsMounted</h2>
      <div style={styles.headerRow}>
        <TabHeader text="Cat" isActive={tab === Tabs.cat} onClick={showCat} />
        <TabHeader text="Dog" isActive={tab === Tabs.dog} onClick={showDog} />
      </div>
      <div style={styles.tabContent}>
        {tab === Tabs.cat ? <RandomCat /> : <RandomDog />}
      </div>
    </>
  );
}
