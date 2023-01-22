import { LegendCard } from "../LegendCard";
import { Title } from "../typography";
import { Grid } from "./styles";

export const LegendsGrid = ({ legendsData }) => {
  return (
    <>
      <Title>Meet the legends</Title>
      <Grid>
        {legendsData.map((legend) => {
          return <LegendCard key={legend.legend_id} {...legend} />;
        })}
      </Grid>
    </>
  );
};
