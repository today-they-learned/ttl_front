/* eslint-disable import/no-unresolved */
import React, { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { UPDATE_USER_REQUEST } from 'reducers/authentication';
import { Form, Input, Checkbox } from 'semantic-ui-react';
import TermsModal from 'components/Setting/TermsModal';
import ServiceModal from 'components/Setting/ServiceModal';
import * as Styled from './SettingStyled';

const Setting = () => {
  const { user } = useSelector((state) => state.authentication);
  const [info, setInfo] = useState(user.user);
  const [mailable, setMailable] = useState(user.user.subscribeRecommendedMail);

  const [gitEitMode, setGitMode] = useState(true);
  const [velogEitMode, setEditMode] = useState(true);

  const onChangeModeGit = () => {
    setGitMode(!gitEitMode);
  };
  const onChangeModeVelog = () => {
    setEditMode(!velogEitMode);
  };

  const inputHandler = (e) => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value,
    });
  };

  const dispatch = useDispatch();

  const handleSubmitGit = useCallback(() => {
    console.log(info.repository);
    dispatch({
      type: UPDATE_USER_REQUEST,
      data: {
        repository: info.repository,
      },
    });
    onChangeModeGit();
  }, [dispatch, info.repository]);

  const handleSubmitVelog = useCallback(() => {
    console.log(info.velogUsername);
    dispatch({
      type: UPDATE_USER_REQUEST,
      data: {
        velog_username: info.velogUsername,
      },
    });
    onChangeModeVelog();
  }, [dispatch, info.velogUsername]);

  const changeMail = useCallback(() => {
    dispatch({
      type: UPDATE_USER_REQUEST,
      data: {
        subscribe_recommended_mail: mailable,
      },
    });
  }, [dispatch, mailable]);

  return (
    <Styled.SettingContainer>
      <Styled.Container>
        <Styled.GitIcon src="images/github.png" />
        <Styled.GitLabel>Git 연동</Styled.GitLabel>
        <Styled.ButtonContainer>
          {gitEitMode ? (
            <Styled.GitEdit onClick={onChangeModeGit}>수정</Styled.GitEdit>
          ) : (
            <div>
              <Form onSubmit={handleSubmitGit}>
                <Styled.Field>
                  <Form.Field
                    control={Input}
                    name="repository"
                    placeholder="git 주소를 입력하세요"
                    value={info.repository}
                    onChange={inputHandler}
                  />
                </Styled.Field>
                <Styled.GitEdit>제출</Styled.GitEdit>
              </Form>
            </div>
          )}
        </Styled.ButtonContainer>
      </Styled.Container>
      <Styled.Container>
        <Styled.VelogIcon src="images/velog.jpg" />
        <Styled.GitLabel>Velog 연동</Styled.GitLabel>
        <Styled.ButtonContainer>
          {velogEitMode ? (
            <Styled.VelogEdit onClick={onChangeModeVelog}>수정</Styled.VelogEdit>
          ) : (
            <div>
              <Form onSubmit={handleSubmitVelog}>
                <Styled.Field>
                  <Form.Field
                    control={Input}
                    name="velogUsername"
                    placeholder="velog 주소를 입력하세요"
                    value={info.velogUsername}
                    onChange={inputHandler}
                  />
                </Styled.Field>
                <Styled.VelogEdit>제출</Styled.VelogEdit>
              </Form>
            </div>
          )}
        </Styled.ButtonContainer>
      </Styled.Container>
      <Styled.BorderLine />
      <Styled.Label>메일 수신 동의</Styled.Label>
      <Styled.MailEdit onClick={changeMail}>저장</Styled.MailEdit>
      <Styled.Toggle>
        <Checkbox toggle checked={mailable} onChange={() => setMailable(!mailable)} />
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
        탈퇴 시 작성한 포스트 및 댓글이 삭제되며 복구되지 않습니다.
      </Styled.ButtonPhrase>
    </Styled.SettingContainer>
  );
};

export default Setting;
