import React, { useMemo, useState } from 'react';

function randomCssColor() {
  const r = Math.random() * 255;
  const g = Math.random() * 255;
  const b = Math.random() * 255;
  return `rgb(${r},${g},${b})`;
}

function Line({ width, left, top }) {
  const style = {
    position: 'absolute',
    left,
    top,
    width,
    height: 1,
    backgroundColor: 'black',
  };
  return <div style={style} />;
}

function Node({
  level = 1,
  cellWidth,
  cellHeight,
  maxLevel,
  left = 50,
  top = 50,
}) {
  const [trigger, setTrigger] = useState({});
  const [borderColor, setBorderColor] = useState('black');
  const height = cellHeight * Math.pow(2, maxLevel - level);

  const style = {
    left,
    top,
    width: cellWidth,
    height,
    backgroundColor: randomCssColor(),
    position: 'absolute',
    border: `1px solid ${borderColor}`,
    borderRadius: 10,
    transition: 'all 500ms linear',
  };

  // const style = useMemo(
  //   () => ({
  //     left,
  //     top,
  //     width: cellWidth,
  //     height,
  //     backgroundColor: randomCssColor(),
  //     position: 'absolute',
  //     border: '1px solid black',
  //     borderRadius: 10,
  //     transition: 'background-color 500ms linear',
  //   }),
  //   [cellWidth, height, left, top, trigger]
  // );

  const onClick = (event) => {
    event.stopPropagation();
    // setTrigger({});
    setBorderColor(randomCssColor());
  };

  return (
    <div style={style} onClick={onClick}>
      {level < maxLevel ? (
        <>
          <Line left={cellWidth} top={height / 4} width={cellWidth} />
          <Node
            level={level + 1}
            maxLevel={maxLevel}
            cellWidth={cellWidth}
            cellHeight={cellHeight}
            left={cellWidth * 2}
            top={0}
          />
          <Line left={cellWidth} top={(height * 3) / 4} width={cellWidth} />
          <Node
            level={level + 1}
            maxLevel={maxLevel}
            cellWidth={cellWidth}
            cellHeight={cellHeight}
            left={cellWidth * 2}
            top={height / 2}
          />
        </>
      ) : null}
    </div>
  );
}

export function Example() {
  return <Node maxLevel={4} cellWidth={50} cellHeight={50} />;
}
