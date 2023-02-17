import styled from "styled-components";

export const TableContainer = styled.div`
  margin-top: 128px;
  overflow-x: auto;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.tableBackground};
  border: 1px solid ${({ theme }) => theme.colors.buttonBorder};
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
  border-top: 1px solid #35383f;
`;

export const Tr = styled.tr`
  border-bottom: 1px solid #35383f;
  &:last-of-type {
    border-bottom: none;
  }
`;

export const Td = styled.td`
  padding: 18px 0;
  ${(props) => props.center && "text-align: center !important;"};
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
  padding: 18px 16px;
`;
