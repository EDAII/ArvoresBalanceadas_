import { useState, type SetStateAction } from "react";
import Content from "./components/content";
import Header from "./components/header";
import { insertNode } from "./functions/insertNode";
import { deleteNode } from "./functions/deleteNode";
import type { TreeNode } from "./types/treeNode";

function App() {
const [treeData, setTreeData] = useState<TreeNode | null>(null);
  return (
<div className="min-h-screen bg-gray-100 flex items-center justify-center">
  <div className="max-w-6xl w-full bg-white shadow-lg rounded-lg p-6 space-y-6">
        <Header
          handleInsert={(value) => {
            setTreeData((prev) => insertNode(prev, value));
          }}
          handleDelete={(value) => {
            setTreeData((prev) => deleteNode(prev, value));
          }}
          handleClear={() => setTreeData(null)}
          searchValue={""}
          setSearchValue={function (value: SetStateAction<string>): void {
            throw new Error("Function not implemented.");
          }}
          handleFind={function (): void {
            throw new Error("Function not implemented.");
          }}
          found={null}
          forceUpdate={function (): void {
            throw new Error("Function not implemented.");
          }}
          setMessage={function (value: SetStateAction<string>): void {
            throw new Error("Function not implemented.");
          }}
        />
        <Content treeData={treeData} />
      </div>
    </div>
  );
}

export default App;