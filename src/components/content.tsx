import Tree from "react-d3-tree-shejire/lib/Tree";

type TreeNode = {
  _id: string;
  name: string;
  children?: TreeNode[];
};

export default function Content() {
 const treeData: TreeNode = {
    _id: "1",
    name: "10",
    children: [
      {
        _id: "2",
        name: "5",
        children: [
          { _id: "3", name: "3" },
          { _id: "4", name: "2" },
        ],
      },
      {
        _id: "5",
        name: "15",
        children: [
          { _id: "6", name: "13" },
          { _id: "7", name: "17" },
        ],
      },
    ],
  };

  return (
    <div className="flex flex-col items-center space-y-6">
  <div className="border border-gray-300 rounded-lg bg-gray-50 w-full h-[500px] flex items-center justify-center">
    {treeData ? (
      <Tree
        data={treeData}
        orientation="vertical"
        translate={{ x: 550, y: 100 }}
        pathFunc="straight"
        separation={{ siblings: 1, nonSiblings: 1.5 }}
      />
    ) : (
      <p className="text-gray-500 text-lg">Não há nós criados.</p>
    )}
  </div>
</div>
  );
}
