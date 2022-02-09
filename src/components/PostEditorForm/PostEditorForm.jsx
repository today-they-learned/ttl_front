import React, { createRef, useEffect, useRef, useState } from 'react';

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
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();

  const [titleText, setTitleText] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [postContent, setPostContent] = useState();

  const titleRef = useRef();
  const editorRef = createRef();

  const onChangeTitle = (e) => {
    setTitleText(e.target.value);
  };

  const onChangeEditorTextHandler = () => {
    setPostContent(editorRef.current.getInstance().getMarkdown());
  };

  useEffect(() => {
    editorRef.current.getInstance().setMarkdown('## load Markdown');
    // 글 수정을 눌러서 들어왔을 때, 해당 글 content를 로드합니다.
  }, []);

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
          <Button
            onClick={() => {
              navigate('/');
            }}
          >
            취소
          </Button>
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
          postContent={postContent}
        />
      )}
    </>
  );
};

export default PostEditorForm;
