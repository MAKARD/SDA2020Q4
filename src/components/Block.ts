import { Component } from "../global";

interface Props {
  children: Array<HTMLElement>;
}

export const Block: Component<HTMLElement, Props> = ({
  id,
  children,
}) => {
  const block = document.createElement('div');
  block.id = id;
  children.forEach((child) => {
    block.appendChild(child);
  });

  return block;
}