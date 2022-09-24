import React from "react";
import { MinHeap } from "../heap";

const HeapScreen = () => {
  let [heap, setHeap] = React.useState<MinHeap>(new MinHeap());
  let [val, setVal] = React.useState<number>();

  const handleClickInsert = (v: number) => {
    heap.insert(v);
    const clone = Object.assign(
      Object.create(Object.getPrototypeOf(heap)),
      heap
    );

    setHeap(clone);
  };

  const handleClickDelete = () => {
    heap.delete();

    const clone = Object.assign(
      Object.create(Object.getPrototypeOf(heap)),
      heap
    );

    setHeap(clone);
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
        onClick={(_) => handleClickInsert(val!)}
      >
        Insert
      </button>
      <button disabled={val === undefined} onClick={(_) => handleClickDelete()}>
        Delete
      </button>
      <h1>{JSON.stringify(heap)}</h1>
    </div>
  );
};

export default HeapScreen;
