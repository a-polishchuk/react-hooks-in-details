import { useState } from 'react';
import axios from 'axios';
import TabHeader from './TabHeader';
import AsyncPicture from './AsyncPicture';

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

export default function Chapter29() {
  const [tab, setTab] = useState(Tabs.cat);

  const showCat = () => {
    setTab(Tabs.cat);
  };

  const showDog = () => {
    setTab(Tabs.dog);
  };

  return (
    <>
      <h2>Chapter 29: useMountedRef</h2>
      <div style={styles.headerRow}>
        <TabHeader text="Cat" isActive={tab === Tabs.cat} onClick={showCat} />
        <TabHeader text="Dog" isActive={tab === Tabs.dog} onClick={showDog} />
      </div>
      <div style={styles.tabContent}>
        {tab === Tabs.cat ? (
          <AsyncPicture key="cat-picture" getImageFunc={fetchRandomCat} />
        ) : (
          <AsyncPicture key="dog-picture" getImageFunc={fetchRandomDog} />
        )}
      </div>
    </>
  );
}

async function fetchRandomCat() {
  const response = await axios.get(
    'https://api.thecatapi.com/v1/images/search'
  );

  return response.data[0].url;
}

async function fetchRandomDog() {
  const response = await axios.get('https://dog.ceo/api/breeds/image/random');

  return response.data.message;
}
