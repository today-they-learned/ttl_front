import React from 'react';
import { Modal } from 'semantic-ui-react';
import styled from 'styled-components';
// import media from 'styles/media';
import useWindowDimensions from 'utils/window.util';
import Signin from './SignIn';

const ModalDiv = styled(Modal)`
  max-width: 26rem;
  height: 32rem;
`;

const Tdiv = styled.div`
  display: none;
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: #ffffff;
`;

const SignModal = (props) => {
  const { width } = useWindowDimensions();
  const closeModal = () => {
    props.setOpen(false);
  };
  return (
    <>
      {width > 768 ? (
        <ModalDiv onClose={() => closeModal()} onOpen={() => props.setOpen(true)} open={props.open}>
          <Signin />
        </ModalDiv>
      ) : (
        <Tdiv style={props.open ? { display: 'block' } : null}>테스트</Tdiv>
      )}
    </>
  );
};

export default SignModal;
