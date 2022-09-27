import React from "react";
import { MinHeap } from "../heap";
import { TreeNode } from "../tree/binarySearchTree";
import { TreeNodeWithEdges } from "../tree/TreeNode";

const heapToTree2 = (h: MinHeap) => {
  const heapArr = h.toArray();
  if (!heapArr.length) {
    return null;
  }

  const root = new TreeNode(heapArr[0]);

  const work = (i: number, existing: TreeNode) => {
    if (heapArr[i] === undefined) {
      return;
    }

    const leftV = heapArr[2 * i + 1];
    if (leftV !== undefined) {
      const n = new TreeNode(leftV);
      existing.left = n;
      work(2 * i + 1, n);
    }

    const rightV = heapArr[2 * i + 2];
    if (rightV !== undefined) {
      const n = new TreeNode(rightV);
      existing.right = n;
      work(2 * i + 2, n);
    }
  };

  work(0, root);
  return root;
};

const HeapScreen = () => {
  let [heap, setHeap] = React.useState<MinHeap>(new MinHeap());
  let [val, setVal] = React.useState<number>();
  console.log(heapToTree2(heap));

  const handleClickInsert = (v: number) => {
    heap.insert(v);
    const clone = Object.assign(
      Object.create(Object.getPrototypeOf(heap)),
      heap
    );

    setVal(undefined);
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
      <button onClick={(_) => handleClickDelete()}>Delete</button>
      <h1>{JSON.stringify(heap)}</h1>

      <TreeNodeWithEdges node={heapToTree2(heap)} />
    </div>
  );
};

export default HeapScreen;
