import { useInterval } from '6-HooksCollection/Chapter-27/useInterval';
import { ColoredBlock } from 'components/ColoredBlock';
import { useRerender } from 'hooks/useRerender';

import './index.css';

function TypicalComponent({ name, isRoot, children }) {
  const style = {
    flex: 1,
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };
  return (
    <ColoredBlock style={style}>
      &lt;{name} /&gt;
      {!isRoot && <div className="typical-component-arrow">⇩</div>}
      {children && <div className="typical-component-child">{children}</div>}
    </ColoredBlock>
  );
}

export function ReactTraits() {
  const rerender = useRerender();

  useInterval(rerender, 3000);

  return (
    <>
      <h3>React traits</h3>
      <TypicalComponent name="App" isRoot>
        <TypicalComponent name="Header">
          <TypicalComponent name="UserAvatar" />
          <TypicalComponent name="Login">
            <TypicalComponent name="Modal">
              <TypicalComponent name="Form" />
            </TypicalComponent>
          </TypicalComponent>
        </TypicalComponent>
        <TypicalComponent name="Dashboard">
          <TypicalComponent name="SomeChart">
            <TypicalComponent name="ChartLegend" />
          </TypicalComponent>
        </TypicalComponent>
      </TypicalComponent>
    </>
  );
}
