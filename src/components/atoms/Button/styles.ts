import styled, { css } from 'styled-components';


interface ButtonStyle {
  color: 'danger' | 'gray' | 'primary'
  outlined: boolean
  size: 'lg' | 'md' | 'sm'
}

/** Colors */
const danger = css`
  background-color: ${({ theme }) => theme.colors.danger};
  color: ${({ theme }) => theme.colors.white.details}
`;
const gray = css`
  background-color: ${({ theme }) => theme.colors.gray.light};
  color: ${({ theme }) => theme.colors.black}

`;

const primary = css`
  background-color: ${({ theme }) => theme.colors.purple};
  color: ${({ theme }) => theme.colors.white.details}
`;

/** Outlines */
const outlinedDefault = css`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.black};
  border-style: solid; 
  border-color: ${({ theme }) => theme.colors.black};
  border-width: 1px
`;

const outlinedPrimary = css`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.purple};
  border-style: solid; 
  border-color: ${({ theme }) => theme.colors.purple};
  border-width: 1px
`;


/** Sizes */
const sm = css`
  padding: 0 0.75rem;
  width: 8.5rem
`;

const md = css`
  padding: 0 1rem;
  width: 11.25rem
`;

const lg = css`
  padding: 0 1rem;
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
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.fonts.body.fontSize};
  padding: 1rem 0;

  &:hover {
    opacity: 0.8;
  }
`;