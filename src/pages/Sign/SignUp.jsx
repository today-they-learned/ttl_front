import React from 'react';
import { Link } from 'react-router-dom';
import useInput from 'hooks/useInput';
import styled from 'styled-components';
import { Form, Grid, Checkbox, Divider } from 'semantic-ui-react';
import * as Container from 'component/common/Containers';
import * as Btn from 'component/common/Button';
import SignTitle from 'component/Sign/SignTitle';

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
  const [email, setEmail] = useInput('');
  const [password, setPassword] = useInput('');
  const [passwordCheck, setPasswordCheck] = useInput('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // 여기부터 api 처리
  };

  return (
    <SignContainer>
      <Grid.Column centered>
        <SignTitle />
        <Form onSubmit={handleSubmit} style={{ width: '23rem', marginBottom: '1.5rem' }}>
          <Field
            fluid
            placeholder="이메일"
            type="email"
            control={Form.Input}
            value={email}
            onChange={setEmail}
          />
          <Field
            fluid
            placeholder="비밀번호"
            type="password"
            control={Form.Input}
            value={password}
            onChange={setPassword}
          />
          <Field
            fluid
            placeholder="비밀번호 확인"
            type="password"
            control={Form.Input}
            value={passwordCheck}
            onChange={setPasswordCheck}
          />
          <Container.AlignMiddleContainer style={{ margin: '1rem 0 2rem 0' }}>
            {/* 이메일 수신확인 */}
            <Checkbox />
            <p style={{ margin: '0.05rem 0.3rem 0 0.3rem', fontSize: '15px' }}>
              TTL의 관련 소식 레터 받아보기 문구?
            </p>
            <span style={{ marginTop: '0.1rem' }}>(선택)</span>
          </Container.AlignMiddleContainer>
          <Field>
            <Btn.PrimaryBtn fluid type="submit">
              회원가입
            </Btn.PrimaryBtn>
          </Field>
        </Form>
        <Container.AlignCenterContainer style={{ marginBottom: '2rem' }}>
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
