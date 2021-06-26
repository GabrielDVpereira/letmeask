import styled, { css } from 'styled-components'

const input = css`
 background-color: ${({ theme }) => theme.colors.white.details};
  padding: 16px;
  width: 100%;
  border-radius: ${({ theme }) => theme.borderRadius};
  border-style: solid;
  border-width: 1px;
  border-color:  ${({ theme }) => theme.colors.gray.medium};
  outline: none;

  &::placeholder {
    color:  ${({ theme }) => theme.colors.gray.medium};
    font-size: ${({ theme }) => theme.fonts.body.fontSize}
  }

  &:focus{
    border-color:  ${({ theme }) => theme.colors.purple};

  }
`
export const Input = styled.input`
 ${input}
`;

export const TextArea = styled.textarea`
 ${input}
 min-height: 8.5rem;
 resize: none;
`;