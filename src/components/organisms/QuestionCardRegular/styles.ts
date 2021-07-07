import styled from 'styled-components';
import { darken } from 'polished'

export const LikeButton = styled.div`
    display: flex;
    align-items: flex-end;
    color: ${({ theme }) => theme.colors.gray.dark};
    span {
      line-height: initial;
    }
    svg {
      cursor: pointer;  
      margin-left: 0.5rem;
      &:hover {
        color: ${({ theme }) => darken(0.1, theme.colors.gray.dark)};
      }

  }
`;
