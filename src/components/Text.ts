import { Component } from "../global";

interface Props {
  value: string;
}

export const Text: Component<HTMLSpanElement, Props> = ({
  id,
  value,
}) => {
  const block = document.createElement('span');
  block.id = id;
  block.innerHTML = value;

  return block;
}
