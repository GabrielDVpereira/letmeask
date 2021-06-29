import { useState } from 'react';
import { CopyButton } from 'src/components/molecules';
import { Button, Logo } from 'src/components/atoms';
import { Container, Content, NavButtonsContainer } from './styles';
import { BiMenu } from 'react-icons/bi'
import { IoClose } from 'react-icons/io5'

export function HeaderMobile() {
    const [isButtonsVisible, setButtonsVisible] = useState(false)


    const renderMenuButtons = () => {
        if (isButtonsVisible) {
            return <IoClose onClick={() => setButtonsVisible(false)} />
        }
        return <BiMenu onClick={() => setButtonsVisible(true)} />
    }
    const renderButtonsForMobile = () => {
        if (isButtonsVisible) {
            return (
                <NavButtonsContainer>
                    <CopyButton copyInfo="#323243">
                        Sala #323243
                    </CopyButton>
                    <Button color="primary" outlined size="xm">
                        Encerrar sala
                    </Button>
                </NavButtonsContainer>
            )
        }
    }
    return (
        <Container isButtonsVisible={isButtonsVisible}>
            <Content>
                <Logo size="sm" />
                {renderMenuButtons()}
            </Content>
            {renderButtonsForMobile()}
        </Container>
    )
}