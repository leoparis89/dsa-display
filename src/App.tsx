import React from "react";
import logo from "./logo.svg";
import "./App.css";

import styled from "@emotion/styled";
import { TreeNodeDisplay } from "./TreeNode";
import { make } from "./binarySearchTree";

const Box = styled.div({
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
});

function App() {
  const root = make([8, 1, 3, 30, 20, 79, 2, 4, 11, 6, 9, 5, 7]);
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
