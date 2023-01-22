import Link from "next/link";
import styled from "styled-components";
import { media } from "../../../styles/media-querie";

export const Navbar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 200;
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16);
`;

export const NavbarWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 6px 0;
  ${media.tablet`
    padding: 12px 0;
  `}
`;

export const NavbarLink = styled(Link)`
  ${media.tablet`
    font-size: 20px;
  `}
`;
