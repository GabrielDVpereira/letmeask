import { Badge } from 'src/components/atoms'
import { RoomBase, QuestionCardRegular } from 'src/components/organisms'

export function Room() {
    return (
        <RoomBase>
            <h1>Sala React Q&A</h1>
            <Badge>4 perguntas</Badge>
            <QuestionCardRegular
                question="cdjkcn"
                userName="cmdslk"
                onLike={() => { }}
                likes={20}
            />
        </RoomBase>
    )
}