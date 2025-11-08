export type TreeNode = {
  _id: string;
  name: string;
  children?: TreeNode[]; 
};