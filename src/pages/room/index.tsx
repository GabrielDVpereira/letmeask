import { Badge, Card } from 'src/components/atoms'
import { RoomBase, QuestionCardBase } from 'src/components/organisms'

export function Room() {
    return (
        <RoomBase>
            <h1>Sala React Q&A</h1>
            <Badge>4 perguntas</Badge>
            <QuestionCardBase
                onComment={() => { }}
                onDelete={() => { }}
                onChecked={() => { }}
                question="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet doloremque animi
                cupiditate voluptas asperiores deleniti, maiores eius esse atque aperiam"
                userName="Lorem ipsum dolor sit amet."
            />
        </RoomBase>
    )
}