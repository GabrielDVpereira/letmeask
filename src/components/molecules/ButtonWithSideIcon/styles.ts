import { darken } from 'polished';
import styled, { css } from 'styled-components';

interface ContainerProps {
  color: string;
  borderRadius?: number
}

/** bg colos */
const danger = css`
  background-color: ${({ theme }) => theme.colors.danger};
  color: ${({ theme }) => theme.colors.white.details};
  &:hover {
    background-color: ${({ theme }) => darken(0.1, theme.colors.danger)};
  }
`;
const gray = css`
  background-color: ${({ theme }) => theme.colors.gray.light};
  color: ${({ theme }) => theme.colors.gray.dark};
  &:hover {
    background-color: ${({ theme }) => darken(0.1, theme.colors.gray.light)};
  }

`;

const primary = css`
  background-color: ${({ theme }) => theme.colors.purple};
  color: ${({ theme }) => theme.colors.white.details};
  &:hover {
    background-color: ${({ theme }) => darken(0.1, theme.colors.purple)};
  }
`;

const iconBgByColor = (color: string) => {
  switch (color) {
    case 'danger':
      return danger;
    case 'gray':
      return gray;
    case 'primary':
      return primary;
    default:
      return primary
  }

}

export const Container = styled.div<ContainerProps>`
  svg {
    ${({ color }) => iconBgByColor(color)}
    border-top-left-radius: ${({ borderRadius }) => borderRadius}px;
    border-bottom-left-radius: ${({ borderRadius }) => borderRadius}px;
    position: absolute;
    left: 0;
    height: 100%;
    width: 2.75rem;
    padding: 0.7rem;
  }

  button {
    position: relative;
    color: ${({ theme }) => theme.colors.black} !important;
    padding-left: 2.75rem;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
  }
`;