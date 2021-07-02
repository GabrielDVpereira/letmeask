import { ReactNode } from 'react'; 
import { Container } from './styles'; 

interface BadgeProps {
  children: ReactNode 
}

export function Badge({ children }: BadgeProps) {
  return(
    <Container>
      {children}
    </Container>
  )
}