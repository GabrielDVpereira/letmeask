import { Button, Input } from 'src/components/atoms';
import { ButtomWithIcon } from 'src/components/molecules';
import { CopyButton, Divisor } from 'src/components/molecules';
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
      <CopyButton copyInfo='aaaaaaa'>Sala #30293</CopyButton><br /><br />
      <Input placeholder="Text" /><br /><br />
      <Input type="textarea" placeholder="Text" /><br /><br />
      <Divisor text="aaaaaaaaaaaaaa" />
    </div>
  )
}