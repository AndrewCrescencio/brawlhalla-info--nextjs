import Link from "next/link";
import { IconChevronRight } from "../icons/IconChevronRight";
import { LegendCard } from "../LegendCard";
import { Heading, Title } from "../typography";
import { Section } from "../UI/Section";
import { legendsMock } from "./mock";
import { Links } from "./styles";

export const SectionLegends = () => {
  return (
    <Section>
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
    </Section>
  );
};
