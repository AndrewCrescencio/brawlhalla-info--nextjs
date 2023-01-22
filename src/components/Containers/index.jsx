import styled from "styled-components";
import { media } from "../../styles/media-querie";

export const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;
  ${media.phone`padding: 0 24px;`}
  ${media.tablet`padding: 0 48px;`}
  ${media.laptop`padding: 0 62px;`}
  ${media.desktop`padding: 0 96px;`}
  ${(props) => props.textLeft && "text-align: start !important;"};
  ${(props) => props.textCenter && "text-align: center !important;"};
  ${(props) => props.textRight && "text-align: right !important;"}; ;
`;

export const Section = styled.section`
  padding: 64px 0;
  ${media.tablet`padding: 120px 0;`}
`;
