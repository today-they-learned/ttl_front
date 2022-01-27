import React from 'react';
import styled from 'styled-components';
import ProfileInfo from 'components/mypage/ProfileInfo';

const MyPage = styled.div`
  background-color: white;
`;

const Mypage = () => {
  // const [info, setInfo] = useState(initialInfo);

  return (
    <MyPage>
      <ProfileInfo />

      <div>
        <ul>~</ul>
      </div>
    </MyPage>
  );
};

export default Mypage;
