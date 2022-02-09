import React, { useState } from 'react';
import { Form, Input, Checkbox } from 'semantic-ui-react';
import TermsModal from 'components/setting/modal';
import * as Styled from './SettingStyled';

const Setting = () => {
  const [editMode, setEditMode] = useState(true);

  const onChangeMode = () => {
    setEditMode(!editMode);
  };
  return (
    <Styled.SettingContainer>
      <Form>
        <Styled.Label>git, velog, tistory 글 연동</Styled.Label>
        {editMode ? (
          <Styled.EditButton onClick={onChangeMode}>수정</Styled.EditButton>
        ) : (
          <div>
            <Styled.BackButton onClick={onChangeMode}>취소</Styled.BackButton>
            <Styled.SaveButton onClick={onChangeMode}>저장</Styled.SaveButton>
          </div>
        )}
        <Styled.GitField>
          <Form.Field control={Input} placeholder="git 계정을 입력하세요" />
        </Styled.GitField>
        <Styled.VelogField>
          <Form.Field control={Input} placeholder="velog 계정을 입력하세요" />
        </Styled.VelogField>
        <Styled.TistoryField>
          <Form.Field control={Input} placeholder="tistory 계정을 입력하세요" />
        </Styled.TistoryField>
      </Form>
      <Styled.BorderLine />
      <Styled.Label>메일 수신 동의</Styled.Label>
      <Styled.Toggle>
        <Checkbox toggle />
      </Styled.Toggle>
      <Styled.MailPhrase>관심사 TTL 소식을 메일로 받아보세요</Styled.MailPhrase>
      <Styled.BorderLine />
      <Styled.Label>회원 탈퇴</Styled.Label>
      <Styled.Button>회원 탈퇴</Styled.Button>
      <Styled.ButtonPhrase>
        탈퇴 시 작성하신 포스트 및 댓글이 모두 삭제되며 복구되지 않습니다.
      </Styled.ButtonPhrase>
      <Styled.BorderLine />
      <Styled.TermsLabel>개인정보 처리 및 약관</Styled.TermsLabel>
      <TermsModal />
    </Styled.SettingContainer>
  );
};

export default Setting;
