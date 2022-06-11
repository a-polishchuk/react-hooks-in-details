function JsxIsNot() {
  const listStyle = {
    listStyleType: 'circle',
  };
  return (
    <div>
      ❌ JSX <span style={{ color: 'red', fontWeight: 'bold' }}>IS NOT</span>:
      <ul style={listStyle}>
        <li>String</li>
        <li>HTML</li>
        <li>XML</li>
      </ul>
    </div>
  );
}

const codeElement = <code>React.createElement()</code>;

function JsxIs() {
  return (
    <div>
      ✅ JSX <span style={{ color: 'green', fontWeight: 'bold' }}>IS</span>:
      <ul>
        <li>JavaScript syntax extension</li>
        <li>Syntactic sugar for {codeElement}</li>
        <li>Expressive and easy-to-use</li>
      </ul>
    </div>
  );
}

function getUrlFor(subject) {
  switch (subject) {
    case 'jsx':
      return 'https://reactjs.org/docs/introducing-jsx.html';
    case 'babel':
      return 'https://babeljs.io/';
  }
}

function FactsAboutJsx() {
  return (
    <div>
      👽 Facts about JSX:
      <ol>
        <li>JSX is optional</li>
        <li>
          Transpiled by{' '}
          <a href={getUrlFor('babel')} target="_blank" rel="noreferrer">
            Babel
          </a>{' '}
          to {codeElement} calls
        </li>
        <li>
          JSX is JS, so you can do with JSX everything you can do with regular
          JS values
        </li>
        <li>You can use {'any'} expressions inside the JSX</li>
        <li>2 + 2 = {2 + 2} (a fact, but not about JSX)</li>
      </ol>
    </div>
  );
}

export function JsxBasics() {
  const jsxUrl = (
    <a href={getUrlFor('jsx')} target="_blank" rel="noreferrer">
      JSX
    </a>
  );
  return (
    <div>
      <h2>Introduction to JSX</h2>
      <h3>🤔 What is {jsxUrl}?</h3>
      <JsxIsNot />
      <JsxIs />
      <FactsAboutJsx />
    </div>
  );
}
