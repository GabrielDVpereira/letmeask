import { ReactNode, useCallback, useState } from 'react';
import { IoCopyOutline } from 'react-icons/io5';
import { Tooltip } from '@chakra-ui/react'

import { ButtonProps } from 'src/components/atoms';
import { ButtonWithSideIcon } from 'src/components/molecules';
import { Container } from './styles';



interface CopyButtonProps extends ButtonProps {
  children: ReactNode;
  copyInfo: string;
}

export function CopyButton({ children, copyInfo, ...rest }: CopyButtonProps) {
  const [toltipLabel, setToltipLabel] = useState('Copy');

  const onClick = useCallback((e) => {
    e.preventDefault();
    navigator.clipboard.writeText(copyInfo)
    setToltipLabel('Copied!');
  }, [copyInfo])

  return (
    <Tooltip label={toltipLabel} placement="top" onClose={() => setToltipLabel('Copy')} hasArrow>
      <Container>
        <ButtonWithSideIcon {...rest} icon={IoCopyOutline} outlined color="primary" borderRadius={8} onClick={onClick}>
          {children}
        </ButtonWithSideIcon>
      </Container>
    </Tooltip >
  )
}
