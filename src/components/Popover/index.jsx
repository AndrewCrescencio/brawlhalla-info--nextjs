import { useState } from "react";
import { Filters } from "../Filters";
import { IconChevronDown } from "../icons/IconChevronDown";
import { OpenButton, PopoverContainer, PopoverContent } from "./styles";

export const Popover = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <PopoverContainer>
        <OpenButton onClick={() => setOpen((val) => !val)}>
          Filters <IconChevronDown />
        </OpenButton>
        <PopoverContent open={open}>
          <Filters />
        </PopoverContent>
      </PopoverContainer>
    </>
  );
};
