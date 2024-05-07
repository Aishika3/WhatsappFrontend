import React, { useEffect, useRef, useState } from "react";
import { Dialog } from "@headlessui/react";
import Tree from "react-d3-tree";
import { CaretRight } from "phosphor-react";

const renderForeignObjectNode = ({ nodeDatum, toggleNode }) => (
  <g>
    {/* <circle r={25}></circle> */}
    {/* `foreignObject` requires width & height to be explicitly set. */}
    <foreignObject
      width={`${Math.max(
        10,
        nodeDatum.name.length + 5,
        (nodeDatum?.attributes?.option?.length || 0) + 8
      )}ch`}
      height="20ch"
    >
      <div className="bg-blue-100 overflow-hidden rounded-md flex flex-col justify-center items-center">
        <div className="flex flex-col p-1.5 overflow-x-auto max-w-full">
          <h3 className="text-sm">
            <span className="font-semibold">Message: </span>
            {nodeDatum.name || "Start"}
          </h3>
          {nodeDatum.attributes.option && (
            <h4 className="text-sm">
              {" "}
              <span className="font-semibold text-sm">Option: </span>{" "}
              {nodeDatum.attributes.option}
            </h4>
          )}
        </div>
        {nodeDatum?.children?.length > 0 && (
          <button
            className="flex gap-2 py-1.5 text-sm bg-blue-500 text-white self-stretch justify-center"
            onClick={toggleNode}
          >
            {nodeDatum.__rd3t.collapsed ? "Expand" : "Collapse"}
            <CaretRight
              size={22}
              weight="fill"
              className={
                nodeDatum.__rd3t.collapsed ? "text-black" : "text-white"
              }
            />
          </button>
        )}
      </div>
    </foreignObject>
  </g>
);

export const PreviewModal = ({ onClose = () => {}, data = {} }) => {
  const [yPos, setYPos] = useState(0);
  const myTreeConfig = {
    nodeSize: {
      x: 350, // Adjust the x-axis distance
      y: 100, // Adjust the y-axis distance
    },
    separation: {
      siblings: 2, // Adjust the spacing between sibling nodes
      nonSiblings: 2, // Adjust the spacing between non-sibling nodes
    },
  };
  const containerRef = useRef(null);
  const treeRef = useRef(null);
  useEffect(() => {
    setYPos((containerRef.current?.offsetHeight || 0) / 2);
  }, []);
  return (
    <Dialog
      open={true}
      onClose={() => {}}
      className="flex justify-center items-center absolute top-0 left-0 w-full h-full z-10 bg-[#0000004a]"
    >
      <Dialog.Panel
        ref={containerRef}
        className="relative bg-white w-[90%] h-[90%] flex justify-center items-center"
        as="div"
      >
        <div className="absolute top-5 left-1/2 transform bg-blue-400 text-white px-2 py-1 rounded-sm -translate-x-1/2">Scroll your mouse wheel to zoom in and out</div>
        <button
          onClick={onClose}
          className="absolute right-5 top-5 bg-blue-400 text-white px-2.5 rounded-sm py-1.5"
        >
          Close
        </button>
        <Tree
          ref={treeRef}
          translate={{ x: 10, y: yPos }}
          data={data}
          renderCustomNodeElement={(rd3tProps) =>
            renderForeignObjectNode({ ...rd3tProps })
          }
          separation={myTreeConfig.separation}
          nodeSize={myTreeConfig.nodeSize}
          pathFunc="step"
        />
      </Dialog.Panel>
    </Dialog>
  );
};
