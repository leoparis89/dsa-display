import React from "react";

export const BinaryTree = () => {
  let [tree, setTree] = React.useState(null);
  let [val, setVal] = React.useState<number>();

  return (
    <div>
      <input
        value={val || ""}
        onChange={(e) => {
          const val = Number(e.target.value);
          setVal(val);
          console.log(val);
        }}
        type="number"
        aria-label="value"
        placeholder="value"
      />
      <button>Add</button>
      <button>Reset</button>
      hello
    </div>
  );
};
