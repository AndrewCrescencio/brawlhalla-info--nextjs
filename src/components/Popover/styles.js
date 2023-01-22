import styled from "styled-components";

export const PopoverContainer = styled.div`
  position: relative;
  margin-left: auto;
`;

export const PopoverContent = styled.div`
  position: absolute;
  top: 62px;
  width: 280px;
  right: 0;
  padding: 16px;
  display: none;
  ${(props) => props.open && "display: block !important;"};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16);
`;

export const OpenButton = styled.button`
  cursor: pointer;
  border-radius: 8px;
  border: none;
  padding: 0;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 16px;
  height: 48px;

  cursor: pointer;
`;
