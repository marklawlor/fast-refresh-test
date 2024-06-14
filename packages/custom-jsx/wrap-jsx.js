import CustomText from "./text";

export default function WrapJSX(jsx) {
  return function MyJSX(type, props, ...rest) {
    if (props.testID === "test") {
      props.__type = type;
      return jsx.call(jsx, CustomText, props, ...rest);
    } else {
      return jsx.call(jsx, type, props, ...rest);
    }
  };
}

WrapJSX.__prevent_fast_refresh_invalidation = true;
