import React from 'react';
import styled from 'styled-components';
import ProfileEdit from 'components/mypage/ProfileEdit';

const MyPage = styled.div`
  background-color: white;
`;

const MypageEdit = () => {
  // const [info, setInfo] = useState(initialInfo);

  return (
    <MyPage>
      <ProfileEdit />

      <div>
        <ul>~</ul>
      </div>
    </MyPage>
  );
};

export default MypageEdit;
