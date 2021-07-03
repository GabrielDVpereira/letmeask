import { Card } from 'src/components/atoms/Card';
import { Footer, UserName, AdminButtons, LikeButton, Content } from './styles';
import { BiUser, BiComment, BiTrashAlt, AiOutlineCheckCircle, AiOutlineLike } from 'react-icons/all';


interface QuestionCardBaseProps {
  question: string;
  userName: string;
  onDelete: () => void;
  onComment: () => void;
  onChecked: () => void;
  type?: 'admin' | 'normal'
}

export function QuestionCardBase({
  question,
  userName,
  onDelete,
  onComment,
  onChecked,
  type = "normal"
}: QuestionCardBaseProps) {

  const renderAdminButtons = () => {
    return (
      <AdminButtons>
        <AiOutlineCheckCircle />
        <BiComment />
        <BiTrashAlt />
      </AdminButtons>
    )
  }

  const renderLikeButton = () => {
    return (
      <LikeButton>
        <AiOutlineLike />
      </LikeButton>

    )
  }
  return (
    <Card>
      <Content>
        <p>{question}</p>

        <Footer>
          <UserName>
            <BiUser />
            <span>{userName}</span>
          </UserName>

          {type === 'admin' ? renderAdminButtons() : renderLikeButton()}
        </Footer>
      </Content>
    </Card>
  )
}