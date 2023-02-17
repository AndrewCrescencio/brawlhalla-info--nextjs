import styled from "styled-components";

export const NavigationContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 16px;
  margin: 48px 0 16px;
`;

export const FilterWrapper = styled.div``;

export const FiltersButtonContainer = styled.div``;

export const FilterButton = styled.button``;

export const PaginationButton = styled.button`
  cursor: pointer;
  border-radius: 8px;
  border: none;
  padding: 0;
  display: grid;
  place-content: center;
  width: 48px;
  height: 48px;
  background-color: ${({theme})=> theme.colors.buttonBackground};
  border: 1px solid ${({theme})=> theme.colors.buttonBorder};
  cursor: pointer;
  &:disabled {
    cursor: not-allowed;
  }
`;
