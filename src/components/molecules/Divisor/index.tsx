import { Container, Line, Text } from './styles';

interface DivisorProps {
  text?: string
}
export function Divisor({ text }: DivisorProps) {

  const renderSingleDivisor = () => <Line />;
  const renderDivisorWithText = () => (
    <>
      <Line />
      <Text>{text}</Text>
      <Line />
    </>
  );

  return (
    <Container>
      {text ? renderDivisorWithText() : renderSingleDivisor()}
    </Container>
  )
}