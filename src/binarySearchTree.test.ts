import { make } from "./binarySearchTree";

describe("Binary search tree", () => {
  test("make returns a binary search tree", () => {
    expect(make([1, 2, 3, 4])).toEqual({
      left: null,
      right: {
        left: null,
        right: {
          left: null,
          right: { left: null, right: null, value: 4 },
          value: 3,
        },
        value: 2,
      },
      value: 1,
    });

    expect(make([4, 1, 2, 3])).toEqual({
      left: {
        left: null,
        right: {
          left: null,
          right: { left: null, right: null, value: 3 },
          value: 2,
        },
        value: 1,
      },
      right: null,
      value: 4,
    });
  });
});
