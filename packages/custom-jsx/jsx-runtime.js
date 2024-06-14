import ReactJSXRuntime from "react/jsx-runtime";
import ReactRefresh from "react-refresh";
import WrapJSX from "./wrap-jsx";

export * from "react/jsx-runtime";

export const jsxs = WrapJSX(ReactJSXRuntime.jsxs);
export const jsx = WrapJSX(ReactJSXRuntime.jsx);
export const jsxDEV = WrapJSX(ReactJSXRuntime.jsxDEV);

// export const __isLikelyComponentType = {};

// const isLikelyComponentType = ReactRefresh.isLikelyComponentType;
// Object.assign(ReactRefresh, {
//   isLikelyComponentType(module) {
//     if (module.__isLikelyComponentType) return __isLikelyComponentType;
//     if (module.checkWarningFilter) return true;
//     if (module.PressabilityDebugView) return true;
//     if (module._LogBoxNotificationContainer) return true;
//     return isLikelyComponentType(module);
//   },
// });
