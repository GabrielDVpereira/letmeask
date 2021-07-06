import { QuestionCardBase, QuestionCardBaseProps } from 'src/components/organisms';
import { LikeButton } from './styles';
import { AiOutlineLike } from 'react-icons/ai';

type QuestionCardAdminProps = Omit<QuestionCardBaseProps, 'children'> & {
    onLike: () => void;
    likes: number
}


export function QuestionCardRegular({ onLike, likes, question, userName }: QuestionCardAdminProps) {
    return (
        <QuestionCardBase
            question={question}
            userName={userName}
        >
            <LikeButton>
                {likes}
                <AiOutlineLike onClick={onLike} />
            </LikeButton>
        </QuestionCardBase>
    )
}