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
  const formData = new FormData();
  const { user } = useSelector((state) => state.authentication);
  const info = user.user;
  const [repository, onChangeRepository] = useInput(info.repository);
  const [velogUsername, onChangeVelogUsername] = useInput(info.velogUsername);
  const [gitEditMode, setGitEditMode] = useState(false);
  const [velogEditMode, setVelogEditMode] = useState(false);
  const [mailable, setMailable] = useState(info.subscribeRecommendedMail);
  const { destroyUserDone } = useSelector((state) => state.authentication);

  // const inputHandlerGit = (e) => {
  //   setRepository(e.target.value);
  // };

  // const inputHandlerVelog = (e) => {
  //   setVelogUsername(e.target.value);
  // };

  const handleSubmitGit = useCallback(() => {
    formData.append('username', info.username);
    formData.append('repository', repository);
    console.log(repository);
    dispatch({
      type: UPDATE_USER_REQUEST,
      data: formData,
    });
    setGitEditMode(false);
  }, [dispatch, formData]);

  const handleSubmitVelog = useCallback(() => {
    formData.append('username', info.username);
    console.log(velogUsername);
    formData.append('velog_username', velogUsername);
    dispatch({
      type: UPDATE_USER_REQUEST,
      data: formData,
    });
    setVelogEditMode(false);
  }, [dispatch, formData]);

  const handleSubmitMailable = useCallback(() => {
    formData.append('username', info.username);
    formData.append('subscribeRecommendedMail', mailable);

    dispatch({
      type: UPDATE_USER_REQUEST,
      data: formData,
    });
    setMailable(!mailable);
  }, [dispatch, formData]);

  const handleWithdraw = () => {
    if (window.confirm('?????? ?????????????????????????\n?????? ?????? ????????? ???????????????. ????')) {
      alert('?????????????????????');
      dispatch({
        type: DESTROY_USER_REQUEST,
      });
    } else {
      alert('????????????????????? ????');
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
                <Styled.Label>Git ??????</Styled.Label>
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
                <Styled.Content>{info.repository ? info.repository : '-'}</Styled.Content>
              )}
            </Styled.LabelContainer>
            {gitEditMode ? (
              <Styled.Btn form="git" type="submit">
                ??????
              </Styled.Btn>
            ) : (
              <Styled.Btn
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  setGitEditMode(!gitEditMode);
                }}
              >
                ??????
              </Styled.Btn>
            )}
          </Styled.Container>
          <Styled.LightText>
            Git??? ??????????????? ????????? ???????????????. Public ?????????????????? ?????? ???????????????. ex. user/TIL
          </Styled.LightText>
          <Styled.Line />
          <Styled.Container>
            <Styled.LabelContainer>
              <Styled.Title>
                <Styled.Icon src="images/velog.jpg" style={{ borderRadius: '50%' }} />
                <Styled.Label>Velog ??????</Styled.Label>
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
                <Styled.Content>{info.velogUsername ? info.velogUsername : '-'}</Styled.Content>
              )}
            </Styled.LabelContainer>
            {velogEditMode ? (
              <Styled.Btn form="velog" type="submit">
                ??????
              </Styled.Btn>
            ) : (
              <Styled.Btn
                onClick={(e) => {
                  e.preventDefault();
                  setVelogEditMode(!velogEditMode);
                }}
              >
                ??????
              </Styled.Btn>
            )}
          </Styled.Container>

          <Styled.LightText>Velog ???????????? ???????????????.</Styled.LightText>
          <Styled.Line />
          <Styled.Container>
            <Styled.LabelContainer>
              <Styled.Title>
                <Icon name="mail" size="large" color="grey" style={{ marginRight: '0.5rem' }} />
                <Styled.Label>?????? ?????? ??????</Styled.Label>
              </Styled.Title>
            </Styled.LabelContainer>
            <Styled.Slider slider checked={mailable} onChange={handleSubmitMailable} />
          </Styled.Container>
          <Styled.LightText>???????????? TTL??? ????????? ???????????????. (?????? ??????)</Styled.LightText>
          <Styled.Line />
          <Styled.Container>
            <Styled.LightText>
              ?????? ??? ????????? ??? ??? ????????? ???????????? ???????????? ????????????.
            </Styled.LightText>
            <Styled.Btn style={{ minWidth: '4.8rem', marginLeft: '1rem' }} onClick={handleWithdraw}>
              ?????? ??????
            </Styled.Btn>
          </Styled.Container>
          <Styled.Title style={{ width: '100%' }}>
            <PrivacyModal />
            <div style={{ width: '1rem' }} />
            <TermModal />
            <div style={{ width: '1rem' }} />
            <a href="https://github.com/today-they-learned">
              <Styled.Github>TTL Github</Styled.Github>
            </a>
          </Styled.Title>
        </Styled.SettingContainer>
      </Container.AlignCenterContainer>
    </>
  );
};

export default Setting;
