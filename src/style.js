import styled from "styled-components";

const Wrapper = styled.div`
  width: 80%;
  height: 78px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.3px solid #46a35880;

  .img {
    cursor: pointer;
  }
`;
Wrapper.Left = styled.div``;
Wrapper.Middle = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;
Wrapper.Middle.Item = styled.h4`
  margin: 0 10px;
  cursor: pointer;
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 19.36px;
  text-align: left;
  position: relative;

  &::before {
    content: "";
    display: none;
    position: absolute;
    width: 100%;
    height: 3px;
    background-color: #46a35880;
    bottom: -29px;
  }
  &:hover::before {
    display: block;
  }
`;

Wrapper.Right = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  .icon {
    font-size: 20px;
    cursor: pointer;
  }
`;
export { Wrapper };
