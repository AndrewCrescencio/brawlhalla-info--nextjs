import { useRouter } from "next/router";

import { brackets, regions } from "src/common/filters";
import { paginationLink } from "src/helpers/pagination-link";
import {
  FilterButton,
  FilterName,
  FiltersButtonContainer,
  FiltersContainer,
  FilterWrapper,
} from "./styles";

export const Filters = ({ closePopover }) => {
  const route = useRouter();
  const { bracket, region, page } = route.query;

  const handleFilter = (bracket, region, page) => {
    closePopover();
    const newPage = paginationLink(bracket, region, page)
    route.push(newPage)
  };

  return (
    <FiltersContainer>
      <FilterWrapper>
        <FilterName>Region:</FilterName>
        <FiltersButtonContainer>
          {regions.map((filter) => {
            return (
              <FilterButton
                onClick={() =>
                  handleFilter(paginationLink(bracket, filter, page))
                }
                key={filter}
                selected={region === filter}
              >
                [{filter}]
              </FilterButton>
            );
          })}
        </FiltersButtonContainer>
      </FilterWrapper>
      <FilterWrapper>
        <FilterName>Bracket:</FilterName>
        <FiltersButtonContainer>
          {brackets.map((filter) => {
            return (
              <FilterButton
                onClick={() =>
                  handleFilter(paginationLink(filter, region, page))
                }
                key={filter}
              >
                [{filter}]
              </FilterButton>              
            );
          })}
        </FiltersButtonContainer>
      </FilterWrapper>
    </FiltersContainer>
  );
};
