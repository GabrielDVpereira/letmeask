import { ReactNode } from 'react';
import { IconBaseProps, IconType } from 'react-icons';
import { Container } from './styles';
import { ButtonProps, Button } from 'src/components/atoms/Button';

export interface ButtonWithSideIconProps extends ButtonProps {
  children: ReactNode;
  icon: IconType;
  iconProps?: IconBaseProps;
}

export function ButtonWithSideIcon({ children, icon: Icon, iconProps, ...rest }: ButtonWithSideIconProps) {
  const { color = 'primary', borderRadius } = rest;
  return (
    <Container color={color} borderRadius={borderRadius}>
      <Button {...rest}>
        <Icon {...iconProps} />
        {children}
      </Button>
    </Container>
  )
}