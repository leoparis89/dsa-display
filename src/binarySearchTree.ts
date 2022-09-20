export class TreeNode {
  value: number;
  left: TreeNode | null = null;
  right: TreeNode | null = null;
  constructor(value: number) {
    this.value = value;
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

export const levelOrderTraversalWithNulls = (root: TreeNode | null) => {
  const levels: Array<number | null>[] = [];

  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  const work = (n: TreeNode | null, level = 0, nullParent = false) => {
    let currentLevel = levels[level];
    if (!currentLevel) {
      levels.push([n && n.value]);
    } else {
      currentLevel.push(n && n.value);
    }

    if (nullParent) {
      return;
    }

    if (!n) {
      work(null, level + 1, true);
      work(null, level + 1, true);
    } else {
      work(n.left, level + 1);
      work(n.right, level + 1);
    }
  };

  work(root);

  return levels.filter((level) => !level.every((v) => v === null));
};
