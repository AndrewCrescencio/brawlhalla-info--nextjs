import styled from "styled-components";

export const FiltersContainer = styled.div``;

export const FilterWrapper = styled.div`
  display: flex;
  align-items: baseline;
  gap: 8px;
  margin-bottom: 16px;
`;

export const FilterName = styled.p`
  min-width: 59px;
`;

export const FiltersButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  height: 100%;
  mask-type: 16px;
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
  background-color: ${({theme})=> theme.colors.buttonBackground};
`;
