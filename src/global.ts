import Currencies from './data/currencies.json';

export type Currency = keyof typeof Currencies;

export type View = (
  onChangeValue: (value: string, type: 'parentCurrency' | 'childCurrency') => void,
  values: {
    parentCurrency: number;
    childCurrency: number;
  }
  ) => HTMLElement;

interface ComponentProps {
  id: string;
}

export type Component<E extends HTMLElement, P> = (props: P & ComponentProps) => E;

export interface InputLikeProps {
  onChange: (text: string) => void;
  value: string;
  type?: string;
}

export interface ComponentEvent extends Event {
  currentTarget: {
    value: string
  } & Event['currentTarget']
}
