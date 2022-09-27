import styled from "@emotion/styled";
import React from "react";

export const Cell = ({ size = 16 }) => {
  const CellBase = styled.div({
    width: size,
    height: size,
    background: "red",
    margin: 4,
    borderRadius: "10%",
    boxShadow: `3px 3px 10px red`,
  });
  return <CellBase />;
};

const Row = styled.div({
  display: "flex",
  justifyContent: "center",
});

export const GridDisplay: React.FC<{ grid: number[][] }> = ({ grid }) => {
  return <div></div>;
};

const grid1 = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0],
  [0, 1, 0, 0, 0],
  [0, 0, 0, 1, 1],
  [0, 0, 0, 0, 0],
];
export const PathfindingScreen = () => {
  return (
    <div>
      hello
      {grid1.map((row) => (
        <Row>
          {row.map((el) => (
            <Cell size={32} />
          ))}
        </Row>
      ))}
    </div>
  );
};
