import { NextSeo } from "next-seo";
import { LegendInfo } from "../../components/LegendInfo";

const PageLegend = ({ data, legend_image }) => {
  return (
    <>
      <NextSeo title={`Legend: ${data.bio_name}`} />
      <LegendInfo {...data} legend_image={legend_image} />
    </>
  );
};

export default PageLegend;

export async function getStaticPaths() {
  return {
    paths: ["/legends/3"],
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const legendId = params.id;
  const API_URL = process.env.API_URL;
  const API_KEY = process.env.API_KEY;
  const url = `${API_URL}/legend/${legendId}/?api_key=${API_KEY}`;
  const res = await fetch(url);
  const data = await res.json();

  return {
    props: {
      data,
      legend_image:
        "/images/legends-splash/" +
        data.legend_name_key.replace(" ", "-") +
        "-splash_otimizadas.webp",
    },
  };
}
