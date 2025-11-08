import type { TreeNode } from "../types/treeNode";

export function insertNode(root: TreeNode | null, value: number): TreeNode {
  if (!root) {
    return {
      _id: crypto.randomUUID(),
      name: String(value),
    };
  }

  const rootValue = Number(root.name);
  const newNode: TreeNode = { ...root };

  if (value < rootValue) {
    const newLeft = insertNode(root.children?.[0] ?? null, value);
    newNode.children = [newLeft, root.children?.[1]].filter(
      (child): child is TreeNode => child !== undefined
    );
  } else if (value > rootValue) {
    const newRight = insertNode(root.children?.[1] ?? null, value);
    newNode.children = [root.children?.[0], newRight].filter(
      (child): child is TreeNode => child !== undefined
    );
  }

  if (newNode.children?.length === 0) {
    newNode.children = undefined;
  }

  return newNode;
}