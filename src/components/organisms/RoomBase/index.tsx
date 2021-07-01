import { ReactNode } from 'react';
import { Header, HeaderMobile } from 'src/components/molecules'
import { useDeviceDimension } from 'src/contexts'
import { Container, Content } from './styles';

interface RooBaseProps {
    children: ReactNode
}

export function RoomBase({ children }: RooBaseProps) {
    const { isMobile } = useDeviceDimension()

    return (
        <Container>
            {isMobile ? <HeaderMobile /> : <Header />}
            <Content>
                {children}
            </Content>
        </Container>
    )
}