import { createElement as originalCreateElement } from "react";
import ReactJSXRuntime from "react/jsx-dev-runtime";
import WrapJSX from "./wrap-jsx";

export { Fragment } from "react";
export const jsxs = WrapJSX(ReactJSXRuntime.jsxs);
export const jsx = WrapJSX(ReactJSXRuntime.jsx);
export const jsxDEV = WrapJSX(ReactJSXRuntime.jsxDEV);
export const createElement = originalCreateElement;