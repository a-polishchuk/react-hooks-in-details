import { useState } from 'react';
import { usePrevious } from './usePrevious';
import RateRow from './RateRow';

export default function Chapter24() {
  const [score, setScore] = useState(0);
  const previousScore = usePrevious(score);

  return (
    <>
      <h2>Chapter 24: usePrevious</h2>
      <RateRow score={previousScore} />
      <RateRow score={score} onChange={setScore} />
    </>
  );
}
