import { Component } from "../global";

interface Props {
  value: string;
}

export const Text: Component<HTMLSpanElement, Props> = ({
  id,
  value,
  style = {}
}) => {
  const block = document.createElement('span');
  block.id = id;
  block.innerHTML = value;

  Object.keys(style).forEach((name) => {
    block.style[name] = style[name];
  });

  return block;
}
