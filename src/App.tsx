import { useState } from "react";
import Content from "./components/content";
import Header from "./components/header";
import type { TreeNode } from "./types/treeNode";
import { insertNode } from "./functions/insertNode";
import { deleteNode } from "./functions/deleteNode";


function App() {
  const [treeData, setTreeData] = useState<TreeNode | null>(null);

  const handleInsert = (value: number) => {
    const newTree = insertNode(treeData, value);
    setTreeData(newTree);
  };

  const handleDelete = (value: number) => {
    const newTree = deleteNode(treeData, value);
    setTreeData(newTree);
  };

  const handleClear = () => {
    setTreeData(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-6xl w-full bg-white shadow-lg rounded-lg p-6 space-y-6">
        <Header
          handleInsert={handleInsert}
          handleDelete={handleDelete}
          handleClear={handleClear}
          searchValue={""}
          setSearchValue={() => {}}
          handleFind={() => {}}
          found={null}
          forceUpdate={() => {}}
          setMessage={() => {}}
        />
        <Content treeData={treeData} />
      </div>
    </div>
  );
}

export default App;