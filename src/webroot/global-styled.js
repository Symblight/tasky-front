import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  html {
    font-size: 12px;
  }

  body {
    margin: 0;
    height: 100%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  #root {
    display: flex;
    height: 100%;

    overflow: hidden;
    position: relative;
    z-index: 1;
  
    section {
      height: 100%;
      position: relative;
      z-index: 0;
      background-color: #fff;
    }
  }
    body .ant-pagination-disabled a,
    body .ant-pagination-disabled:hover a,
    body .ant-pagination-disabled:focus a,
    body .ant-pagination-disabled .ant-pagination-item-link,
    body .ant-pagination-disabled:hover .ant-pagination-item-link,
    body .ant-pagination-disabled:focus .ant-pagination-item-link {
      display: flex;
      justify-content: center;
      align-items: center
  }

  ::-webkit-scrollbar {
      width: 8px;
      height: 12px;
  }
  
  ::-webkit-scrollbar-track {
    background-color: #dedede;
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: #b9b9b9;
    outline: 1px solid slategrey;
    border-radius: 4px;
  }

  ol, ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`
