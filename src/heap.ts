export class MinHeap {
  public length: number = 0;
  private data: number[] = [];

  insert(value: number): void {
    this.length++;
    this.data.push(value);
    this.heapifyUp(this.length - 1);
  }

  delete(): number {
    if (this.length === 0) {
      return -1;
    }

    const result = this.data[0];
    this.data[0] = this.data[this.length - 1];
    this.data.pop();
    console.log(this.data);
    this.length--;
    this.heapifyDown(0);
    return result;
  }

  private heapifyDown(idx: number): void {
    const leftIdx = this.leftChild(idx);
    const rightIdx = this.rightChild(idx);

    if (idx >= this.length && leftIdx >= this.length) {
      return;
    }

    const leftVal = this.data[leftIdx];
    const rightVal = this.data[rightIdx];
    const v = this.data[idx];

    let minIdx = idx;

    if (leftVal !== undefined && leftVal < this.data[minIdx]) {
      minIdx = leftIdx;
    }

    if (rightVal !== undefined && rightVal < this.data[minIdx]) {
      minIdx = rightIdx;
    }

    console.log(minIdx);
    if (minIdx !== idx) {
      const tmp = this.data[minIdx];
      this.data[minIdx] = v;
      this.data[idx] = tmp;
      this.heapifyDown(minIdx);
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
