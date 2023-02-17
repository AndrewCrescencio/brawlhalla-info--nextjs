import { useRouter } from "next/router";
import { IconChevronLeft } from "../icons/IconChevronLeft";
import { IconChevronRight } from "../icons/IconChevronRight";
import { NavigationContainer, PaginationButton } from "./styles";
import { Popover } from "../Popover";
import { paginationLink } from "src/helpers/pagination-link";

export const Navigation = () => {
  const route = useRouter();
  const { bracket, region, page } = route.query;

  return (
    <NavigationContainer>
      <PaginationButton
        onClick={() =>
          route.push(paginationLink(bracket, region, Number(page) - 1))
        }
        disabled={Number(page) === 1}
      >
        <IconChevronLeft />
      </PaginationButton>
      <PaginationButton
        onClick={() =>
          route.push(paginationLink(bracket, region, Number(page) + 1))
        }
        disabled={Number(page) === 1000}
      >
        <IconChevronRight />
      </PaginationButton>
      <Popover />
    </NavigationContainer>
  );
};
