import styled from "styled-components";

export const Button = styled.button`
  cursor: pointer;
  display: grid;
  place-content: center;
  width: 48px;
  height: 48px;
  border: none;
  margin-left: auto;
  background-color: transparent;
  svg {
    @media (min-width: 768px) {
      width: 24px;
      height: 24px;
    }
  }
`;
