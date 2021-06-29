import { CopyButton } from 'src/components/molecules';
import { Button, Logo } from 'src/components/atoms';
import { Container, NavButtonsContainer } from './styles';

export function Header() {
    return (
        <Container>
            <Logo size="sm" />
            <NavButtonsContainer>
                <CopyButton copyInfo="#323243">
                    Sala #323243
                </CopyButton>
                <Button color="primary" outlined size="xm">
                    Encerrar sala
                </Button>
            </NavButtonsContainer>
        </Container>
    )
}