/* eslint-disable react/button-has-type */
import React from 'react';
import { Icon } from 'semantic-ui-react';
import styled from 'styled-components';

const ModalWrapper = styled.div`
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

const ModalOverlay = styled.div`
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

const ModalInner = styled.div`
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: #fff;
  border-radius: 10px;
  width: 100%;
  height: 50%;
  top: 50%;
  /* transform: translateY(-50%); */
  margin: 0 auto;
  padding: 40px 20px;
`;

const ModalContent = styled.div`
  display: flex;
  width: 100%;
`;

const Title = styled.div`
  font-size: 2rem;
`;

const ButtonContainer = styled.div`
  display: flex;
`;

const Button = styled.button`
  width: 5rem;
  height: 1.5rem;
  border: 1px solid black;
  border-radius: 0.3rem;

  &:hover {
    cursor: pointer;
  }
`;

const Modal = ({ className, onClose, maskClosable, closable, visible, titleText }) => {
  const onMaskClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose(e);
    }
  };

  const close = (e) => {
    if (onClose) {
      onClose(e);
    }
  };
  const onImageChange = (e) => {
    const img = e.target.files[0];
    const formData = new FormData();
    console.log(img, formData);
    // 이 함수로 image 데이터를 보낼 계획입니다.
  };
  return (
    <>
      <ModalOverlay visible={visible} />
      <ModalWrapper
        className={className}
        onClick={maskClosable ? onMaskClick : null}
        tabIndex="-1"
        visible={visible}
      >
        <ModalInner tabIndex="0">
          <ModalContent>
            <div
              style={{
                width: '20rem',
                height: '100%',
                backgroundColor: 'grey',
                marginBottom: '3rem',
              }}
            >
              <Icon name="images" style={{ fontSize: '5rem' }} />
              <input type="file" onChange={onImageChange} />
            </div>
            <div style={{ width: '30rem' }}>
              <h1>제목</h1>
              <Title>{titleText}</Title>
              <h1>태그 설정</h1>
              <input
                type="text"
                placeholder="쉼표로 구분해서 작성하면 태그를 등록할 수 있습니다"
                style={{ width: '100%', backgroundColor: '#f0f0f0', height: '3rem' }}
              />
            </div>
          </ModalContent>
          {closable && (
            <ButtonContainer>
              <Button onClick={close}>취소</Button>
              <Button>발행</Button>
            </ButtonContainer>
          )}
        </ModalInner>
      </ModalWrapper>
    </>
  );
};

export default Modal;
