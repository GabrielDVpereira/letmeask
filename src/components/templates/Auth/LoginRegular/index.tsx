import { Input } from 'src/components/atoms';
import { ButtomWithIcon, Divisor } from 'src/components/molecules';
import { AuthBase } from 'src/components/organisms';
import { Container } from './styles';
import { FcGoogle } from 'react-icons/fc'
import { FiLogIn } from 'react-icons/fi'



export function LoginRegular() {
  return (
    <AuthBase>
      <Container>
        <ButtomWithIcon icon={FcGoogle} size="lg" outlined>
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