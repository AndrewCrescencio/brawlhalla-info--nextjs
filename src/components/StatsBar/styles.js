import styled from "styled-components";

const Container = styled.div`
  position: relative;
  height: 21px;
  display: flex;
  align-items: center;
  width: max-content;
  border-radius: 8px;
`;
const BarEmpty = styled.div`
  position: absolute;
  top: 1;
  left: 0;
  width: max-content;
  height: 17px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  background: linear-gradient(180deg, #0f0c34 50%, #272235 50%);
  border-radius: 8px;
  overflow: hidden;
`;

const BarFull = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: max-content;
  display: flex;
`;

const CellFull = styled.div`
  width: 18px;
  height: 21px;
  background: linear-gradient(180deg, #00e6f8 50%, #00bed0 50%);
  border: 1px solid #008e9d;
  &:first-of-type {
    border-radius: 8px 0 0 8px;
  }
  &:nth-child(10) {
    border-radius: 0 8px 8px 0;
  }
`;

const CellEmpty = styled.div`
  width: 16px;
  height: 17px;
  background: linear-gradient(180deg, #3c4857 50%, #343e45 50%);
  &:first-of-type {
    border-radius: 8px 0 0 8px;
  }
  &:last-of-type {
    border-radius: 0 8px 8px 0;
  }
`;

export { Container, BarEmpty, BarFull, CellEmpty, CellFull };
