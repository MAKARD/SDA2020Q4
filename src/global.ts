import Currencies from './data/currencies.json';

export type Currency = keyof typeof Currencies;

export type View = (
  onChangeValue: (value: string, type: 'parentCurrency' | 'childCurrency') => void,
  values: {
    parentCurrency: number;
    childCurrency: number;
  },
  rate: number
) => HTMLElement;

interface ComponentProps {
  id: string;
  style?: Partial<CSSStyleDeclaration>;
}

export type Component<E extends HTMLElement, P> = (props: P & ComponentProps) => E;

export interface InputLikeProps {
  onChange: (text: string) => void;
  value: string;
  type?: string;
  readonly?: boolean;
}

export interface ComponentEvent extends Event {
  currentTarget: {
    value: string
  } & Event['currentTarget']
}
