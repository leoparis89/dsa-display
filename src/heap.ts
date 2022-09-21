export class MinHeap {
  public length: number = 0;
  private data: number[] = [];

  insert(value: number): void {}

  delete(): number {}

  private heapifyDown(idx: number): void {
    const leftIdx = this.leftChild(idx);
    const rightIdx = this.rightChild(idx);
    if (idx >= this.length || leftIdx >= this.length) {
      return;
    }

    const leftVal = this.data[leftIdx];
    const rightVal = this.data[leftIdx];
    const v = this.data[idx];

    if (leftVal > rightVal && leftVal > v) {
      this.data[leftIdx] = v;
      this.data[idx] = leftVal;
      this.heapifyDown(leftIdx);
    } else if (rightVal > leftVal && rightVal > v) {
      this.data[rightIdx] = v;
      this.data[idx] = rightVal;
      this.heapifyDown(rightIdx);
    }
  }

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
