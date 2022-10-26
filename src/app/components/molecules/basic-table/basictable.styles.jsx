import styled from "styled-components";

export const TableDiv = styled.table`
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  min-width: 70%;
  margin: 5rem 15%;
  align-items: center;
  animation: scrollTable 50s linear .1s;
  position: absolute;
  top: 10%;
  

  &:after {
    border-collapse: collapse;
    min-width: 70%;
    margin: 5rem 15%;
    align-items: center;
    transform: 0;
    transform-origin: 0;
  }

  @keyframes scrollTable {
    0% {
      transform: perspective(300px) rotateX(25deg);
      transform-origin: 50% 100%;
      top: 100%;
    }
    100% {
      top: -50%;
    }
  }
`;

export const TableHead = styled.thead``;

export const TableBody = styled.tbody``;

export const TableHeader = styled.th`
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
  background-color: gold;
  color: #000;
  border: 1px solid #777;
  padding: 8px;
`;

export const TableRow = styled.tr`
  text-align: center;
  &:hover {
    background-color: #ddd;
    color: #000;
  }

  &:nth-child(even) {
    background-color: gold;
    color: #000;
  }
`;

export const TableData = styled.td`
  border: 1px solid #777;
  padding: 8px;
`;
