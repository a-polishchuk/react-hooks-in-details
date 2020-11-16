// GENERAL HOOKS RULES
// React relies on the order in which Hooks are called.

// DO NOT: call hooks from the class components
// DO NOT: use hooks in a conditional logic
// DO NOT: use hooks in loops
// DO NOT: use hooks in nested functions (callbacks)

// DO: only call hooks on the top level of your function
// DO: always call hooks in same exact order
// DO: call hooks from React function components
// DO: call hooks from custom hooks
// DO: keep hooks naming convention, hook name should start with "use"

// ESLint plugin eslint-plugin-react-hooks enforces these rules
// npm install eslint-plugin-react-hooks --save-dev
// yarn add eslint-plugin-react-hooks -D
