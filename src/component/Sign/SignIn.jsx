import React from 'react';
import { Form, Grid, Button, Checkbox, Divider } from 'semantic-ui-react';
import styled from 'styled-components';

const SignInContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
`;

const Signin = () => {
  return (
    <SignInContainer>
      <Grid.Column centered>
        <div
          style={{
            marginBottom: '1rem',
            textAlign: 'center',
            fontFamily: 'NS-EB',
            fontSize: 40,
            color: '#707BF3',
          }}
        >
          TTL
        </div>
        <div style={{ marginBottom: '5rem', textAlign: 'center' }}>
          모든 글을 한 곳으로 모아보세요.
        </div>
        <Form style={{ width: '23rem' }}>
          <Form.Field fluid placeholder="이메일" control={Form.Input} />
          <Form.Field fluid type="password" placeholder="비밀번호" control={Form.Input} />
          <Form.Field>
            <Button fluid basic type="submit">
              로그인
            </Button>
          </Form.Field>
        </Form>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
          <Checkbox label="로그인 유지하기" />
          <div>비밀번호찾기</div>
        </div>
        <br />
        <br />
        <Divider />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ marginRight: '1.5rem' }}>아직 회원이 아니세요?</div>
          <div style={{ fontFamily: 'NS-EB', color: '#707BF3' }}>회원가입</div>
        </div>
      </Grid.Column>
    </SignInContainer>
  );
};

export default Signin;
