import { Toolbar } from 'components/Toolbar';
import { Button } from 'components/Button';
import { useToggle } from 'HooksCollection/Chapter-17/useToggle';

import LoggedLifecycle from '../GeneratedKeyExample/LoggedLifecycle';

export default function ConditionalKeyExample() {
  const [isToggled, toggle] = useToggle(true);

  return (
    <>
      <h2>How React keys really works?</h2>

      <Toolbar>
        <Button text="Toggle" onClick={toggle} />
      </Toolbar>

      {isToggled ? (
        <>
          <LoggedLifecycle key="first" name="First" />
        </>
      ) : (
        <>
          <LoggedLifecycle key="second" name="Second" />
          <LoggedLifecycle name="Third" />
        </>
      )}
    </>
  );
}
