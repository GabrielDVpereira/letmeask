import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
`;
export const AsidedBanner = styled.aside`
  background: ${({ theme }) => theme.colors.purple};
  width: 40rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 5.25rem 7.5rem;
  color: ${({ theme }) => theme.colors.white.details};

  img {
    resize: cover;
  }
  h1 {
    line-height: 2.6rem;
    font-size: 2.25rem;
    margin-bottom: 1rem;
  }
  span {
    line-height: 2rem;
    font-size: ${({ theme }) => theme.fonts.title.fontSize};
  }
`;
