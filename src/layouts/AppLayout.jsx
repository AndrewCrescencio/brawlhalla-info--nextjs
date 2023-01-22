import { AppNavbar } from "@/components/app/Navbar";
import styled from "styled-components";

const AppMain = styled.main``;

export default function AppLayout({ children }) {
  return (
    <>
      <AppNavbar />
      <AppMain>{children}</AppMain>
    </>
  );
}
