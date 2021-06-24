import { Button } from 'src/components/atoms';
import { ButtomWithIcon } from 'src/components/molecules';
import { FiLogIn } from 'react-icons/fi';
import { FcGoogle } from 'react-icons/fc';

export function Login() {
  return (
    <div style={{ marginLeft: 20 }}>
      <Button size="lg" color="primary" >Teste</Button> <br /><br />
      <Button size="md" color="primary" >Teste</Button> <br /><br />
      <Button size="sm" color="primary" >Teste</Button> <br /><br />
      <Button size="lg" color="danger" >Teste</Button> <br /><br />
      <Button size="md" color="danger" >Teste</Button> <br /><br />
      <Button size="sm" color="danger" >Teste</Button> <br /><br />
      <Button size="sm" color="gray" >Teste</Button> <br /><br />
      <Button size="xm" color="primary" outlined >Teste</Button> <br /><br />
      <ButtomWithIcon icon={FiLogIn} size="lg">Entrar na Sala</ButtomWithIcon><br /><br />
      <ButtomWithIcon icon={FcGoogle} outlined size="lg" >Crie sua sala com Google</ButtomWithIcon><br /><br />
    </div>
  )
}