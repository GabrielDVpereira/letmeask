import styled, { css } from 'styled-components';

interface LogoProps {
  size: 'sm' | 'md'
}

const md = css`
  height: 4.315rem;
  width: 9.5rem;
`;

const sm = css`
  height: 2.8rem;
  width: 6.25rem;
`;
export const Logo = styled.img<LogoProps>`
  ${({ size }) => size === 'md' ? md : sm} 
`;