import { Container, Line, Text, ContainerWithText } from './styles';

interface DivisorProps {
  text?: string
}
export function Divisor({ text }: DivisorProps) {

  const renderSingleDivisor = () => <Line />;
  const renderDivisorWithText = () => (
    <ContainerWithText>
      <Line />
      <Text>{text}</Text>
      <Line />
    </ContainerWithText>
  );

  return (
    <Container>
      {text ? renderDivisorWithText() : renderSingleDivisor()}
    </Container>
  )
}