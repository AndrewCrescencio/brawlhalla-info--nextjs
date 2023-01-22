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

export const Filters = () => {
  const route = useRouter();
  const { bracket, region, page } = route.query;

  return (
    <>
      <FiltersContainer>
        <FilterWrapper>
          <FilterName>Bracket:</FilterName>
          <FiltersButtonContainer>
            {brackets.map((filter) => {
              return (
                <FilterButton
                  onClick={() =>
                    route.push(paginationLink(filter, region, page))
                  }
                  key={filter}
                >
                  [{filter}]
                </FilterButton>
              );
            })}
          </FiltersButtonContainer>
        </FilterWrapper>
        <FilterWrapper>
          <FilterName>Region:</FilterName>
          <FiltersButtonContainer>
            {regions.map((filter) => {
              return (
                <FilterButton
                  onClick={() =>
                    route.push(paginationLink(bracket, filter, page))
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
      </FiltersContainer>
    </>
  );
};
