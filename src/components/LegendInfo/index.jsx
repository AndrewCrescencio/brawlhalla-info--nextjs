import Image from "next/image";
import { Container, Section } from "../Containers";
import { LegendStats } from "../LegendStats";
import { BlockQuote, Heading, Text, Title } from "../typography";
import { Header, ImageContainer, Wrapper } from "./styles";

export const LegendInfo = ({
  bio_name,
  bio_aka,
  bio_quote,
  bio_text,
  weapon_one,
  weapon_two,
  strength,
  defense,
  dexterity,
  speed,
  legend_image,
}) => {
  return (
    <>
      <Container>
        <Section>
          <Wrapper>
            <Title>{bio_name}</Title>
            <Heading>{bio_aka}</Heading>
            <Header>
              <ImageContainer>
                <Image
                  src={legend_image}
                  fill
                  alt={`${bio_name} splash art`}
                  className="splash-art"
                />
              </ImageContainer>
              <LegendStats
                weapon_one={weapon_one}
                weapon_two={weapon_two}
                strength={Number(strength)}
                dexterity={Number(dexterity)}
                defense={Number(defense)}
                speed={Number(speed)}
              />
            </Header>
            <h3>Lore:</h3>
            <BlockQuote>{bio_quote}</BlockQuote>
            <Text>{bio_text}</Text>
          </Wrapper>
        </Section>
      </Container>
    </>
  );
};
