import styled from "styled-components";
import { media } from "../../styles/media-querie";

const Grid = styled.section`
  margin-top: 48px;
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  column-gap: 16px;
  row-gap: 24px;
  ${media.tablet`
    margin-top: 62px;
    column-gap: 32px;
    row-gap: 40px;
    grid-template-columns: repeat(auto-fill, minmax(144px, 1fr));
  `}
  ${media.desktop`
    column-gap: 40px;
    row-gap: 48px;
  `}
`;

export { Grid };
