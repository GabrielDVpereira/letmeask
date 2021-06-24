
import { Button, ButtonProps } from 'src/components/atoms';
import { IconBaseProps, IconType } from 'react-icons'
import { ReactNode } from 'react';


interface ButtonWithIconProps extends ButtonProps {
  children: ReactNode;
  icon: IconType;
  iconProps: IconBaseProps;
}

export function ButtomWithIcon({ children, icon: Icon, iconProps, ...rest }: ButtonWithIconProps) {
  return (
    <Button {...rest} >
      <Icon {...iconProps} />
      {children}
    </Button>
  )
}