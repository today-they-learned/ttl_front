/* eslint-disable camelcase */
import React, { useState, useEffect, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signinRequestAction } from 'reducers/authentication';
import { useCookies } from 'react-cookie';
import useInput from 'hooks/useInput';
import styled from 'styled-components';
import COLOR from 'constants/color.constant';

import { Form, Grid, Checkbox, Divider } from 'semantic-ui-react';
import * as Container from 'components/common/Containers';
import * as Btn from 'components/common/Button';
import SignTitle from 'components/Sign/SignTitle';

const SignContainer = styled(Container.AlignCenterContainer)`
  margin-top: 6rem;
`;

const Field = styled(Form.Field)`
  input {
    height: 3rem;
    font-size: 16px !important;
  }
  input[type='email'] {
    font-family: 'NS-R' !important;
  }
  input[type='password'] {
    ::placeholder {
      font-family: 'NS-R' !important;
    }
  }
`;

const Strong = styled.strong`
  text-align: center;
  font-family: 'NS-EB';
  font-size: 15px;
  color: ${COLOR.PRIMARY};
`;

const P = styled.p`
  text-align: center;
  font-family: 'NS-R';
  font-size: 15px;
`;

const Signin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { signinLoading, signinDone, signinError } = useSelector((state) => state.authentication);
  const [nonFieldError, setNonFieldError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [email, onChangeEmail, setEmail] = useInput('');
  const [password, onChangePassword] = useInput('');
  const [isRemember, setIsRemember] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(['rememberEmail']);

  useEffect(() => {
    if (cookies.rememberEmail !== undefined) {
      setEmail(cookies.rememberEmail);
      setIsRemember(true);
    }
  }, []);

  useEffect(() => {
    if (signinError) {
      // eslint-disable-next-line no-shadow
      const { email, nonFieldErrors } = signinError;
      if (email) {
        setEmailError(email);
      }
      if (nonFieldErrors) {
        setNonFieldError('가입되지 않은 이메일이거나, 비밀번호가 올바르지 않습니다.');
      }
    }
  }, signinError);

  useEffect(() => {
    if (signinDone) {
      if (isRemember) {
        setCookie('rememberEmail', email, { maxAge: 2000 });
      } else {
        removeCookie('rememberEmail');
      }
      navigate('/');
    }
  }, [signinDone]);

  const handleSubmit = useCallback(() => {
    dispatch(signinRequestAction({ email, password }));
  }, [email, password]);

  return (
    <SignContainer>
      <Grid.Column centered>
        <SignTitle />
        <Form onSubmit={handleSubmit} style={{ width: '23rem' }}>
          <Field
            fluid
            placeholder="이메일"
            type="email"
            required
            control={Form.Input}
            value={email}
            onChange={onChangeEmail}
            error={
              emailError.length > 0 && {
                content: emailError,
              }
            }
          />
          <Field
            fluid
            placeholder="비밀번호"
            type="password"
            required
            control={Form.Input}
            value={password}
            onChange={onChangePassword}
          />
          <P style={{ color: 'red', fontSize: '15px' }}>{nonFieldError}</P>
          <Field>
            <Btn.PrimaryBtn fluid type="submit" disble={signinLoading}>
              로그인
            </Btn.PrimaryBtn>
          </Field>
        </Form>
        <div style={{ display: 'flex', justifyContent: 'space-between', margin: '1rem 0 3rem 0' }}>
          <Container.AlignMiddleContainer>
            {/* 이메일 저장용 체크박스 */}
            <Checkbox
              checked={isRemember}
              onChange={() => {
                setIsRemember(!isRemember);
              }}
            />
            <P style={{ marginLeft: '0.3rem', marginTop: '0.05rem' }}>이메일 저장</P>
          </Container.AlignMiddleContainer>
          {/* 비밀번호 재설정 기능 (비활성화) */}
          {/* <Link to="/">
            <p style={{ marginTop: '0.05rem' }}>비밀번호 찾기</p>
          </Link> */}
        </div>
        <Divider />
        <Container.AlignCenterContainer>
          <div style={{ marginRight: '1.5rem' }}>아직 회원이 아니세요?</div>
          <Link to="/signup">
            <Strong>회원가입</Strong>
          </Link>
        </Container.AlignCenterContainer>
      </Grid.Column>
    </SignContainer>
  );
};

export default Signin;
