import styled from 'styled-components';
import { fadeAndTranslateAnimation } from 'src/assets/css/animations'

export const Container = styled.div`
  ${fadeAndTranslateAnimation}
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;

  img {
    align-self: center;
    margin-bottom: 3.5rem;
  }
  button:first-child {
    margin-bottom: 2rem;
  }
  
  input {
    margin: 2rem 0 1rem 0;
  }
`;