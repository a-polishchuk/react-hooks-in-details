import { useToggle } from '../../../Chapter-17/useToggle';
import LoggedLifecycle from '../GeneratedKeyExample/LoggedLifecycle';

export default function ConditionalKeyExample() {
  const [isToggled, toggle] = useToggle(true);

  return (
    <>
      <h2>How React keys really works?</h2>

      <button style={{ margin: 20 }} onClick={toggle}>
        Toggle
      </button>

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
