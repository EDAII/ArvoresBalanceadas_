import { useRef, useState, useEffect } from "react";
import Tree from "react-d3-tree-shejire/lib/Tree";
import type { TreeNode } from "../types/treeNode";

export default function Content({ treeData }: { treeData: TreeNode | null }) {
  const containerRef = useRef<any>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const container = containerRef.current?.parentElement;
    if (!container) return;

    const observer = new ResizeObserver(([entry]) => 
      setDimensions({ width: entry.contentRect.width, height: entry.contentRect.height })
    );
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!containerRef.current || !dimensions.width) return;
    const timer = setTimeout(() => containerRef.current.centerNode(), 100);
    return () => clearTimeout(timer);
  }, [treeData, dimensions]);

  if (!treeData) {
    return (
      <div className="flex h-[500px] items-center justify-center rounded-lg border border-gray-300 bg-gray-50">
        <p className="text-lg text-gray-500">Não há nós criados.</p>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="h-[500px] w-full overflow-hidden rounded-lg border border-gray-300 bg-gray-50">
      <Tree
        data={treeData}
        orientation="vertical"
        zoom={0.9}
        translate={{ x: dimensions.width ? dimensions.width / 2 - 80 : 320, y: dimensions.height ? dimensions.height / 3 : 180 }}
        zoomable
        collapsible={false}
        pathFunc="straight"
        separation={{ siblings: 1, nonSiblings: 1.5 }}
        scaleExtent={{ min: 0.5, max: 2 }}
        transitionDuration={300}
      />
    </div>
  );
}