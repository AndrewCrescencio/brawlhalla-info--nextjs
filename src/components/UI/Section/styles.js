import styled from "styled-components";
import { media } from "src/styles/media-querie";

export const Section = styled.section`
  padding: 64px 0;
  ${media.tablet`padding: 128px 0;`}/* ${(props) =>
    props.textLeft && "text-align: start !important;"};
  ${(props) => props.textCenter && "text-align: center !important;"};
  ${(props) => props.textRight && "text-align: right !important;"}; ; */
`;
