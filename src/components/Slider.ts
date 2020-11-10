import { Component, ComponentEvent, InputLikeProps } from "../global";

export const Slider: Component<HTMLInputElement, InputLikeProps> = ({
  onChange,
  readonly,
  value,
  id
}) => {
  const input = document.createElement('input');
  input.type = 'range';
  input.min = '1';
  input.max = '100';
  
  input.readOnly = readonly;

  input.value = value;
  input.id = id;

  input.addEventListener('change', (event: ComponentEvent) => {
    onChange(event.currentTarget.value);
  });

  return input;
}