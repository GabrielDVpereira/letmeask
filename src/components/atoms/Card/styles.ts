import styled from 'styled-components';

export const Container = styled.div`
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.colors.white.details};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.2);
`;