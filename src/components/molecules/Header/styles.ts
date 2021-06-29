import styled from 'styled-components';
export const Container = styled.div`
  transition: all .5s;
  padding: 1.3rem 11.25rem;
  display: flex;
  justify-content: space-between;
  border-style: solid;
  border-width: 0 0 1px 0;
  border-color: ${({ theme }) => theme.colors.gray.light};

  @media (max-width: 768px){
    & {
        padding: 1.3rem 2rem;
    }
  }
`;

export const NavButtonsContainer = styled.div`
  display: flex;

  button:first-child {
      margin-right: 0.5rem;
  }
`;

