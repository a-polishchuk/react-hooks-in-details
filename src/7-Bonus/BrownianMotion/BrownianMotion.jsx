import './BrownianMotion.css';

import { useInterval } from '6-HooksCollection/Chapter-27/useInterval';
import { useRerender } from 'hooks/useRerender';
import { getRandomArrayElement } from 'utils/getRandomArrayElement';
import { getRandomNumber } from 'utils/getRandomNumber';

import { ReactLogo } from './ReactLogo';

const DURATION = 10;
const MONOKAI_PALETTE = [
  '#66CCE1',
  '#FF5794',
  '#CC8D66',
  '#FAA23D',
  '#B2E64C',
  '#5596F1',
  '#AA7DFC',
];

function getLogoStyle(left, top) {
  return {
    position: 'absolute',
    transition: `all ${DURATION}s linear`,
    opacity: Math.random() * 0.7 + 0.3,
    transform: `translate(-50%, -50%) rotate(${Math.random() * 360}deg)`,
    left,
    top,
  };
}

function buildLogos() {
  const logos = [];
  for (let i = 0; i < 10; i++) {
    const left = `${Math.random() * 100}%`;
    const top = `${Math.random() * 100}%`;
    logos.push(
      <ReactLogo
        key={i}
        size={getRandomNumber(30, 200)}
        color={getRandomArrayElement(MONOKAI_PALETTE) + '99'}
        style={getLogoStyle(left, top)}
      />
    );
  }
  return logos;
}

export function BrownianMotion() {
  const rerender = useRerender();

  useInterval(rerender, DURATION * 1000);

  return <div className="promo-container">{buildLogos()}</div>;
}
