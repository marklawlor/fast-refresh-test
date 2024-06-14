import Refresh from "react-refresh";
import { observable } from "./observable";

/**
 * Override react-refresh to prevent refreshing past modules that have this flag
 * This only stops react-fresh from doing a full refresh. It will not re-render with the
 * new updates.
 *
 * We use observables to trigger the updates
 */
const getFamilyByType = Refresh.getFamilyByType;
Object.assign(Refresh, {
  getFamilyByType(value) {
    if ("default" in value && value.default.__test) {
      return null;
    } else if ("__test" in value) {
      return null;
    }

    return getFamilyByType(value);
  },
});

// Make this a singleton value that will survive refreshing
globalThis.__styles ??= new Map([["test", observable(1)]]);

export function getValue(effect) {
  const $test = globalThis.__styles.get("test");
  return $test.get(effect);
}

/** Edit below here for fast refreshing **/

__styles.get("test").set(0);
