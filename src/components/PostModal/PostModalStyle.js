import styled from 'styled-components';
import COLOR from 'constants/color.constant';

import { darken, lighten } from 'polished';

export const ModalWrapper = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
`;

export const ModalOverlay = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
`;

export const ModalInner = styled.div`
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: ${COLOR.BACKGROUND};
  border-radius: 10px;
  width: 100%;
  height: 50%;
  top: 50%;
  /* transform: translateY(-50%); */
  margin: 0 auto;
  padding: 40px 20px;
`;

export const ModalContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const ModalLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20rem;
  height: 20rem;
  background-color: #e9e9e9;
  margin-right: 3rem;
`;

export const ThumnailBtn = styled.button`
  width: 10rem;
  height: 2rem;
  background-color: ${COLOR.BACKGROUND};
  color: ${COLOR.PRIMARY};
  margin-top: 1.5rem;
  border-radius: 0.3rem;
  font-family: 'NS-B';

  &:hover {
    cursor: pointer;
    background-color: ${lighten(0.05, COLOR.BACKGROUND)};
  }
`;

export const VerticalLine = styled.div`
  border: 1px solid #e9ecef;
  width: 1px;
  height: 100%;
`;

export const ModalRight = styled.div`
  text-align: left;
  width: 30rem;
  height: 100%;
  margin-left: 2rem;
  margin-top: 5rem;
`;

export const ContentTitle = styled.div`
  font-size: 1.5rem;
  text-align: left;
  margin-bottom: 0.7rem;
  font-family: 'NS-B';
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;
  width: 100%;
  padding: 1rem;
  background-color: white;
  margin-bottom: 2rem;
  font-family: 'NS-R';
`;

export const TagInput = styled.input`
  display: flex;
  align-items: center;
  font-size: 1rem;
  width: 100%;
  padding: 1rem;
  background-color: white;
  margin-bottom: 2rem;
  font-family: 'NS-R';
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 5rem;
`;

export const CancelButton = styled.button`
  color: ${COLOR.PRIMARY};
  font-family: 'GS-M';
  font-size: 1.5rem;
  margin: 0 1rem;
  border-radius: 0.3rem;
  padding: 0.5rem 0.8rem;
  cursor: pointer;

  &:hover {
    background-color: ${darken(0.07, COLOR.WHITE)};
  }
`;

export const SubmitButton = styled.button`
  color: ${COLOR.PRIMARY};
  font-family: 'GS-M';
  font-size: 1.5rem;
  margin: 0 1rem;
  border-radius: 0.3rem;
  padding: 0.5rem 0.8rem;
  background-color: ${COLOR.PRIMARY};
  color: white;
  cursor: pointer;

  &:hover {
    background-color: ${lighten(0.03, COLOR.PRIMARY)};
  }
`;
