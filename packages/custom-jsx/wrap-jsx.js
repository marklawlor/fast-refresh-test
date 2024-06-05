import { Text } from "react-native";
import ReactRefresh from "react-refresh";
import CustomText from "./text";

export default function WrapJSX(jsx) {
  return function MyJSX(type, props, ...rest) {
    if (type === Text && props.testID === "test") {
      return jsx.call(jsx, CustomText, props, ...rest);
    } else {
      return jsx.call(jsx, type, props, ...rest);
    }
  };
}

let _exports;
const originalIsLikelyComponentType = ReactRefresh.isLikelyComponentType;
const originalGetFamilyByType = ReactRefresh.getFamilyByType;
Object.assign(ReactRefresh, {
  isLikelyComponentType: (type) => {
    if (type === module.exports) {
      return true;
    } else {
      return originalIsLikelyComponentType(type);
    }
  },
  getFamilyByType: (type) => {
    if (type === module.exports) {
      return undefined;
    }
    if (!_exports) _exports = Object.values(module.exports);
    if (_exports.includes(type)) {
      return undefined;
    }
    return originalGetFamilyByType(type);
  },
});
