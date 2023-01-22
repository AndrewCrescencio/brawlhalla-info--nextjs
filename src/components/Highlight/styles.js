import styled from "styled-components";

const Banner = styled.section`
  position: relative;
`;

const ImageContainer = styled.figure`
  position: relative;
  width: 100%;
  height: calc(100vh - 60px);
  background-color: oldlace;
  &::before {
    content: "";
    display: block;
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.64);
    z-index: 1;
  }
  .hero-image {
    width: 100%;
    height: auto;
  }
`;

const WrapperText = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  color: white;
`;

export { Banner, ImageContainer, WrapperText };
