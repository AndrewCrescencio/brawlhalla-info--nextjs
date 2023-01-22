import styled from "styled-components";
import Link from "next/link";

const Card = styled(Link)`
  display: block;
  text-align: center;
  width: 100%;
  transition: all 200ms ease-in-out;
  &:hover {
    transform: scale(1.03);
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;

  > div {
    position: unset !important;
  }

  .legend-image {
    object-fit: contain;
    width: 100% !important;
    position: relative !important;
    height: unset !important;
  }
`;

const LegendName = styled.p`
  margin-top: 8px;
`;

export { Card, LegendName, ImageContainer };
