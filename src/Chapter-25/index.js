import { useState } from 'react';
import { VictoryChart, VictoryLine, VictoryTheme } from 'victory';
import { useHistory } from './useHistory';
import RateRow from '../Chapter-24/RateRow';

const styles = {
  chartContainer: {
    height: 200,
  },
  lineChart: {
    data: {
      stroke: '#9B9',
      strokeWidth: 1,
    },
  },
};

export default function Chapter25() {
  const [score, setScore] = useState(0);
  const history = useHistory(score);

  const domain = {
    x: [0, Math.max(10, history.length)],
    y: [0, 10],
  };

  const chartData = history.map((value, index) => ({
    x: index,
    y: value,
  }));

  return (
    <>
      <h2>Chapter 25: useHistory</h2>
      <RateRow score={score} onChange={setScore} />
      <div style={styles.chartContainer}>
        <VictoryChart
          theme={VictoryTheme.material}
          domain={domain}
          padding={0}
          height={40}
        >
          <VictoryLine style={styles.lineChart} data={chartData} />
        </VictoryChart>
      </div>
    </>
  );
}
