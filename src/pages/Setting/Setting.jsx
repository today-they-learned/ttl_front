import React from 'react';
import { Form, Input, Checkbox } from 'semantic-ui-react';
import styled from 'styled-components';

const SettingContainer = styled.div`
  width: 100%;
  margin-top: 2rem;
  margin-left: 8rem;
`;

const Label = styled.div`
  width: 55rem;
  margin-top: 2rem;
  margin-left: 0.3rem;
  margin-bottom: 0.6rem;
`;

const GitField = styled.div`
  width: 20rem;
  height: 2.5rem;
  font-size: 0.8rem;
`;

const VelogField = styled.div`
  width: 20rem;
  height: 2.5rem;
  font-size: 0.8rem;
`;
const TistoryField = styled.div`
  width: 20rem;
  height: 2.5rem;
  font-size: 0.8rem;
`;
const Toggle = styled.div`
  width: 20rem;
  padding-left: 0.3rem;
`;

const Setting = () => {
  return (
    <SettingContainer>
      <Form>
        <Label>git, velog, tistory 글 연동</Label>
        <GitField>
          <Form.Field control={Input} placeholder="git 계정을 입력하세요" />
        </GitField>
        <VelogField>
          <Form.Field control={Input} placeholder="velog 계정을 입력하세요" />
        </VelogField>
        <TistoryField>
          <Form.Field control={Input} placeholder="tistory 계정을 입력하세요" />
        </TistoryField>
      </Form>
      <Label>메일 수신 동의</Label>
      <Toggle>
        <Checkbox toggle />
      </Toggle>
    </SettingContainer>
  );
};

export default Setting;
