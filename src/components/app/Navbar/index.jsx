import { Container } from "@/components/UI/Container";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { Navbar, NavbarLink, NavbarWrapper } from "./styles";

const ToggleButton = dynamic(() =>
  import("../../ToggleButton").then((module) => module.ToggleButton)
);

export const AppNavbar = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Navbar>
      <Container>
        <NavbarWrapper>
          <NavbarLink href="/legends">Legends</NavbarLink>
          <NavbarLink href="/rankings">Rankings</NavbarLink>
          {mounted && <ToggleButton />}
        </NavbarWrapper>
      </Container>
    </Navbar>
  );
};
