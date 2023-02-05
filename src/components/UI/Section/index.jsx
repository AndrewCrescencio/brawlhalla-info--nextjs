import { Container } from "../Container";
import { Section as StyledSection } from "./styles";
export const Section = ({ children }) => {
  return (
    <Container>
      <StyledSection>{children}</StyledSection>
    </Container>
  );
};
