import { NextSeo } from "next-seo";
import Image from "next/image";
import Link from "next/link";
import { Title } from "@/components/typography";
import styled from "styled-components";
import { Section } from "@/components/UI/Section";

const HomeLink = styled(Link)`
  margin: 24px auto;
  display: block;
  cursor: pointer;
`;

export default function Custom500() {
  return (
    <>
      <NextSeo title="500 error" description="Info about Brawlhalla legends" />
      <Section>
        <Title>500 - Server-side error occurred</Title>
        <HomeLink href="/">Back to home</HomeLink>
        <Image
          width={135}
          height={127}
          src="/images/emojis/emoji_rip.webp"
          alt="Brawlhalla rip emoji"
        />
      </Section>
    </>
  );
}
