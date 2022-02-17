import React, { useCallback, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DESTROY_USER_REQUEST, UPDATE_USER_REQUEST } from 'reducers/authentication';
import { Form, Input, Icon } from 'semantic-ui-react';
import TermModal from 'components/Setting/TermModal';
import PrivacyModal from 'components/Setting/PrivacyModal';
import * as Container from 'components/common/Containers';
import useInput from 'hooks/useInput';
import * as Styled from './SettingStyled';

const Setting = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authentication);
  const info = user.user;
  const [repository, onChangeRepository] = useInput(info.repository);
  const [velogUsername, onChangeVelogUsername] = useInput(info.velogUsername);
  const [gitEditMode, setGitEditMode] = useState(false);
  const [velogEditMode, setVelogEditMode] = useState(false);
  const [mailable, setMailable] = useState(info.subscribeRecommendedMail);
  const { destroyUserDone } = useSelector((state) => state.authentication);

  const handleSubmitGit = useCallback(() => {
    dispatch({
      type: UPDATE_USER_REQUEST,
      data: {
        repository,
      },
    });
    setGitEditMode(false);
  }, [dispatch, repository]);

  const handleSubmitVelog = useCallback(() => {
    dispatch({
      type: UPDATE_USER_REQUEST,
      data: {
        velog_username: velogUsername,
      },
    });
    setVelogEditMode(false);
  }, [dispatch, velogUsername]);

  const handleSubmitMailable = useCallback(() => {
    dispatch({
      type: UPDATE_USER_REQUEST,
      data: {
        subscribe_recommended_mail: !mailable,
      },
    });
    setMailable(!mailable);
  }, [dispatch, mailable]);

  const handleWithdraw = () => {
    if (window.confirm('정말 탈퇴하시겠습니까?\n모든 글과 댓글이 사라집니다. 😥')) {
      alert('삭제되었습니다');
      dispatch({
        type: DESTROY_USER_REQUEST,
      });
    } else {
      alert('취소되었습니다 😊');
    }
  };

  useEffect(() => {
    if (destroyUserDone) {
      window.location.replace('/');
    }
  });

  return (
    <>
      <Container.AlignCenterContainer>
        <Styled.SettingContainer>
          <Styled.Container>
            <Styled.LabelContainer>
              <Styled.Title>
                <Styled.Icon src="images/github.png" />
                <Styled.Label>Git 연동</Styled.Label>
              </Styled.Title>
              {gitEditMode ? (
                <Form id="git" onSubmit={handleSubmitGit}>
                  <Styled.Field>
                    <Form.Field
                      control={Input}
                      placeholder="ex) user/TIL"
                      value={repository}
                      onChange={onChangeRepository}
                    />
                  </Styled.Field>
                </Form>
              ) : (
                <Styled.Content>
                  {info.repository ? info.repository : '연동된 계정이 없습니다.'}
                </Styled.Content>
              )}
            </Styled.LabelContainer>
            {gitEditMode ? (
              <Styled.Btn form="git" type="submit">
                완료
              </Styled.Btn>
            ) : (
              <Styled.Btn
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  setGitEditMode(!gitEditMode);
                }}
              >
                수정
              </Styled.Btn>
            )}
          </Styled.Container>
          <Styled.LightText>
            Git의 레포지토리 이름을 등록하세요. 예시 : username/TIL{' '}
          </Styled.LightText>
          <Styled.Line />
          <Styled.Container>
            <Styled.LabelContainer>
              <Styled.Title>
                <Styled.Icon src="images/velog.jpg" style={{ borderRadius: '50%' }} />
                <Styled.Label>Velog 연동</Styled.Label>
              </Styled.Title>
              {velogEditMode ? (
                <Form id="velog" onSubmit={handleSubmitVelog}>
                  <Styled.Field>
                    <Form.Field
                      control={Input}
                      placeholder="velog id"
                      value={velogUsername}
                      onChange={onChangeVelogUsername}
                    />
                  </Styled.Field>
                </Form>
              ) : (
                <Styled.Content>
                  {info.velogUsername ? info.velogUsername : '연동된 계정이 없습니다.'}
                </Styled.Content>
              )}
            </Styled.LabelContainer>
            {velogEditMode ? (
              <Styled.Btn form="velog" type="submit">
                완료
              </Styled.Btn>
            ) : (
              <Styled.Btn
                onClick={(e) => {
                  e.preventDefault();
                  setVelogEditMode(!velogEditMode);
                }}
              >
                수정
              </Styled.Btn>
            )}
          </Styled.Container>
          <Styled.LightText>Velog 아이디를 입력하세요.</Styled.LightText>
          <Styled.Line />
          <Styled.Container>
            <Styled.LabelContainer>
              <Styled.Title>
                <Icon name="mail" size="large" color="grey" style={{ marginRight: '0.5rem' }} />
                <Styled.Label>메일 수신 설정</Styled.Label>
              </Styled.Title>
            </Styled.LabelContainer>
            <Styled.Slider slider checked={mailable} onChange={handleSubmitMailable} />
          </Styled.Container>
          <Styled.LightText>관심태그 TTL을 메일로 받아보세요. (추가 예정)</Styled.LightText>
          <Styled.Line />
          <Styled.Container>
            <Styled.LightText>
              탈퇴 시 작성한 글 및 댓글이 삭제되며 복구되지 않습니다.
            </Styled.LightText>
            <Styled.Btn style={{ width: '5rem' }} onClick={handleWithdraw}>
              회원 탈퇴
            </Styled.Btn>
          </Styled.Container>
          <Styled.Title style={{ width: '100%' }}>
            <PrivacyModal />
            <TermModal />
            <a href="https://github.com/today-they-learned/ttl_front">
              <Styled.Github>TTL Github</Styled.Github>
            </a>
          </Styled.Title>
        </Styled.SettingContainer>
      </Container.AlignCenterContainer>
    </>
  );
};

export default Setting;
