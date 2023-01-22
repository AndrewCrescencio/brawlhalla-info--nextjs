import { NextSeo } from "next-seo";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { Container, Section } from "../components/Containers";
import { Title } from "../components/typography";

const HomeLink = styled(Link)`
  margin: 24px auto;
  display: block;
  cursor: pointer;
`;

export default function Custom404() {
  return (
    <>
      <NextSeo
        title="Brawlhalla info | 404 error"
        description="Info about Brawlhalla legends"
      />
      <Section>
        <Container textCenter>
          <Title>404 - Page Not Found</Title>
          <HomeLink href="/">Back to home</HomeLink>
          <Image
            src="/images/emojis/emoji_think.webp"
            alt="Brawlhalla think emoji"
            width={130}
            height={135}
          />
        </Container>
      </Section>
    </>
  );
}
