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

function JsxIs() {
  return (
    <div>
      ✅ JSX <span style={{ color: 'green', fontWeight: 'bold' }}>IS</span>:
      <ul>
        <li>JavaScript syntax extension</li>
        <li>
          Syntactic sugar for <code>React.createElement()</code>
        </li>
      </ul>
    </div>
  );
}

function FactsAboutJsx() {
  const codeElement = <code>React.createElement()</code>;
  return (
    <div>
      👽 Facts about JSX:
      <ol>
        <li>JSX is optional</li>
        <li>Transpiled by Babel to {codeElement} calls</li>
        <li>
          JSX is JS, so you can do with JSX everything you can do with regular
          JS values
        </li>
        <li>You can use {'any'} expressions inside the JSX</li>
        <li>2 + 2 = {2 + 2} (does not related to JSX)</li>
      </ol>
    </div>
  );
}

export function JsxBasics() {
  return (
    <div>
      <h2>Introduction to JSX</h2>
      <h3>🤔 What is JSX?</h3>
      <JsxIsNot />
      <JsxIs />
      <FactsAboutJsx />
    </div>
  );
}
