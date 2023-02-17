import { Navigation } from "@/components/Navigation";
import { Table } from "@/components/Table";
import { Title } from "@/components/typography";
import { Section } from "@/components/UI/Section";
import { NextSeo } from "next-seo";

const RankingPage = ({ data }) => {
  return (
    <>
      <NextSeo title="Rankings" />
      <Section>
        <Title center>Rankings</Title>
        <Navigation/>
        <Table playersInfo={data} />
      </Section>
    </>
  );
};

export default RankingPage;

export async function getStaticPaths() {
  return {
    paths: ["/rankings/1v1/all/1", "/rankings/1v1/brz/1"],
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const bracket = params.bracket;
  const region = params.region;
  const page = params.page;
  const API_URL = process.env.API_URL;
  const API_KEY = process.env.API_KEY;
  const url = `${API_URL}/rankings/${bracket}/${region}/${page}?api_key=${API_KEY}`;
  const res = await fetch(url);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
