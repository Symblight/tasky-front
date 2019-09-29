import styled from "styled-components"

export const Wrapper = styled.li`
  position: relative;
  border-radius: 4px;
  height: 28px;
  width: 28px;
  margin-bottom: 6px;

  background-color: ${({ data }) => data};

  cursor: pointer;

  &:hover {
    &:before {
      background: rgba(0, 0, 0, 0.15);
      position: absolute;
      bottom: 0;
      content: "";
      display: block;
      left: 0;
      right: 0;
      top: 0;
    }
  }
`

export const Check = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: #fff;
  font-size: 18px;
`
