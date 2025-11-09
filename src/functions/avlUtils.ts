import type { TreeNode } from "../types/treeNode";

export const getLeft = (node: TreeNode): TreeNode | null => node.children?.[0] ?? null;
export const getRight = (node: TreeNode): TreeNode | null => node.children?.[1] ?? null;

export function getHeight(node: TreeNode | null): number {
  return node ? node.height : 0;
}

export function updateHeight(node: TreeNode): void {
  node.height = 1 + Math.max(getHeight(getLeft(node)), getHeight(getRight(node)));
}

export function getBalanceFactor(node: TreeNode | null): number {
  if (!node) return 0;
  return getHeight(getLeft(node)) - getHeight(getRight(node));
}

export function findMin(node: TreeNode): TreeNode {
  let current = node;
  while (getLeft(current)) current = getLeft(current)!;
  return current;
}

export function setChildren(node: TreeNode, left: TreeNode | null, right: TreeNode | null): void {
  node.children = [left, right];
}

export function rightRotate(y: TreeNode): TreeNode {
  const x = getLeft(y);
  if (!x) throw new Error("rightRotate: left child is null");
  const T2 = getRight(x);

  const newX: TreeNode = { ...x, children: x.children ? [...x.children] : undefined };
  const newY: TreeNode = { ...y, children: y.children ? [...y.children] : undefined };

  setChildren(newY, T2, getRight(newY));
  setChildren(newX, getLeft(newX), newY);

  updateHeight(newY);
  updateHeight(newX);

  return newX;
}

export function leftRotate(y: TreeNode): TreeNode {
  const x = getRight(y);
  if (!x) throw new Error("leftRotate: right child is null");
  const T2 = getLeft(x);

  const newX: TreeNode = { ...x, children: x.children ? [...x.children] : undefined };
  const newY: TreeNode = { ...y, children: y.children ? [...y.children] : undefined };

  setChildren(newY, getLeft(newY), T2);
  setChildren(newX, newY, getRight(newX));

  updateHeight(newY);
  updateHeight(newX);

  return newX;
}