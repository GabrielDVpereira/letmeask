import styled from 'styled-components';

export const Content = styled.div`
  svg {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.gray.dark};
  }
`
export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
`;
export const UserName = styled.div`
  display: flex;
  align-items: center;

  svg {
    margin-right: 0.5rem;
    background-color: ${({ theme }) => theme.colors.purple};
    color: ${({ theme }) => theme.colors.white.details};
    border-radius: 50%;
    padding: 0.2rem;
  }
`;

