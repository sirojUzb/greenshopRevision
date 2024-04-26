import styled from "styled-components";

export const Button = styled.div`
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  height: 40px;
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
`;
