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
