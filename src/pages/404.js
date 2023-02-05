import { NextSeo } from "next-seo";
import Link from "next/link";
import Image from "next/image";
import { Title } from "../components/typography";
import styled from "styled-components";
import { Section } from "@/components/UI/Section";

const HomeLink = styled(Link)`
  margin: 24px auto;
  display: block;
  cursor: pointer;
`;

export default function Custom404() {
  return (
    <>
      <NextSeo title="404 error" description="Info about Brawlhalla legends" />
      <Section>
        <Title>404 - Page Not Found</Title>
        <HomeLink href="/">Back to home</HomeLink>
        <Image
          src="/images/emojis/emoji_think.webp"
          alt="Brawlhalla think emoji"
          width={130}
          height={135}
        />
      </Section>
    </>
  );
}
