import { useState } from "react";
import { Filters } from "../Filters";
import { IconChevronDown } from "../icons/IconChevronDown";
import { OpenButton, PopoverContainer, PopoverContent } from "./styles";

export const Popover = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen((val) => !val)
  }
  return (
    <PopoverContainer>
      <OpenButton onClick={() => handleOpen()}>
        filters <IconChevronDown />
      </OpenButton>
      <PopoverContent open={open}>
        <Filters closePopover={handleOpen}/>
      </PopoverContent>
    </PopoverContainer>
  );
};
