import { Container, BarEmpty, CellEmpty, CellFull, BarFull } from "./styles";

export const StatsBar = ({ statsValue }) => {
  return (
    <Container>
      <BarEmpty>
        {new Array(10).fill(0).map((cell, i) => {
          return <CellEmpty key={i} />;
        })}
      </BarEmpty>
      <BarFull>
        {new Array(statsValue).fill(0).map((cell, i) => {
          return <CellFull key={i} />;
        })}
      </BarFull>
    </Container>
  );
};
