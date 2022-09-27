import styled from "@emotion/styled";
import React from "react";

export const Cell = ({ size = 16, value = 0 }) => {
  const color = value === 1 ? "brown" : "lightgreen";
  const CellBase = styled.div({
    width: size,
    height: size,
    background: color,
    margin: 4,
    borderRadius: "10%",
    boxShadow: `3px 3px 10px ${color}`,
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
          {row.map((value) => (
            <Cell size={32} value={value} />
          ))}
        </Row>
      ))}
    </div>
  );
};
