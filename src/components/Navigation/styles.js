import styled from "styled-components";

export const NavigationContainer = styled.div`
  margin: 48px 0 16px;
  position: relative;
  display: flex;
  align-items: flex-end;
  gap: 16px;
`;

export const FilterWrapper = styled.div`
  display: flex;
`;

export const FiltersButtonContainer = styled.div`
  display: flex;
  margin-top: 16px;
  flex-wrap: wrap;
  gap: 8px;
  height: 100%;
`;

export const FilterButton = styled.button`
  cursor: pointer;
  border-radius: 8px;
  border: none;
  padding: 0;
  display: grid;
  place-content: center;
  width: 48px;
  height: 48px;
  cursor: pointer;
`;

export const PaginationButton = styled.button`
  cursor: pointer;
  border-radius: 8px;
  border: none;
  padding: 0;
  display: grid;
  place-content: center;
  width: 48px;
  height: 48px;
  cursor: pointer;
  order: -1;
  @media (min-width: 768px) {
    order: 0;
  }
`;
