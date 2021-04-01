interface StylableComponent {
  className?: string
}

export interface TextProps extends StylableComponent {
  children: (JSX.Element | string)[] | (JSX.Element | string)
}
