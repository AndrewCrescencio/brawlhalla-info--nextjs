import styled from "styled-components";
import { media } from "../../styles/media-querie";

const Wrapper = styled.div`
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
`;

const ImageContainer = styled.div`
  width: 100%;
  max-width: 340px;
  height: 100vh;
  max-height: 500px;
  display: grid;
  place-content: center;
  > div {
    position: unset !important;
  }

  .splash-art {
    object-fit: contain;
    width: 100% !important;
    position: relative !important;
    z-index: 1;
    height: unset !important;
  }
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  ${media.laptop`
    justify-content: space-between;
  `}
  margin-bottom: 62px;
`;

export { Wrapper, ImageContainer, Header };
