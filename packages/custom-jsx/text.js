import { createElement, useState } from "react";
import { cleanupEffect } from "./observable";

import { getValue } from "./get-value";

export default function CustomText({ __type, testID, ...props }) {
  const [effect, setState] = useState({
    dependencies: new Set(),
    run: () => setState({ ...effect }),
  });

  cleanupEffect(effect);

  props.children = [props.children.toString() + ` - JSX ${getValue(effect)}`];
  return createElement(__type, props);
}
