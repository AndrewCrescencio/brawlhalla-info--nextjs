import {
  Table as StyledTable,
  TableContainer,
  TBody,
  THead,
  Tr,
  Td,
  Th,
} from "./styles";

export const Table = ({ playersInfo }) => {
  return (
    <TableContainer>
      <StyledTable>
        <THead>
          <Tr>
            <Th>Rank</Th>
            <Th>Region</Th>
            <Th>Name</Th>
            <Th>Tier</Th>
            <Th>Win-Loss</Th>
            <Th>Season Rating</Th>
            <Th>Peak Rating</Th>
          </Tr>
        </THead>
        <TBody>
          {playersInfo.map((player) => {
            return (
              <Tr key={player.rank}>
                <Td center>{player.rank}</Td>
                <Td center>{player.region}</Td>
                <Td>{player.name}</Td>
                <Td center>{player.tier}</Td>
                <Td center>
                  {player.wins} - {player.games - player.wins}
                </Td>
                <Td center>{player.rating}</Td>
                <Td center>{player.peak_rating}</Td>
              </Tr>
            );
          })}
        </TBody>
      </StyledTable>
    </TableContainer>
  );
};
