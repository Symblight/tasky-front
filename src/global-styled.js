import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    height: 100%;
  }

  #root {
    height: 100%;
    overflow: auto;
    z-index: 999;
    position: relative;
    background-color: #f0f2f5;
  }
  body .ant-pagination-disabled a,
  body .ant-pagination-disabled:hover a,
  body .ant-pagination-disabled:focus a,
  body .ant-pagination-disabled .ant-pagination-item-link,
  body .ant-pagination-disabled:hover .ant-pagination-item-link,
  body .ant-pagination-disabled:focus .ant-pagination-item-link{
    display: flex;
    justify-content: center;
    align-items: center
}
`
