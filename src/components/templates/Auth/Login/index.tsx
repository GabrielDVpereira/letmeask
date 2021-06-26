import { Logo, Input } from 'src/components/atoms';
import { ButtomWithIcon, Divisor } from 'src/components/molecules';
import { AuthBase } from 'src/components/organisms';
import { Container } from './styles';
import { FaGoogle } from 'react-icons/fa'
import { FiLogIn } from 'react-icons/fi'



export function Login() {
  return (
    <AuthBase>
      <Container>
        <Logo />
        <ButtomWithIcon icon={FaGoogle} color="danger" size="lg">
          Crie sua sala com o Google
       </ButtomWithIcon>
        <Divisor text="ou entre em uma sala" />
        <Input placeholder="Digite o código da sala" />
        <ButtomWithIcon icon={FiLogIn} color="primary" size="lg">
          Entrar na sala
       </ButtomWithIcon>
      </Container>
    </AuthBase>
  )
}