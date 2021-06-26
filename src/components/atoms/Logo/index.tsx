import { HtmlHTMLAttributes } from 'react';
import logo from 'src/assets/images/logo.svg';
import { Logo as StyledLogo } from './styles';


interface LogoProps extends HtmlHTMLAttributes<HTMLImageElement> {
  size?: 'sm' | 'md'
}

export function Logo({ size = 'md', ...rest }: LogoProps) {
  return <StyledLogo src={logo} size={size} {...rest} />
}