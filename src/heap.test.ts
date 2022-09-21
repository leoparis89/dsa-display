import { MinHeap } from "./heap";

describe("heap", () => {
  test("insert and delete", () => {
    const heap = new MinHeap();
    heap.insert(30);
    expect(heap).toEqual({ data: [30], length: 1 });
    heap.insert(5);
    heap.insert(4);
    expect(heap).toEqual({ data: [4, 30, 5], length: 3 });
    heap.insert(2);
    heap.insert(40);
    heap.insert(28);
    heap.insert(7);
    heap.insert(1);
    expect(heap).toEqual({ data: [1, 2, 5, 4, 40, 28, 7, 30], length: 8 });
  });
});
