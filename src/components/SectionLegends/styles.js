import styled from "styled-components";
import { media } from "../../styles/media-querie";

const Links = styled.div`
  margin-top: 88px;
  margin-bottom: 24px;
  display: flex;
  gap: 16px;
  align-items: flex-end;
  > a {
    max-width: 100px;
    ${media.tablet`
      max-width: 180px
    `}
  }
  & + a {
    font-size: 20px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    line-height: 1;
    transition: all 200ms ease-in;
    &:hover {
      transform: scale(1.05);
    }
  }
`;

export { Links };
