import React from "react";
import logo from "./logo.svg";
import "./App.css";

import styled from "@emotion/styled";
import { TreeNodeDisplay } from "./TreeNode";
import { make } from "./binarySearchTree";

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
  const root = make([8, 1, 3, 30, 20, 79, 2, 4]);
  // const levels = levelOrderTraversalWithNulls(tree);
  return (
    <div>
      <TreeNodeDisplay node={root} />
      {/* {levels.map((l) => (
        <Level nodeValues={l} />
      ))} */}
    </div>
  );
}

export default App;
