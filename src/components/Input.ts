import { Component, ComponentEvent, InputLikeProps } from "../global";

export const Input: Component<HTMLInputElement, InputLikeProps> = ({
  onChange,
  value,
  type,
  id
}) => {
  const input = document.createElement('input');
  input.id = id;
  input.value = value;
  input.type = type;

  input.addEventListener('change', (event: ComponentEvent) => {
    onChange(event.currentTarget.value);
  });

  return input;
}