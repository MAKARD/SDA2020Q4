import { Component } from "../global";

interface Props {
  children: Array<HTMLElement>;
}

export const Block: Component<HTMLElement, Props> = ({
  id,
  children,
  style = {}
}) => {
  const block = document.createElement('div');
  block.id = id;

  Object.keys(style).forEach((name) => {
    block.style[name] = style[name];
  });

  children.forEach((child) => {
    block.appendChild(child);
  });

  return block;
}
