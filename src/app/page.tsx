"use client";

import { useState } from "react";
import FileExplorer from "../components/FileExplorer";
import CodeEditor from "../components/CodeEditor";
import { portfolioData, FileItem } from "../data/portfolio";

export default function Home() {
  const [selectedFile, setSelectedFile] = useState<FileItem | null>(null);

  const handleFileSelect = (file: FileItem) => {
    if (file.type === "file") {
      setSelectedFile(file);
    }
  };

  const handleCloseFile = () => {
    setSelectedFile(null);
  };

  return (
    <div style={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      <FileExplorer
        files={portfolioData}
        onFileSelect={handleFileSelect}
        selectedFileId={selectedFile?.id || null}
      />
      <CodeEditor selectedFile={selectedFile} onCloseFile={handleCloseFile} />
    </div>
  );
}
