import React, { useState } from 'react';
import styled from 'styled-components';
import { Modal } from 'semantic-ui-react';
import COLOR from 'constants/color.constant';
import { lighten } from 'polished';

import { Viewer } from '@toast-ui/react-editor';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight-all';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import 'components/EditorForm/toastui-editor.css';

import Privacy from './Privacy';

export const Label = styled.div`
  cursor: pointer;
  font-family: 'NS-R' !important;
  font-size: 0.8rem;
  margin-right: 1rem;
  color: ${COLOR.PRIMARY};

  &:hover {
    color: ${lighten(0.1, COLOR.PRIMARY)};
  }
`;

function TermsModal() {
  const [open, setOpen] = useState(false);

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Label>개인정보 처리방침</Label>}
    >
      <Modal.Header style={{ fontFamily: 'NS-EB' }}>개인정보 처리방침</Modal.Header>
      <Modal.Content scrolling>
        <Modal.Description>
          <Viewer
            plugins={[[codeSyntaxHighlight, { hightlighter: Prism }]]}
            initialValue={Privacy}
          />
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Label onClick={() => setOpen(false)}>확인</Label>
      </Modal.Actions>
    </Modal>
  );
}

export default TermsModal;
