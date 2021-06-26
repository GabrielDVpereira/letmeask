
import { HtmlHTMLAttributes, ReactNode } from 'react'
import { Button as StyledButton } from './styles';

export interface ButtonProps extends HtmlHTMLAttributes<HTMLButtonElement> {
  color?: 'danger' | 'gray' | 'primary'
  outlined?: boolean
  size?: 'lg' | 'md' | 'sm' | 'xm'
  children: ReactNode
  borderRadius?: number
}

export function Button({ color = "gray", outlined = false, size = "md", borderRadius, children, ...rest }: ButtonProps) {
  return (
    <StyledButton  {...rest} color={color} outlined={outlined} size={size} borderRadius={borderRadius}>
      {children}
    </StyledButton>
  )
}