/* eslint-disable no-unused-expressions */
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SIGN_UP_REQUEST } from 'reducers/authentication';
import { Link } from 'react-router-dom';
import useInput from 'hooks/useInput';
import styled from 'styled-components';
import { Form, Grid, Divider } from 'semantic-ui-react';
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

const SignUp = () => {
  const dispatch = useDispatch();
  const { signupLoading, signupError, signupDone } = useSelector((state) => state.authentication);
  const [nonFieldError, setNonFieldError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');
  const [passwordCheck, onChangePasswordCheck] = useInput('');

  const handleSubmit = useCallback(() => {
    setEmailError('');
    setPasswordError('');
    setNonFieldError('');
    dispatch({
      type: SIGN_UP_REQUEST,
      data: {
        username: `${email.split('@')[0]}`,
        email,
        password1: password,
        password2: passwordCheck,
      },
    });
  });

  useEffect(() => {
    if (signupError) {
      const { nonFieldErrors, password1 } = signupError;
      signupError.email && setEmailError(signupError.email);
      signupError.password1 && setPasswordError(password1);
      signupError.nonFieldErrors && setNonFieldError(nonFieldErrors[0]);
    }
    if (signupDone) {
      window.location.replace('/');
    }
    return () => {
      setEmailError('');
      setPasswordError('');
      setNonFieldError('');
    };
  }, [signupError, signupDone]);

  return (
    <SignContainer>
      <Grid.Column centered>
        <SignTitle />
        <Form onSubmit={handleSubmit} style={{ width: '23rem', marginBottom: '1.5rem' }}>
          <Field
            fluid
            required
            placeholder="이메일"
            type="email"
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
            required
            placeholder="비밀번호"
            type="password"
            control={Form.Input}
            value={password}
            onChange={onChangePassword}
            error={
              passwordError.length > 0 && {
                content: passwordError,
              }
            }
          />
          <Field
            fluid
            required
            placeholder="비밀번호 확인"
            type="password"
            control={Form.Input}
            value={passwordCheck}
            onChange={onChangePasswordCheck}
          />
          <p style={{ color: 'red', fontSize: '15px' }}>{nonFieldError}</p>
          <Field>
            <Btn.PrimaryBtn fluid type="submit" disabled={signupLoading}>
              회원가입
            </Btn.PrimaryBtn>
          </Field>
        </Form>
        <Container.AlignCenterContainer style={{ marginBottom: '1.5rem' }}>
          <div style={{ marginRight: '1rem' }}>이미 계정이 있으세요?</div>
          <Link to="/signin">
            <strong>로그인</strong>
          </Link>
        </Container.AlignCenterContainer>
        <Divider />
        {/* 약관확인 */}
        <p>
          <span>
            회원가입 시 TTL의{' '}
            <a href="/" style={{ fontFamily: 'NS-B' }}>
              서비스 약관
            </a>{' '}
            및 <br />
            <a href="/" style={{ fontFamily: 'NS-B' }}>
              개인정보 처리방침
            </a>
            을 확인하였으며, 동의합니다.
          </span>
        </p>
      </Grid.Column>
    </SignContainer>
  );
};

export default SignUp;
