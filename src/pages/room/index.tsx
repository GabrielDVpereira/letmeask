import { Badge, Card } from 'src/components/atoms'
import { RoomBase } from 'src/components/organisms'

export function Room() {
    return (
        <RoomBase>
            <h1>Sala React Q&A</h1>
            <Badge>4 perguntas</Badge>
            <Card>
                <h2>teste</h2>
                <h2>teste</h2>
                <h2>teste</h2>
                <h2>teste</h2>
                <h2>teste</h2>
                <h2>teste</h2>
            </Card>
        </RoomBase>
    )
}