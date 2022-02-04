import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import COLOR from 'constants/color.constant';

const GlobalStyles = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }
  body{
    background-color: ${COLOR.BACKGROUND};
    font-family: 'NS-R';
    color: #000000;
    font-size: 17px;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  input, button {
    background-color: transparent;
    border: none;
    outline: none;
  }
  h1, h2, h3, h4, h5, h6{
    font-family: 'NS-B';
  }
  ol, ul, li {
    list-style: none;
  }
  img {
    display: block;
    width: 100%;
    height: 100%;
  }

  /* 색 제목 */
   h1 {
    text-align: center;
    font-family: 'NS-EB';
    font-size: 40px;
    color: ${COLOR.PRIMARY};
  }

  /* 색X 제목 */
  h2 {
    text-align: center;
    font-family: 'NS-EB';
    font-size: 40px;
    color: black;
  }

  /* 색 강조 */
  strong {
    text-align: center;
    font-family: 'NS-EB';
    font-size: 17px;
    color: ${COLOR.PRIMARY};
  }

  /* 본문 */
  p {
    text-align: center;
    font-family: 'NS-R';
    font-size: 17px;
  }
`;

export default GlobalStyles;
