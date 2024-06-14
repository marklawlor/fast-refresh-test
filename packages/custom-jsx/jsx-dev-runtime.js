import ReactJSXRuntime from "react/jsx-runtime";
import WrapJSX from "./wrap-jsx";

export * from "react/jsx-runtime";

export const jsxs = WrapJSX(ReactJSXRuntime.jsxs);
export const jsx = WrapJSX(ReactJSXRuntime.jsx);
export const jsxDEV = WrapJSX(ReactJSXRuntime.jsxDEV);
