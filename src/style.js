import styled from "styled-components";

const Wrapper = styled.div`
  width: 80%;
  margin: auto;
`;
Wrapper.NavbarWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px;
  border-bottom: 0.3px solid #46a35880;
`;
Wrapper.NavbarWrapper.Left = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
Wrapper.NavbarWrapper.Middle = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;

  h3 {
    font-family: Inter;
    font-size: 16px;
    font-weight: 400;
    line-height: 19.32px;
    text-align: left;
    cursor: pointer;
  }
`;
Wrapper.NavbarWrapper.Right = styled.div`
  display: flex;
  align-items: center;
  font-size: 25px;
  gap: 32px;

  .icon {
    cursor: pointer;
  }
  button {
    width: 96px;
    height: 36px;
    background-color: #46a358;
    color: white;
    font-family: Inter;
    font-size: 16px;
    font-weight: 500;
    line-height: 19.32px;
    text-align: left;
    border-radius: 6px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    cursor: pointer;
  }
`;
Wrapper.CarouselWrapper = styled.div`
  margin-top: 12px;
  background: linear-gradient(
    97.77deg,
    rgba(245, 245, 245, 0.5)-23.46%,
    rgba(245, 245, 245, 0.5) 107.51%
  );
  width: 100%;
  height: 450px;
`;
export { Wrapper };
