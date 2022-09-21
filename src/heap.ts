export class MinHeap {
  public length: number = 0;
  private data: number[] = [];

  insert(value: number): void {}
  delete(): number {}

  private heapifyUp(idx: number) {
    if (idx === 0) {
      return;
    }

    const p = this.parent(idx);
    const parentVal = this.data[p];
    const v = this.data[idx];

    if (parentVal > v) {
      this.data[p] = v;
      this.data[idx] = parentVal;
      this.heapifyUp(p);
    }
  }

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
