import React from 'react';
import styled from 'styled-components';
import { Modal } from 'semantic-ui-react';

const ConfirmButton = styled.button`
  width: 5rem;
  height: 1.7rem;
  border-radius: 0.1rem;
  margin-left: 0.4rem;
  margin-bottom: 0.4rem;
  font-size: 0.7rem;
  background-color: #707bf3;
  color: white;
`;

const Content = styled.button`
  text-align: left;
  font-size: 0.8rem;
  font-weight: 500;
`;

function ServiceModal() {
  const [open, setOpen] = React.useState(false);

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<ConfirmButton>서비스 약관</ConfirmButton>}
    >
      <Modal.Header>서비스 약관</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Content>
            ① TTL은 각 개인정보 파일별 처리 목적을 위하여 개인정보를 수집합니다. 처리하고 있는
            개인정보는 해당 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는
            「개인정보 보호법」 제18조(개인정보의 이용ㆍ제공 제한)에 따라 별도의 동의를 받는 등
            필요한 사항을 조치하겠습니다.
          </Content>
          <br />
          <Content>
            ② TTL은 원칙적으로 정보주체의 개인정보를 제1조(개인정보의 처리 목적)에서 명시한 범위
            내에서 처리하며, 이용자의 사전 동의 없이는 본래의 범위를 초과하여 처리하거나 제3자에게
            제공하지 않습니다. 단, 「개인정보 보호법」 제17조 및 제18조에 해당하는 경우에만
            개인정보를 목적 외의 용도로 이용하거나 이를 제3자에게 제공할 수 있습니다. <br /> <br />
            1. 정보주체로부터 별도의 동의를 받은 경우 2. 다른 법률에 특별한 규정이 있는 경우 3.
            정보주체 또는 그 법정대리인이 의사표시를 할 수 없는 상태에 있거나 주소불명 등으로 사전
            동의를 받을 수 없는 경우로서 명백히 정보주체 또는 제3자의 급박한 생명, 신체, 재산의
            이익을 위하여 필요하다고 인정되는 경우 4. 개인정보를 목적 외의 용도로 이용하거나 이를
            제3자에게 제공하지 아니하면 다른 법률에서 정하는 소관 업무를 수행할 수 없는 경우로서
            보호위원회의 심의·의결을 거친 경우 5. 조약, 그 밖의 국제협정의 이행을 위하여 외국정부
            또는 국제기구에 제공하기 위하여 필요한 경우 6. 범죄의 수사와 공소의 제기 및 유지를
            위하여 필요한 경우 7. 법원의 재판업무 수행을 위하여 필요한 경우 8. 형(刑) 및 감호,
            보호처분의 집행을 위하여 필요한 경우
          </Content>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <ConfirmButton onClick={() => setOpen(false)}>확인</ConfirmButton>
      </Modal.Actions>
    </Modal>
  );
}

export default ServiceModal;
