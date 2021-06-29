import { Header, HeaderMobile } from 'src/components/molecules'
import { useDeviceDimension } from 'src/contexts'
import { Container } from './styles';

export function RoomBase() {
    const { isMobile } = useDeviceDimension()

    return (
        <Container>
            {isMobile ? <HeaderMobile /> : <Header />}
        </Container>
    )
}