import styled from 'styled-components';
export const Container = styled.div`
  display: flex; 
  justify-content: center;
  align-items: center;
`;

export const Line = styled.div`
  height: 1px;
  width: inherit;
  background-color: ${({ theme }) => theme.colors.gray.medium};
`;

export const Text = styled.span`
  color: ${({ theme }) => theme.colors.gray.medium};
  font-size: ${({ theme }) => theme.fonts.paragraph.fontSize};
  margin: 0 1rem;
`;

export const ContainerWithText = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  span {
    width: 100%;
  }
  div { 
    width: 50%;
  }
`;

