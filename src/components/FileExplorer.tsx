"use client";

import { useState } from "react";

interface FileItem {
  id: string;
  name: string;
  type: "file" | "folder";
  children?: FileItem[];
  content?: string;
}

interface FileExplorerProps {
  files: FileItem[];
  onFileSelect: (file: FileItem) => void;
  selectedFileId: string | null;
}

const FileIcon = ({ type }: { type: "file" | "folder" }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    {type === "folder" ? (
      <path d="M2 2v12h12V6H8V2H2zm6 2v2h4v6H3V4h5z" />
    ) : (
      <path d="M3 2v12h10V5H9V2H3zm6 3v2h2v6H4V3h4v2h1z" />
    )}
  </svg>
);

const FileItemComponent = ({
  item,
  level = 0,
  onFileSelect,
  selectedFileId,
}: {
  item: FileItem;
  level?: number;
  onFileSelect: (file: FileItem) => void;
  selectedFileId: string | null;
}) => {
  const [isExpanded, setIsExpanded] = useState(level === 0);
  const isSelected = selectedFileId === item.id;

  const handleClick = () => {
    if (item.type === "folder") {
      setIsExpanded(!isExpanded);
    } else {
      onFileSelect(item);
    }
  };

  return (
    <div>
      <div
        className={`file-item ${item.type} ${isSelected ? "active" : ""}`}
        style={{ paddingLeft: `${level * 16 + 8}px` }}
        onClick={handleClick}
      >
        <FileIcon type={item.type} />
        <span>{item.name}</span>
        {item.type === "folder" && (
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="currentColor"
            style={{
              marginLeft: "auto",
              transform: isExpanded ? "rotate(90deg)" : "rotate(0deg)",
              transition: "transform 0.2s",
            }}
          >
            <path d="M4 2L8 6L4 10V2Z" />
          </svg>
        )}
      </div>
      {item.type === "folder" && isExpanded && item.children && (
        <div>
          {item.children.map((child) => (
            <FileItemComponent
              key={child.id}
              item={child}
              level={level + 1}
              onFileSelect={onFileSelect}
              selectedFileId={selectedFileId}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default function FileExplorer({
  files,
  onFileSelect,
  selectedFileId,
}: FileExplorerProps) {
  return (
    <div className="file-explorer">
      <div
        style={{
          padding: "8px 12px",
          fontSize: "11px",
          color: "var(--text-muted)",
          fontWeight: "600",
          textTransform: "uppercase",
        }}
      >
        EXPLORER
      </div>
      <div>
        {files.map((file) => (
          <FileItemComponent
            key={file.id}
            item={file}
            onFileSelect={onFileSelect}
            selectedFileId={selectedFileId}
          />
        ))}
      </div>
    </div>
  );
}
