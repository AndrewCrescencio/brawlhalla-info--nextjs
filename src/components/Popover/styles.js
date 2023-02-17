import styled from "styled-components";
// import { media } from "src/styles/media-querie";

export const PopoverContainer = styled.div`
  position: relative;
`;

export const PopoverContent = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.buttonBorder};
  position: absolute;
  top: 62px;
  left: 0;
  padding: 16px;
  display: none;
  z-index: 99;
  ${(props) => props.open && "display: block !important;"};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.tableBackground};
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12),
    0px 2px 4px rgba(0, 0, 0, 0.2);
  width: 262px;
  @media (min-width: 420px) {
    width: 340px;
  }
`;

export const OpenButton = styled.button`
  cursor: pointer;
  border-radius: 8px;
  padding: 0;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 16px;
  height: 48px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.buttonBackground};
  border: 1px solid ${({ theme }) => theme.colors.buttonBorder};
  /* text-transform: uppercase; */
  font: inherit;
`;
