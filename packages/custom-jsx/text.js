import { Text } from "react-native";
import { createElement } from "react";

export default function CustomText({ ...props }) {
  console.log(90);
  props.children = [props.children.toString() + " - custom"];
  return createElement(Text, props);
}
