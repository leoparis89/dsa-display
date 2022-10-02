export class Vertex {
  id: number;
  neighbors: Vertex[] = [];

  constructor(id: number) {
    this.id = id;
  }
}

enum Cell {
  Wall,
  Empty,
  Start,
  Finish,
}
