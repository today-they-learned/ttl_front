import React, { useState } from 'react';
import { Form, Input, Checkbox } from 'semantic-ui-react';
import TermsModal from 'components/setting/TermsModal';
import ServiceModal from 'components/setting/ServiceModal';
import * as Styled from './SettingStyled';

const Setting = () => {
  const [gitEitMode, setGitMode] = useState(true);
  const [velogEitMode, setEditMode] = useState(true);

  const onChangeModeGit = () => {
    setGitMode(!gitEitMode);
  };
  const onChangeModeVelog = () => {
    setEditMode(!velogEitMode);
  };
  return (
    <Styled.SettingContainer>
      <Styled.Container>
        <Styled.GitIcon src="images/github.png" />
        <Styled.GitLabel>Git 연동</Styled.GitLabel>
        <Styled.ButtonContainer>
          {gitEitMode ? (
            <Styled.VelogLabel onClick={onChangeModeGit}>수정</Styled.VelogLabel>
          ) : (
            <div>
              <Form>
                <Styled.Field>
                  <Form.Field control={Input} placeholder="git 주소를 입력하세요" />
                </Styled.Field>
              </Form>
              <Styled.VelogLabel onClick={onChangeModeGit}>수정</Styled.VelogLabel>
            </div>
          )}
        </Styled.ButtonContainer>
      </Styled.Container>

      <Styled.Container>
        <Styled.VelogIcon src="images/velog.jpg" />
        <Styled.GitLabel>Velog 연동</Styled.GitLabel>
        <Styled.ButtonContainer>
          {velogEitMode ? (
            <Styled.VelogLabel onClick={onChangeModeVelog}>수정</Styled.VelogLabel>
          ) : (
            <div>
              <Form>
                <Styled.Field>
                  <Form.Field control={Input} placeholder="velog 계정을 입력하세요" />
                </Styled.Field>
              </Form>
              <Styled.VelogLabel onClick={onChangeModeVelog}>수정</Styled.VelogLabel>
            </div>
          )}
        </Styled.ButtonContainer>
      </Styled.Container>

      <Styled.BorderLine />
      <Styled.Label>메일 수신 동의</Styled.Label>
      <Styled.Toggle>
        <Checkbox toggle />
      </Styled.Toggle>
      <Styled.MailPhrase>관심사 TTL 소식을 메일로 받아보세요</Styled.MailPhrase>
      <Styled.BorderLine />
      <Styled.TermsLabel>개인정보 처리 및 약관</Styled.TermsLabel>
      <TermsModal />
      <ServiceModal />
      <Styled.BorderLine />
      <Styled.Label>회원 탈퇴</Styled.Label>
      <Styled.Button>회원 탈퇴</Styled.Button>
      <Styled.ButtonPhrase>
        탈퇴 시 작성하신 포스트 및 댓글이 모두 삭제되며 복구되지 않습니다.
      </Styled.ButtonPhrase>
    </Styled.SettingContainer>
  );
};

export default Setting;
