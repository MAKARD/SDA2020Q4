import { Component, ComponentEvent } from "../global";

interface Props {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export const Checkbox: Component<HTMLInputElement, Props> = ({
  checked,
  onChange,
  id
}) => {
  const input = document.createElement('input');
  input.type = 'checkbox';
  input.checked = checked;
  input.id = id;

  input.addEventListener('change', (event: ComponentEvent) => {
    onChange((event.currentTarget as any).checked);
  });

  return input;
}