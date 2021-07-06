import { ReactNode } from 'react';
import { Card } from 'src/components/atoms/Card';
import { Footer, UserName, Content } from './styles';
import { BiUser } from 'react-icons/all';


export interface QuestionCardBaseProps {
  question: string;
  userName: string;
  children: ReactNode;
}

export function QuestionCardBase({
  question,
  userName,
  children
}: QuestionCardBaseProps) {


  return (
    <Card>
      <Content>
        <p>{question}</p>

        <Footer>
          <UserName>
            <BiUser />
            <span>{userName}</span>
          </UserName>
          {children}
        </Footer>
      </Content>
    </Card>
  )
}