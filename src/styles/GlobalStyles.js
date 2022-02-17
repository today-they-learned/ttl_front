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
    font-size: 15px;
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

  .toastui-editor-contents > pre {
    background-color: #e9ecf3;
  }

  .token.operator {
    background: none;
  }

  .loading * {
  background-color: #d8dde1!important;
  color: transparent!important;
  border: transparent!important;
  border-radius: 0!important;
  }
  .loading img {
    opacity: 0!important;
    visibility: hidden!important;
  }

  .loading .ui.circular.label {
    display: none!important;
  }

  .ui.slider.checkbox input:checked~label:before {
    background-color: ${COLOR.PRIMARY} !important;
  }
  
  .ui.slider.checkbox input:focus:checked~.box:before, .ui.slider.checkbox input:focus:checked~label:before {
    background-color: ${COLOR.PRIMARY} !important;
  }

`;

export default GlobalStyles;
