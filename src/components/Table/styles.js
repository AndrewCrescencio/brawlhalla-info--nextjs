import styled from "styled-components";

export const TableContainer = styled.div`
  overflow-x: auto;
  border-radius: 8px;
`;
export const Table = styled.table`
  border: none;
  border-collapse: collapse;
  margin: 0;
  padding: 0;
  table-layout: auto;
  margin: 0 auto;
  width: 100%;
`;

export const TBody = styled.tbody``;

export const THead = styled.thead`
  tr {
    background-color: ${({ theme }) =>
      theme.colors.tableThBackground} !important;
  }
`;

export const Tr = styled.tr`
  &:nth-child(odd) {
  }
  &:nth-child(even) {
    background-color: ${({ theme }) => theme.colors.tableRowBackground};
  }
`;

export const Td = styled.td`
  ${(props) => props.center && "text-align: center !important;"};
  padding: 12px 16px;
  min-width: 100px;
  &:nth-child(3) {
    min-width: 300px;
  }
  &:nth-child(6) {
    min-width: 138px;
  }
  &:last-of-type {
    min-width: 120px;
  }
`;

export const Th = styled.th`
  padding: 12px 16px;
`;
