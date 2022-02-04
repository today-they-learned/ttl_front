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
    font-size: 18px !important;
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

const Signin = () => {
  const [email, setEmail] = useInput('');
  const [password, setPassword] = useInput('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // 여기부터 api 처리
  };

  return (
    <SignContainer>
      <Grid.Column centered>
        <SignTitle />
        <Form onSubmit={handleSubmit} style={{ width: '23rem' }}>
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
          <Field>
            <Btn.PrimaryBtn fluid type="submit">
              로그인
            </Btn.PrimaryBtn>
          </Field>
        </Form>
        <div style={{ display: 'flex', justifyContent: 'space-between', margin: '1rem 0 3rem 0' }}>
          <Container.AlignMiddleContainer>
            {/* 이메일 저장용 체크박스 */}
            <Checkbox />
            <p style={{ marginLeft: '0.3rem', marginTop: '0.05rem' }}>이메일 저장</p>
          </Container.AlignMiddleContainer>
          <Link to="/">
            {/* 추후 비밀번호 찾기(재설정) 페이지 연결.. 찾기인 이유는 워딩이 안예뻐서 */}
            <p style={{ marginTop: '0.05rem' }}>비밀번호 찾기</p>
          </Link>
        </div>
        <Divider />
        <Container.AlignCenterContainer>
          <div style={{ marginRight: '1.5rem' }}>아직 회원이 아니세요?</div>
          <Link to="/signup">
            <strong>회원가입</strong>
          </Link>
        </Container.AlignCenterContainer>
      </Grid.Column>
    </SignContainer>
  );
};

export default Signin;
