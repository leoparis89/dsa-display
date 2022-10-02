import styled from "@emotion/styled";
import React from "react";

export const Cell = ({ size = 16, value = 0, onHover = () => {} }) => {
  const color = value === 1 ? "brown" : "lightgreen";
  const CellBase = styled.div({
    width: size,
    height: size,
    background: color,
    margin: 4,
    borderRadius: "10%",
    boxShadow: `3px 3px 10px ${color}`,
  });
  return <CellBase onMouseOver={(_) => onHover()} />;
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

enum Mode {
  Start,
  Finish,
  Wall,
  Delete,
}

const Wrapper = styled.div({ justifyContent: "center", display: "flex" });

const Box = styled.div<{ selected?: boolean }>((props) => ({
  border: "3px dashed red;",
  background: props.selected ? "pink" : "transparent",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: 80,
  height: 40,
  margin: 8,
  cursor: props.selected ? "initial" : "pointer",
}));

const ModeSelector: React.FC<{ onChange: (m: Mode) => void; mode: Mode }> = ({
  onChange,
  mode,
}) => {
  return (
    <Wrapper>
      <Box selected={mode === Mode.Start} onClick={(_) => onChange(Mode.Start)}>
        Start
      </Box>
      <Box
        selected={mode === Mode.Finish}
        onClick={(_) => onChange(Mode.Finish)}
      >
        Finish
      </Box>
      <Box
        selected={mode === Mode.Delete}
        onClick={(_) => onChange(Mode.Delete)}
      >
        Wall
      </Box>
    </Wrapper>
  );
};

export const PathfindingScreen = () => {
  const [mode, setMode] = React.useState<Mode>(Mode.Start);
  const [hovered, setHovered] = React.useState<string>();

  return (
    <div>
      {hovered}
      <ModeSelector onChange={setMode} mode={mode} />
      {grid1.map((row, rowI) => (
        <Row>
          {row.map((value, colI) => (
            <Cell
              size={32}
              onHover={() => setHovered(`${rowI}-${colI}`)}
              value={value}
            />
          ))}
        </Row>
      ))}
    </div>
  );
};
