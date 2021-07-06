import { QuestionCardBase, QuestionCardBaseProps } from 'src/components/organisms';
import { AdminButtons } from './styles';
import { BiComment, BiTrashAlt, AiOutlineCheckCircle } from 'react-icons/all';

type QuestionCardAdminProps = Omit<QuestionCardBaseProps, 'children'> & {
    onDelete: () => void;
    onComment: () => void;
    onChecked: () => void;
}


export function QuestionCardAdmin({ onChecked, onComment, onDelete, question, userName }: QuestionCardAdminProps) {
    return (
        <QuestionCardBase
            question={question}
            userName={userName}
        >
            <AdminButtons>
                <AiOutlineCheckCircle onClick={onChecked} />
                <BiComment onClick={onComment} />
                <BiTrashAlt onClick={onDelete} />
            </AdminButtons>
        </QuestionCardBase>
    )
}