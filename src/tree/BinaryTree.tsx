import React from "react";
import { add, TreeNode } from "./binarySearchTree";
import { TreeNodeWithEdges } from "./TreeNode";

export const BinaryTree = () => {
  let [tree, setTree] = React.useState<TreeNode | null>(null);
  let [val, setVal] = React.useState<number>();

  const handleClickAdd = (val: number) => {
    if (!tree) {
      setTree(new TreeNode(val));
    } else {
      add(val, tree);
      setTree({ ...tree });
    }
  };

  return (
    <div>
      <input
        value={val || ""}
        onChange={(e) => {
          const val = Number(e.target.value);
          setVal(val);
        }}
        type="number"
        aria-label="value"
        placeholder="value"
      />
      <button
        disabled={val === undefined}
        onClick={(_) => handleClickAdd(val!)}
      >
        Add
      </button>
      <button onClick={(_) => setTree(null)}>Reset</button>
      <TreeNodeWithEdges node={tree} />
    </div>
  );
};
