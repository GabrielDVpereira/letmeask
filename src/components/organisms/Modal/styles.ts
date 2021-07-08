import { scaleAnimation } from 'src/assets/css/animations';
import styled from 'styled-components';

export const Outsider = styled.div`
  inset: 0;
  background-color: rgba(0,0,0,0.8);
  position: absolute;
  z-index: 10;
  cursor: pointer;
`;

export const ModalContent = styled.div`
  ${scaleAnimation}; 
  width: 36rem;
  height: 22rem;
  background-color: ${({ theme }) => theme.colors.white.details};
  border-radius:  ${({ theme }) => theme.borderRadius};
  position: absolute;
  z-index: 20;
  top: calc(50vh - 11rem); 
  left: calc(50vw - 18rem);
`;