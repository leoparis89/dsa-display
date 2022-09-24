import shortid from "shortid";
export class TreeNode {
  value: number;
  left: TreeNode | null = null;
  right: TreeNode | null = null;
  _id: string;

  constructor(value: number) {
    this.value = value;
    this._id = shortid();
  }
}

type addType = (value: number, node: TreeNode) => TreeNode;
// typescript not undestanding the return type
// so we have to force it (awsome)
export const add = ((value, node) => {
  if (value < node.value) {
    if (!node.left) {
      node.left = new TreeNode(value);
      return node.left;
    } else {
      return add(value, node.left);
    }
  }

  if (value >= node.value) {
    if (!node.right) {
      node.right = new TreeNode(value);
      return node.right;
    } else {
      return add(value, node.right);
    }
  }
}) as addType;

export const make = (values: number[]) => {
  const [head, ...rest] = values;
  const root = new TreeNode(head);
  rest.forEach((v) => add(v, root));
  return root;
};

export const levelOrderTraversal = (root: TreeNode | null) => {
  const levels: number[][] = [];

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const work = (n: TreeNode | null, level = 0) => {
    if (!n) return;

    const currentLevel = levels[level];
    if (!currentLevel) {
      levels.push([n.value]);
    } else {
      currentLevel.push(n.value);
    }

    work(n.left, level + 1);
    work(n.right, level + 1);
  };

  work(root);
  return levels;
};
