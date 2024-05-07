import { useContext, createContext, useState } from "react";

const PreviewContext = createContext();

export const PreviewProvider = ({ children }) => {
  const [currentData, setCurrentData] = useState({
    name: "CEO",
    children: [
      {
        name: "Manager",
        attributes: {
          department: "Production",
        },
        children: [
          {
            name: "Foreman",
            attributes: {
              department: "Fabrication",
            },
            children: [
              {
                name: "Worker",
              },
            ],
          },
          {
            name: "Foreman",
            attributes: {
              department: "Assembly",
            },
            children: [
              {
                name: "Worker",
              },
            ],
          },
        ],
      },
    ],
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const transformJsonToD3Tree = (json, nodeId, optionName) => {
    const node = json[nodeId];
    const children = node.options.map((option) =>
      transformJsonToD3Tree(json, option.id, option.option)
    );
    console.log(node);
    return {
      id: node.id,
      name: node.message,
      parent: node.parent,
      depth: node.depth,
      attributes: {
        option: optionName,
      },
      children,
    };
  };
  const setPreviewData = (data) => {
    let nodeId = null;
    for (const [_, value] of Object.entries(data)) {
      if (value.parent === null) {
        nodeId = value.id;
      }
    }
    console.log(transformJsonToD3Tree(data, nodeId));
    setCurrentData(transformJsonToD3Tree(data, nodeId));
  };
  const handleShowPreview = () => {
    setIsModalOpen(true);
  };
  const handleClosePreview = () => {
    setIsModalOpen(false);
  };
  return (
    <PreviewContext.Provider
      value={{
        showPreview: handleShowPreview,
        closePreview: handleClosePreview,
        setPreviewData,
        currentPreviewData: currentData,
        isPreviewOpen: isModalOpen,
      }}
    >
      {children}
    </PreviewContext.Provider>
  );
};

export const usePreviewContext = () => {
  return useContext(PreviewContext);
};
