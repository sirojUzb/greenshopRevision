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
`;
Wrapper.NavbarWrapper.Left = styled.div`
  display: flex;
  align-items: center;
`;
Wrapper.NavbarWrapper.Middle = styled.div`
  display: flex;
  align-items: center;
`;
Wrapper.NavbarWrapper.Right = styled.div`
  display: flex;
  align-items: center;
`;

export { Wrapper };
