export type TreeNode = {
  _id: string;
  name: string;
  height: number;
  children?: (TreeNode | null)[];
};