import React, { createRef } from 'react';

import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';

import Prism from 'prismjs';
import 'prismjs/themes/prism.css';

import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight-all';

import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import styled from 'styled-components';

const Title = styled.input`
  width: 100%;
  height: 5rem;
  background-color: #cccbcb;
  font-size: 1.5rem;
`;

const PostEditorForm = () => {
  const editorRef = createRef();

  const onChangeEditorTextHandler = () => {
    console.log(editorRef.current.getInstance().getMarkdown());
  };

  return (
    <div>
      <Title type="title" placeholder="제목을 입력하세요" />

      <Editor
        previewStyle="vertical"
        height="79vh"
        initialEditType="markdown"
        initialValue="마크다운으로 내용을 입력하세요"
        ref={editorRef}
        plugins={[colorSyntax, [codeSyntaxHighlight, { hightlighter: Prism }]]}
        onChange={onChangeEditorTextHandler}
      />
      <button type="submit">Post</button>
      <button type="submit">Cancel</button>
    </div>
  );
};

export default PostEditorForm;
