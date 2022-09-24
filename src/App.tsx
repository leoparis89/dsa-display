import React from "react";
import "./App.css";

import { TreeNodeDisplay } from "./tree/TreeNode";
import { make } from "./tree/binarySearchTree";

function App() {
  const root = make([8, 1, 3, 30, 20, 79, 2, 4, 11, 6, 9, 5, 7, 200, 150, 300]);
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
