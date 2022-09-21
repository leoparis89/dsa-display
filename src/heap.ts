export class MinHeap {
  public length: number = 0;
  private data: number[] = [];

  insert(value: number): void {}
  delete(): number {}

  private parent(idx: number): number {
    return Math.floor((idx - 1) / 2);
  }

  private leftChild(idx: number) {
    return 2 * idx + 1;
  }

  private rightChild(idx: number) {
    return 2 * idx + 2;
  }
}
