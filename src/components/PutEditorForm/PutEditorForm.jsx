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
import { useNavigate } from 'react-router-dom';

import { darken, lighten } from 'polished';
import axios from 'axios';
import authHeader from 'sagas/auth-header';
import PutModal from 'components/PutModal/PutModal';

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

const PutEditorForm = (props) => {
  console.log(props); // 나중에 여기에 article 받아올거임
  //   const { thumbnail, title, content, tags, user } = article;

  const navigate = useNavigate();

  const [modalVisible, setModalVisible] = useState(false);
  const [titleText, setTitleText] = useState('title');
  const [postContent, setPostContent] = useState('content');
  const [tags, setTags] = useState([]);
  const [thumbnailUrl, setThumbnailUrl] = useState(
    'http://api.todaytheylearn.com/media/uploads/google.png',
  );

  const titleRef = useRef();
  const editorRef = createRef();

  const onChangeTitle = (e) => {
    setTitleText(e.target.value);
  };

  const onChangeEditorTextHandler = () => {
    setPostContent(editorRef.current.getInstance().getMarkdown());
  };

  const onChangeTags = (tag) => {
    setTags(tag);
  };

  const onChangeThumbnail = (url) => {
    setThumbnailUrl(url);
    console.log(url);
  };

  useEffect(() => {
    setTitleText(titleText);
    editorRef.current.getInstance().setMarkdown(postContent);
    setPostContent(postContent);
  }, []);

  useEffect(() => {
    if (editorRef.current) {
      // 기존에 Image 를 Import 하는 Hook 을 제거한다.
      editorRef.current.getInstance().removeHook('addImageBlobHook');

      // 새롭게 Image 를 Import 하는 Hook 을 생성한다.
      editorRef.current.getInstance().addHook('addImageBlobHook', (blob, callback) => {
        (async () => {
          const formData = new FormData();
          formData.append('image', blob);

          const { data: filename } = await axios.post('/articles/upload_image/', formData, {
            headers: authHeader(),
          });

          callback(filename.url, 'image alt');
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
          //   initialValue={postContent}
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
        <PutModal
          visible={modalVisible}
          closable
          maskClosable
          onClose={closeModal}
          titleText={titleText}
          postContent={postContent}
          tags={tags}
          onChangeTags={onChangeTags}
          thumbnailUrl={thumbnailUrl}
          onChangeThumbnail={onChangeThumbnail}
        />
      )}
    </>
  );
};

export default PutEditorForm;
