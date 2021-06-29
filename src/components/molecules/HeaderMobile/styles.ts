import styled from 'styled-components';
import { fadeInAnimation } from 'src/assets/css/animations'

interface ContainerProps {
    isButtonsVisible: boolean
}
export const Container = styled.div<ContainerProps>`
  transition: all .5s;
  padding: 1.3rem 2rem;
  border-style: solid;
  border-width: 0 0 1px 0;
  border-color: ${({ theme }) => theme.colors.gray.light};
  height: ${({ isButtonsVisible }) => isButtonsVisible ? '9.5rem' : '5.5rem'};

  svg {
        ${fadeInAnimation};
        font-size: 2rem;
    }

    @media (max-width: 320px){
    & {
        padding: 1.3rem 1rem;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;



export const NavButtonsContainer = styled.div` 
    ${fadeInAnimation};
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
`;
