import { HtmlHTMLAttributes } from 'react'
import { Input as StyledInput, TextArea } from './styles'

interface InputProps extends HtmlHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  type?: 'textarea' | 'default'
}
export function Input({ type = 'default', ...rest }: InputProps) {

  if (type === 'textarea') {
    return <TextArea {...rest} />
  }
  return <StyledInput {...rest} />
}