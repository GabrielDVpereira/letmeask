import { ReactNode } from "react";
import { AsidedBanner, Container } from './styles';
import illustrations from 'src/assets/images/illustration.svg';


interface AuthPageProps {
  children: ReactNode;
}

export function AuthBase({ children }: AuthPageProps) {
  return (
    <Container>
      <AsidedBanner>
        <img src={illustrations} alt="illustrations" />
        <h1>Toda pergunta tem uma resposta.</h1>
        <span>Aprenda e compartilhe conhecimento com outras pessoas</span>
      </AsidedBanner>
      {children}
    </Container>
  )
}