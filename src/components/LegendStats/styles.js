import styled from "styled-components";
import { media } from "../../styles/media-querie";

const Container = styled.div`
  width: max-content;
  margin-top: 48px;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  ${media.laptop`
    max-width: 400px;
  `}
`;

const Box = styled.div`
  width: 250px;
  &:last-of-type {
    width: max-content;
  }
`;

const Column = styled.div`
  &:first-of-type {
    width: 70px;
  }
`;

const Row = styled.div`
  display: flex;
  margin-bottom: 8px;
  align-items: center;
`;

const Label = styled.p`
  margin-bottom: 16px;
`;

const StatsLabel = styled.p``;

export { Container, Box, Column, Row, Label, StatsLabel };
