import styled from "styled-components";
import { media } from "src/styles/media-querie";

export const PopoverContainer = styled.div`
  position: relative;
`;

export const PopoverContent = styled.div`
  border: 1px solid #35383F;
  position: absolute;
  top: 62px;
  right: 0;
  padding: 16px;
  display: none;
  ${(props) => props.open && "display: block !important;"};
  border-radius: 8px;
  background-color: ${({theme}) => theme.colors.tableBackground};
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16);
  width: calc(100vw - 32px);
  ${media.phone`
    width: calc(100vw - 48px);
  `}
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
  background-color: ${({theme})=> theme.colors.buttonBackground};
  border: 1px solid ${({theme})=> theme.colors.buttonBorder};
  /* text-transform: uppercase; */
  font: inherit;
`;
