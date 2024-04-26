import styled from "styled-components";

export const CarouselWrapper = styled.div`
  width: 100%;
  height: 450px;
  display: flex;
`;
CarouselWrapper.Right = styled.div`
  width: 60%;
  height: 100%;

  .textWrapper {
    margin-top: 48px;
    margin-left: 40px;
    text-transform: uppercase;
  }
  h1 {
    font-family: Inter;
    font-weight: 900;
    font-size: 70px;
    line-height: 70px;
    text-align: left;
  }
  h3 {
    font-family: Inter;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.1em;
    text-align: left;
    margin-bottom: 10px;
  }
  span {
    color: #46a358;
  }
  p {
    font-family: Inter;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    text-align: left;
    width: 90%;
    color: rgba(114, 114, 114, 1);
    margin-bottom: 30px;
  }
`;
CarouselWrapper.Left = styled.div`
  width: 40%;
  height: 100%;
  position: relative;
  overflow: hidden;

  .img_big {
    width: 450px;
    position: absolute;
    left: 0;
    bottom: 5px;
  }
  .img_small {
    width: 135px;
    height: 135px;
    position: absolute;
    z-index: 10;
    bottom: 0;
    left: 5px;
  }
`;
