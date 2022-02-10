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

import { darken, lighten } from 'polished';

const Title = styled.input`
  width: 100%;
  height: 10vh;
  font-size: 1.8rem;
  color: black;
  font-weight: 700;
  padding-left: 1rem;
`;

const CancelButton = styled.button`
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

const SubmitButton = styled.button`
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

const ButtonContainer = styled.div`
  background-color: white;
  padding: 0.5rem;
  text-align: right;
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
    editorRef.current.getInstance().setMarkdown('## 해당 Content가 들어갈 내용');
    // 글 수정을 눌러서 들어왔을 때, 해당 글 content를 로드합니다. navigate로 인자를 전달해서 글 작성인지 수정인지 구분하도록 할 예정인데 이렇게 해도 될지 궁금..
  }, []);

  useEffect(() => {
    // 이미지 업로드 시 base64 인코딩 url 방식으로 처리
    if (editorRef.current) {
      editorRef.current.getInstance().removeHook('addImageBlobHook');
      editorRef.current.getInstance().addHook('addImageBlobHook', (blob) => {
        (async () => {
          const formData = new FormData();
          formData.append('file', blob);

          console.log(formData, '이미지 생성');

          // 서버 연동 필요, 서버 연동 후에 코드 추가할 예정입니다.
        })();

        return false;
      });
    }

    return () => {};
  }, [editorRef]);

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
          height="83vh"
          initialEditType="markdown"
          placeholder="마크다운으로 내용을 입력하세요..."
          ref={editorRef}
          plugins={[colorSyntax, [codeSyntaxHighlight, { hightlighter: Prism }]]}
          onChange={onChangeEditorTextHandler}
        />
        <ButtonContainer>
          <CancelButton
            onClick={() => {
              navigate('/');
            }}
          >
            취소
          </CancelButton>
          <SubmitButton onClick={openModal}>완료</SubmitButton>
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
