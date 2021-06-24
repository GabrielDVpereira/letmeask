import styled, { css } from 'styled-components';
import { darken } from "polished";


interface ButtonStyle {
  color: 'danger' | 'gray' | 'primary'
  outlined: boolean
  size: 'lg' | 'md' | 'sm' | 'xm'
}

/** Colors */
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

/** Outlines */
const outlinedDefault = css`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.black};
  border-style: solid; 
  border-color: ${({ theme }) => theme.colors.gray.dark};
  border-width: 1px;
  &:hover {
    border-color: ${({ theme }) => darken(0.1, theme.colors.gray.dark)};
  }
`;

const outlinedPrimary = css`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.purple};
  border-style: solid; 
  border-color: ${({ theme }) => theme.colors.purple};
  border-width: 1px;
  &:hover {
    border-color: ${({ theme }) => darken(0.1, theme.colors.purple)};
  }
`;


/** Sizes */
const xm = css`
  padding:  0.55rem 0;
  width: 8.5rem; 
  font-size: ${({ theme }) => theme.fonts.paragraph.fontSize};;
`;

const sm = css`
  padding:  1rem 0;
  width: 8.5rem
`;

const md = css`
  padding:  1rem 0;
  width: 11.25rem
`;

const lg = css`
  padding:  1rem 0;
  width: 20rem;
`;


/** Styles selectors */
const outlinedByColor = (color?: string) => {
  return color === 'primary' ? outlinedPrimary : outlinedDefault
}

const buttonByColor = (color: string) => {
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

const buttonBySize = (size: string) => {
  switch (size) {
    case 'xm':
      return xm;
    case 'sm':
      return sm;
    case 'md':
      return md;
    case 'lg':
      return lg;
    default:
      return md
  }
}


export const Button = styled.button<ButtonStyle>`
  border: none;
  ${({ size }) => buttonBySize(size)};
  ${({ color, outlined }) => outlined ? outlinedByColor(color) : buttonByColor(color)};
  font-size: ${({ theme }) => theme.fonts.body.fontSize};
  font-weight: 500;
  transition: all .2s;
  display: flex;
  justify-content: center;
  align-items: center;
`;