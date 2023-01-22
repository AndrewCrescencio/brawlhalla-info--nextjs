import Image from "next/image";
import { StatsBar } from "../StatsBar";
import { Box, Column, Row, Label, StatsLabel, Container } from "./styles";

export const LegendStats = ({
  strength,
  dexterity,
  defense,
  speed,
  weapon_one,
  weapon_two,
}) => {
  return (
    <Container>
      <Box>
        <Label>Legend Stats</Label>
        <Row>
          <Column>
            <StatsLabel>strength</StatsLabel>
          </Column>
          <Column>
            <StatsBar statsValue={strength} />
          </Column>
        </Row>
        <Row>
          <Column>
            <StatsLabel>dexterity</StatsLabel>
          </Column>
          <Column>
            <StatsBar statsValue={dexterity} />
          </Column>
        </Row>
        <Row>
          <Column>
            <StatsLabel>defense</StatsLabel>
          </Column>
          <Column>
            <StatsBar statsValue={defense} />
          </Column>
        </Row>
        <Row>
          <Column>
            <StatsLabel>speed</StatsLabel>
          </Column>
          <Column>
            <StatsBar statsValue={speed} />
          </Column>
        </Row>
      </Box>
      <Box>
        <Label>Weapons</Label>
        <Row>
          <Column>
            <Image
              src={`/images/weapons/${weapon_one}_Icon.webp`}
              alt={weapon_one}
              width={54}
              height={54}
            />
          </Column>
          <Column>
            <StatsLabel>{weapon_one}</StatsLabel>
          </Column>
        </Row>
        <Row>
          <Column>
            <Image
              src={`/images/weapons/${weapon_two}_Icon.webp`}
              alt={weapon_two}
              width={54}
              height={54}
            />
          </Column>
          <Column>
            <StatsLabel>{weapon_two}</StatsLabel>
          </Column>
        </Row>
      </Box>
    </Container>
  );
};
