import type { TreeNode } from "../types/treeNode";
import {
  getBalanceFactor,
  leftRotate,
  rightRotate,
  updateHeight,
  getLeft,
  getRight,
  setChildren,
} from "./avlUtils";

export function insertNode(
  root: TreeNode | null,
  value: number,
  depth: number = 0
): TreeNode {

  if (!root) {
    const newNode = { _id: crypto.randomUUID(), name: String(value), height: 1 };
    return newNode;
  }

  const newNode: TreeNode = { ...root, children: root.children ? [...root.children] : undefined };
  const rootValue = Number(root.name);
  if (value < rootValue) {
    const newLeft = insertNode(getLeft(root), value, depth + 1);
    setChildren(newNode, newLeft, getRight(root));
  } else if (value > rootValue) {
    const newRight = insertNode(getRight(root), value, depth + 1);
    setChildren(newNode, getLeft(root), newRight);
  } else {
    return root;
  }

  updateHeight(newNode);
  const balance = getBalanceFactor(newNode);
  const left = getLeft(newNode);
  const right = getRight(newNode);

  if (balance > 1 && left && getBalanceFactor(left) >= 0) {
    return rightRotate(newNode);
  }

  if (balance > 1 && left && getBalanceFactor(left) < 0) {
    setChildren(newNode, leftRotate(left), right);
    return rightRotate(newNode);
  }

  if (balance < -1 && right && getBalanceFactor(right) <= 0) {
    const result = leftRotate(newNode);
    return result;
  }

  if (balance < -1 && right && getBalanceFactor(right) > 0) {
    setChildren(newNode, left, rightRotate(right));
    return leftRotate(newNode);
  }

  return newNode;
}