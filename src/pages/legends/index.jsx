import { Section } from "@/components/UI/Section";
import { NextSeo } from "next-seo";
import { LegendsGrid } from "../../components/LegendsGrid";

const PageLegends = ({ data }) => {
  return (
    <>
      <NextSeo title="Legends" />
      <Section>
        <LegendsGrid legendsData={data} />
      </Section>
    </>
  );
};

export default PageLegends;

export async function getStaticProps(context) {
  const API_URL = process.env.API_URL;
  const API_KEY = process.env.API_KEY;
  const url = `${API_URL}/legend/all/?api_key=${API_KEY}`;
  const res = await fetch(url);
  const data = await res.json();
  const dataFormated = data.map((legend) => {
    return {
      bio_name: legend.bio_name,
      legend_id: legend.legend_id,
      legend_image:
        "/images/legends/" + legend.legend_name_key.replace(" ", "-") + ".png",
    };
  });
  return {
    props: {
      data: dataFormated,
    },
  };
}
