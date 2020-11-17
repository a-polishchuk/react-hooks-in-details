import { useLayoutEffect } from 'react';

// Not all effects can be deferred.
// For example, a DOM mutation that is visible to the user must fire
// synchronously before the next paint so that the user does not
// perceive a visual inconsistency.

export function LayoutEffectExample() {}
