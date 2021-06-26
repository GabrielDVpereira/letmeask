import styled from 'styled-components';
export const Container = styled.div`
  display: flex; 
  justify-content: center;
  align-items: center;
`;
export const Line = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.gray.medium};
`;

export const Text = styled.span`
  color: ${({ theme }) => theme.colors.gray.medium};
  font-size: ${({ theme }) => theme.fonts.paragraph.fontSize};
  margin: 0 1rem;
`;
