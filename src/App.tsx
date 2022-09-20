import React from "react";
import logo from "./logo.svg";
import "./App.css";

import styled from "@emotion/styled";

const Button = styled.button`
  padding: 32px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
`;

const Box = styled.div({
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
});

const Level: React.FC<{ nodeValues: Array<number | null> }> = ({
  nodeValues,
}) => {
  return (
    <Box>
      {nodeValues.map((v) => (
        <Box>{v}</Box>
      ))}
    </Box>
  );
};

function App() {
  return (
    <div className="App">
      <Level nodeValues={[1]} />
      <Level nodeValues={[2, 4]} />
      <Level nodeValues={[null, 4, 3, null]} />
    </div>
  );
}

export default App;
