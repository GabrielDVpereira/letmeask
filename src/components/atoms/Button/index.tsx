
import { HtmlHTMLAttributes, ReactNode } from 'react'
import { Button } from './styles';

interface ButtonProps extends HtmlHTMLAttributes<HTMLButtonElement> {
  color: 'danger' | 'gray' | 'primary'
  outlined?: boolean
  size: 'lg' | 'md' | 'sm'
  children: ReactNode
}

export default function ButtonAtom({ color, outlined = false, size, children, ...rest }: ButtonProps) {
  return (
    <Button {...rest} color={color} outlined={outlined} size={size}>
      {children}
    </Button>
  )
}