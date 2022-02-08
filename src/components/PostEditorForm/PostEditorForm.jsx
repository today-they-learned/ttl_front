import React, { createRef, useRef, useState } from 'react';

import './toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';

import Prism from 'prismjs';
import 'prismjs/themes/prism.css';

import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight-all';

import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import styled from 'styled-components';
import COLOR from 'constants/color.constant';
import Modal from 'components/PostModal/PostModal';

const Title = styled.input`
  width: 100%;
  height: 10vh;
  font-size: 1.5rem;
  color: grey;
  font-weight: 700;
  padding-left: 1rem;
`;

const Button = styled.button`
  /* width: 5rem;
  height: 1.5rem; */
  color: ${COLOR.PRIMARY};
  font-family: 'GS-B';
  font-size: 1.5rem;
  margin: 0 1rem;
  border-radius: 0.3rem;
  padding: 0.3rem 0.5rem;

  &:hover {
    background-color: ${COLOR.PRIMARY};
    color: white;
    cursor: pointer;
  }
`;

const ButtonContainer = styled.div`
  background-color: white;
  padding: 0.5rem;
  text-align: right;

  /* box-shadow: 1px -1px 10px -5px black; */
`;

const PostEditorForm = () => {
  const [titleText, setTitleText] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const titleRef = useRef();
  const editorRef = createRef();

  const onChangeTitle = (e) => {
    setTitleText(e.target.value);
  };

  const onChangeEditorTextHandler = () => {
    console.log(editorRef.current.getInstance().getMarkdown());
  };

  const openModal = () => {
    if (titleText) {
      setModalVisible(true);
    } else {
      alert('제목을 입력해주세요!');
    }
  };
  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <div>
        <Title
          type="title"
          placeholder="제목을 입력하세요"
          ref={titleRef}
          value={titleText}
          onChange={onChangeTitle}
        />

        <Editor
          previewStyle="vertical"
          height="85vh"
          initialEditType="markdown"
          placeholder="마크다운으로 내용을 입력하세요..."
          ref={editorRef}
          plugins={[colorSyntax, [codeSyntaxHighlight, { hightlighter: Prism }]]}
          onChange={onChangeEditorTextHandler}
        />
        <ButtonContainer>
          <Button>취소</Button>
          <Button onClick={openModal}>완료</Button>
        </ButtonContainer>
      </div>
      {modalVisible && (
        <Modal
          visible={modalVisible}
          closable
          maskClosable
          onClose={closeModal}
          titleText={titleText}
        />
      )}
    </>
  );
};

export default PostEditorForm;
