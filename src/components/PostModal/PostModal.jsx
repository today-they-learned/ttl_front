/* eslint-disable react/button-has-type */
import React, { useRef } from 'react';
import { Icon } from 'semantic-ui-react';

import * as Styled from './PostModalStyle';

const Modal = ({ onClose, maskClosable, closable, visible, titleText, postContent }) => {
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
    // 이 함수로 image 데이터를 보낼 계획
  };

  const onSubmitPost = () => {
    console.log(postContent, titleText);
    // Title, Content를 담아 데이터 보내기
  };
  return (
    <>
      <Styled.ModalOverlay visible={visible} />
      <Styled.ModalWrapper
        onClick={maskClosable ? onMaskClick : null}
        tabIndex="-1"
        visible={visible}
      >
        <Styled.ModalInner tabIndex="0">
          <Styled.ModalContent>
            <Styled.ModalLeft>
              <Icon name="images" style={{ fontSize: '5rem' }} />
              <input
                type="file"
                onChange={onImageChange}
                ref={inputRef}
                style={{ display: 'none' }}
              />
              <Styled.ThumnailBtn onClick={onButtonClick}>썸네일 추가</Styled.ThumnailBtn>
            </Styled.ModalLeft>
            <Styled.VerticalLine />
            <Styled.ModalRight>
              <div>
                <Styled.ContentTitle>제목</Styled.ContentTitle>
                <Styled.Title>{titleText}</Styled.Title>
                <Styled.ContentTitle>태그 설정</Styled.ContentTitle>
                <Styled.TagInput
                  type="text"
                  placeholder="쉼표로 구분해서 작성하면 태그를 등록할 수 있습니다"
                />
              </div>
              {closable && (
                <Styled.ButtonContainer>
                  <Styled.CancelButton onClick={close}>취소</Styled.CancelButton>
                  <Styled.SubmitButton onClick={onSubmitPost}>작성 완료</Styled.SubmitButton>
                </Styled.ButtonContainer>
              )}
            </Styled.ModalRight>
          </Styled.ModalContent>
        </Styled.ModalInner>
      </Styled.ModalWrapper>
    </>
  );
};

export default Modal;
