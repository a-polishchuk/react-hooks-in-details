import { ColoredBlock } from 'components/ColoredBlock';
import { getRandomColor } from 'utils/getRandomColor';
import './index.css';

function getSectionStyle(flex) {
  return {
    flex,
    flexDirection: 'column',
    padding: 16,
    borderRadius: 8,
    backgroundColor: getRandomColor() + '22',
  };
}

function Emoji({ children }) {
  return (
    <div className="rendering-emoji-wrapper">
      <div className="rendering-emoji">{children}</div>
    </div>
  );
}

export function RenderingProcess() {
  return (
    <>
      <h2>React rendering process</h2>
      <h3>🌲 🆚 🌲 ➡️ 🌳</h3>

      <div className="rendering-container">
        <div style={getSectionStyle(2)}>
          <h3 className="rendering-header">Virtual DOM / React Realm</h3>
          <ColoredBlock>
            Render starts. Component functions are called one by one starting
            from the root component.
          </ColoredBlock>
          <Emoji>⬇️</Emoji>
          <ColoredBlock>
            New React Elements tree is created. React Element is a lightweight
            javascript object which sits in memory and has no direct connection
            to the browser DOM.
          </ColoredBlock>
          <Emoji>⬇️</Emoji>
          <ColoredBlock>
            New elements tree is being compared to the previous one. Diff is
            calculated. Only this diff will be applied to the real DOM.
          </ColoredBlock>
          <div className="rendering-bottom-label">
            Virtual DOM is a tree data structure of lightweight React Element
            objects. React can generate thousands of React Elemenets on each
            renders with a great performance.
          </div>
        </div>

        <Emoji>➡️</Emoji>

        <div style={getSectionStyle(1)}>
          <h3 className="rendering-header">Real DOM / Browser Realm</h3>
          <img
            alt="Real DOM"
            src="/real-dom.png"
            className="rendering-real-dom-image"
          />
          <div className="rendering-bottom-label">
            The "real" Document Object Model tree. You can check it on any page
            by opening the browser's Dev Tools panel.
          </div>
        </div>
      </div>
    </>
  );
}
