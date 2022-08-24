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
  const { PUBLIC_URL } = process.env;
  return (
    <>
      <h2>React rendering process</h2>
      <h3>🌲 🆚 🌲 ➡️ 🌳</h3>

      <div className="rendering-container">
        <div style={getSectionStyle(2)}>
          <h3 className="rendering-header">Virtual DOM / React Realm</h3>
          <ColoredBlock>
            New render has been triggered (because of some change in the state
            of the app). React calls the root component function. Children
            component function will be called recursively.
          </ColoredBlock>
          <Emoji>⬇️</Emoji>
          <ColoredBlock>
            New Virtual DOM tree is created now. It consists of React Elements -
            lightweight javascript object which sits in memory and stores
            representation of a component. They have no direct connection to the
            real DOM elements.
          </ColoredBlock>
          <Emoji>⬇️</Emoji>
          <ColoredBlock>
            New VDOM now should be compared to the old one (if it exists, of
            course). Calculated diff will be applied to the real DOM.
          </ColoredBlock>
          <div className="rendering-bottom-label">
            Virtual DOM is a tree data structure of lightweight React Element
            objects. React can generate thousands of React Elements on each
            render with a great performance.
          </div>
        </div>

        <Emoji>➡️</Emoji>

        <div style={getSectionStyle(1)}>
          <h3 className="rendering-header">Real DOM / Browser Realm</h3>
          <img
            alt="Real DOM"
            src={`${PUBLIC_URL}/real-dom.png`}
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
