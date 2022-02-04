import styled from 'styled-components';

export const Profile = styled.div`
  .containerLeft {
    width: 8rem;
    height: 9rem;
    float: left;
    color: black;
    margin-left: 1.6rem;
    margin-top: 0.5rem;
    padding-top: 1.1rem;
    padding-left: 1.4rem;
  }
  .containerCenter {
    width: 32rem;
    height: 9rem;
    float: left;
    margin-top: 0.5rem;
    padding-left: 1.5rem;
    padding-top: 1rem;
    font-size: 12px;
  }
  .containerRight {
    width: 9rem;
    height: 9rem;
    margin-top: 0.5rem;
    padding-left: 0.5rem;
    padding-top: 0.9rem;
    float: left;
  }
  .containerBottom {
    clear: left;
    width: 50rem;
    height: 9rem;
  }
  .profileImg {
    width: 6.5rem;
    height: 6.5rem;
    border-radius: 3.5rem;
    margin-right: 0;
  }
  .userName {
    float: left;
    margin-bottom: 0.4rem;
    font-size: 1.2rem;
    font-weight: 600;
    font-family: 'NS-R';
  }
  .email {
    float: left;
    margin-bottom: 0.4rem;
    font-size: 0.6rem;
    margin-left: 0.3rem;
    margin-top: 0.5rem;
  }
  .introduce {
    clear: left;
    margin-bottom: 0.8rem;
    font-size: 0.8rem;
    font-weight: 600;
    height: 3.8rem;
    margin-top: 1rem;
    padding-top: 0.5rem;
  }
  .tag {
    margin-top: 0.3rem;
    font-family: 'NS-B';
  }
  .editButton {
    width: 5rem;
    height: 1.5rem;
    font-size: 0.5rem;
    margin-top: 0.5rem;
    margin-left: 3.2rem;
    padding: 0;
    background-color: #707bf3;
    color: white;
  }
  .iconContainer {
    width: 12rem;
    height: 2rem;
    padding-left: 3.2rem;
    padding-top: 3.8rem;
  }
  .icon {
    float: left;
    width: 1.3rem;
    height: 1.3rem;
    margin-right: 0.5rem;
  }
  .line {
    clear: left;
    width: 48rem;
    height: 0.1rem;
    margin-left: 2.2rem;
    background-color: #eaeaea;
  }
  .choice1 {
    margin-top: 0.6rem;
    margin-left: 3rem;
    float: left;
    font-weight: 1000;
    font-family: 'NS-R';
    color: #363636;
  }
  .choice1.active {
    margin-top: 0.6rem;
    margin-left: 3rem;
    float: left;
    font-weight: 1000;
    font-family: 'NS-R';
    color: #707bf3;
  }
  .choice2 {
    margin-top: 0.6rem;
    margin-left: 1.5rem;
    float: left;
    font-weight: 1000;
    font-family: 'NS-R';
    color: #363636;
  }
  .choice2.active {
    margin-top: 0.6rem;
    margin-left: 1.5rem;
    float: left;
    font-weight: 1000;
    font-family: 'NS-R';
    color: #707bf3;
  }
`;
