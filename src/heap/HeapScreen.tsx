import React from "react";
import { MinHeap } from "../heap";

const HeapScreen = () => {
  let [heap, setHeap] = React.useState<MinHeap>(new MinHeap());
  let [val, setVal] = React.useState<number>();

  const handleClickAdd = (v: number) => {};
  const handleClickDelete = () => {};

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
      hello
      <button
        disabled={val === undefined}
        onClick={(_) => handleClickAdd(val!)}
      >
        Add
      </button>
      <button disabled={val === undefined} onClick={(_) => handleClickDelete()}>
        Delete
      </button>
    </div>
  );
};

export default HeapScreen;
