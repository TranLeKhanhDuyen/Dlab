import { createGlobalStyle } from 'styled-components/macro'

const ThemedGlobalStyle = createGlobalStyle`
  html {
    font-family: 'JetBrains Mono', 'Roboto', sans-serif;
    font-size: 16px;
    line-height: 24px;
    color: ${({ theme }) => theme.colors.neutral1};
    background-color: ${({ theme }) => theme.colors.neutral8} !important;
    font-variant: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    scroll-behavior: smooth;
  }
  /* prettier-ignore */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  /* prettier-ignore */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  ol,
  ul {
    list-style: disc;
    list-style-position: inside;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  a {
    color: inherit;
    text-decoration: none;
    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active {
      box-shadow: none;
    }
  }
  [role='button'] {
    cursor: pointer;
  }
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  /* Scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 16px;
    background-color: ${({ theme }) => theme.colors.neutral6};
  }
  ::-webkit-scrollbar-track {
    border-radius: 16px;
    background-color: ${({ theme }) => theme.colors.neutral7};
  }
  /* Slider */
  input[type='range'] {
    -webkit-appearance: none; /* Hides the slider so that custom slider can be made */
    width: 100%; /* Specific width is required for Firefox. */
    background: transparent; /* Otherwise white in Chrome */
  }
  input[type='range']::-webkit-slider-thumb {
    -webkit-appearance: none;
  }
  input:focus,
  textarea:focus {
    outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */
  }
  textarea {
    resize: none;
  }
  input,
  textarea {
    font-size: 14px;
    line-height: 20px;
    color: inherit;
    font-family: 'JetBrains Mono', 'Roboto', sans-serif;
  }
  input[type='range']::-ms-track {
    width: 100%;
    cursor: pointer;
    /* Hides the slider so custom styles can be added */
    background: transparent;
    border-color: transparent;
    color: transparent;
  }

  // remove input background color for autocomplete
  input:-webkit-autofill,
  input:-webkit-autofill:focus {
    transition: background-color 1s 5000s, color 1s 5000s;
  }
  input[data-autocompleted] {
    background-color: transparent !important;
  }

  input:disabled {
    cursor: not-allowed;
  }

  hr {
    border: none;
    border-top: 1px solid ${({ theme }) => theme.colors.neutral6};
    width: 100%;
  }
  button {
    font-family: 'JetBrains Mono', 'Roboto', sans-serif;
    font-weight: 500;
    border: none;
    outline: none;
    font-size: 14px;
    line-height: 16px;
    cursor: pointer;
    transition: all 240ms ease;
  }
  a {
    font-size: 14px;
    line-height: 20px;
    color: ${({ theme }) => theme.colors.primary1};
  }
  a.underline :hover {
    text-decoration: underline!important;
  }
  .bold,
  bold {
    font-weight: bold;
  }
  ::placeholder,
  ::-webkit-input-placeholder,
  :-ms-input-placeholder,
  ::-ms-input-placeholder {
    color: ${({ theme }) => theme.colors.neutral6}!important;
    opacity: 1; /* Firefox */
  }
  button[disabled] {
    color: ${({ theme }) => theme.colors.neutral4}!important;
    background: ${({ theme }) => theme.colors.neutral6}!important;
    border-color: ${({ theme }) => theme.colors.neutral6}!important;
    cursor: not-allowed;
  }
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    margin-top: 0;
    margin-bottom: 0;
  }


  :root {
    --toastify-color-light: #fff;
    --toastify-color-dark:  #000;
    --toastify-color-info:  ${({ theme }) => theme.colors.secondary2};
    --toastify-color-success:  ${({ theme }) => theme.colors.primary1};
    --toastify-color-warning:  ${({ theme }) => theme.colors.yellow1};
    --toastify-color-error:  ${({ theme }) => theme.colors.red1};
    --toastify-color-transparent: rgba(255, 255, 255, 0.7);
  }

  html,
  body,
  #root {
    height: 100%;
  }

`

export default ThemedGlobalStyle
