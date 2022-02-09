/* eslint-disable react/button-has-type */
import React, { useRef } from 'react';
import { Icon } from 'semantic-ui-react';
import styled from 'styled-components';
import COLOR from 'constants/color.constant';

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
  background-color: ${COLOR.BACKGROUND};
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
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const ModalLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20rem;
  height: 15rem;
  background-color: #e9e9e9;
  margin-right: 3rem;
`;

const ThumnailBtn = styled.button`
  width: 10rem;
  height: 2rem;
  background-color: ${COLOR.BACKGROUND};
  color: ${COLOR.PRIMARY};
  margin-top: 1.5rem;
  border-radius: 0.3rem;

  &:hover {
    cursor: pointer;
    background-color: #f7f7f7;
  }
`;

const VerticalLine = styled.div`
  border: 1px solid #d6d3d3;
  width: 1px;
  height: 100%;
`;

const ModalRight = styled.div`
  text-align: left;
  width: 30rem;
  height: 100%;
  margin-left: 2rem;
  margin-top: 5rem;
`;

const ContentTitle = styled.div`
  font-size: 1.5rem;
  text-align: left;
  margin-bottom: 0.7rem;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  width: 100%;
  height: 2.5rem;
  background-color: white;
  margin-bottom: 2rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  margin-top: 5rem;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5rem;
  height: 1.5rem;
  border-radius: 0.3rem;
  color: ${COLOR.PRIMARY};
  padding: 1rem 1rem;
  font-size: 1.2rem;

  &:hover {
    cursor: pointer;
    color: white;
    background-color: ${COLOR.PRIMARY};
  }
`;

const Modal = ({ className, onClose, maskClosable, closable, visible, titleText, postContent }) => {
  const inputRef = useRef();
  const onButtonClick = () => {
    inputRef.current.click();
  };

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

  const onSubmitPost = () => {
    console.log(postContent, titleText);
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
            <ModalLeft>
              <Icon name="images" style={{ fontSize: '5rem' }} />
              <input
                type="file"
                onChange={onImageChange}
                ref={inputRef}
                style={{ display: 'none' }}
              />
              <ThumnailBtn onClick={onButtonClick}>썸네일 추가</ThumnailBtn>
            </ModalLeft>
            <VerticalLine />
            <ModalRight>
              <div>
                <ContentTitle>제목</ContentTitle>
                <Title>{titleText}</Title>
                <ContentTitle>태그 설정</ContentTitle>
                <input
                  type="text"
                  placeholder="쉼표로 구분해서 작성하면 태그를 등록할 수 있습니다"
                  style={{ width: '100%', backgroundColor: '#f0f0f0', height: '2.5rem' }}
                />
              </div>
              {closable && (
                <ButtonContainer>
                  <Button onClick={close}>취소</Button>
                  <Button onClick={onSubmitPost}>발행</Button>
                </ButtonContainer>
              )}
            </ModalRight>
          </ModalContent>
        </ModalInner>
      </ModalWrapper>
    </>
  );
};

export default Modal;
