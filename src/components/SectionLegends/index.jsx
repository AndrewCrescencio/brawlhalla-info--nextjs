import Link from "next/link";
import { Container, Section } from "../Containers";
import { IconChevronRight } from "../icons/IconChevronRight";
import { LegendCard } from "../LegendCard";
import { Heading, Title } from "../typography";
import { Links } from "./styles";
import { legendsMock } from "./mock";

export const SectionLegends = () => {
  return (
    <Section>
      <Container>
        <Title>Information about the legends</Title>
        <Heading>
          learn more about the legends&apos; lore, their stats, and the weapons
          they use.
        </Heading>
        <Links>
          {legendsMock.map((legend) => {
            return (
              <LegendCard
                bio_name={legend.bio_name}
                legend_id={legend.legend_id}
                legend_image={legend.legend_image}
                key={legend.bio_name}
              />
            );
          })}
        </Links>
        <Link href="/legends">
          See all legends <IconChevronRight />
        </Link>
      </Container>
    </Section>
  );
};
