import { Input } from 'src/components/atoms';
import { ButtomWithIcon } from 'src/components/molecules';
import { AuthBase } from 'src/components/organisms';
import { Container } from './styles';
import { FiLogIn } from 'react-icons/fi'



export function RegisterRoom() {
  return (
    <AuthBase>
      <Container>
        <h2>Crie uma nova sala</h2>
        <Input placeholder="Nome da sala" />
        <ButtomWithIcon icon={FiLogIn} color="primary" size="lg">
          Entrar na sala
       </ButtomWithIcon>
        <span>Quer entrar em uma sala já existente? </span><a href="#">Clique aqui</a>
      </Container>
    </AuthBase>
  )
}