import styled from 'styled-components';
import { fadeAndTranslateAnimation } from 'src/assets/css/animations'

export const Container = styled.div``;
export const Content = styled.div`
    ${fadeAndTranslateAnimation}
    width: 55%;
    max-width: 50rem;
    margin: 2rem auto;
`;