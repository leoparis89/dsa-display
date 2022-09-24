import { levelOrderTraversal, make } from "./tree/binarySearchTree";

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

  test("levelOrderTraversal returns the right value", () => {
    const tree = make([3, 1, 8, 7, 9, 2]);
    const result = levelOrderTraversal(tree);
    expect(result).toEqual([[3], [1, 8], [2, 7, 9]]);
  });
});
