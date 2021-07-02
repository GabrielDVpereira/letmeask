import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({theme}) => theme.colors.pink.light};
  color: ${({theme}) => theme.colors.white.details};
  padding: 0.5rem 1rem;
  width: fit-content;
  font-size: ${({theme}) => theme.fonts.title.fontSize};
  border-radius: 50px;
`;