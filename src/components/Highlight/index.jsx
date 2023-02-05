import Image from "next/image";
import { Container } from "../UI/Container";
import { Heading, Title } from "../typography";
import { Banner, ImageContainer, Wrapper, WrapperText } from "./styles";

export const Highlight = () => {
  return (
    <Banner>
      <ImageContainer>
        <Image
          className="hero-image"
          src="/images/wallpaper.webp"
          alt="hero banner"
          fill
          placeholder="empty"
        />
      </ImageContainer>
      <WrapperText>
        <Container>
          <Title>Brawlhalla Info</Title>
          <Heading>information about legends and leaderboards</Heading>
        </Container>
      </WrapperText>
    </Banner>
  );
};
