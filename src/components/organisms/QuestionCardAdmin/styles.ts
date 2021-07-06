import styled from 'styled-components';
import { darken } from 'polished'

export const AdminButtons = styled.div`
  svg {
      margin-right: 1rem;
      cursor: pointer;
      &:last-child {
        margin-right: 0;
      }
      &:hover {
        color: ${({ theme }) => darken(0.1, theme.colors.gray.dark)};
      }

  }
`;