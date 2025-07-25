"use client";

import { FileItem } from "@/types/intex";

interface CodeEditorProps {
  selectedFile: FileItem | null;
  onCloseFile?: () => void;
}

const SyntaxHighlighter = ({ content }: { content: string }) => {
  // Simple syntax highlighting for markdown-like content
  const highlightedContent = content
    .split("\n")
    .map((line) => {
      // Highlight headers
      if (line.startsWith("#")) {
        return `<span class="keyword">${line}</span>`;
      }
      // Highlight links
      if (line.includes("[") && line.includes("](") && line.includes(")")) {
        return line.replace(
          /\[([^\]]+)\]\(([^)]+)\)/g,
          '<span class="string">[$1]($2)</span>',
        );
      }
      // Highlight code blocks
      if (line.startsWith("```")) {
        return `<span class="comment">${line}</span>`;
      }
      // Highlight inline code
      if (line.includes("`")) {
        return line.replace(/`([^`]+)`/g, '<span class="function">`$1`</span>');
      }
      return line;
    })
    .join("\n");

  return (
    <pre style={{ margin: 0, whiteSpace: "pre-wrap" }}>
      <code dangerouslySetInnerHTML={{ __html: highlightedContent }} />
    </pre>
  );
};

export default function CodeEditor({
  selectedFile,
  onCloseFile,
}: CodeEditorProps) {
  if (!selectedFile) {
    return (
      <div className="editor">
        <div className="editor-header"></div>
        <div className="editor-content">
          <div
            style={{
              textAlign: "center",
              paddingTop: "100px",
              color: "var(--text-muted)",
            }}
          >
            <h2 style={{ marginBottom: "20px", color: "var(--foreground)" }}>
              👋 Welcome to VS Code Portfolio Template!
            </h2>
            <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
              This is a template for creating your own VS Code-style portfolio.
            </p>
            <p style={{ fontSize: "14px", marginTop: "20px" }}>
              Click on any file in the explorer to see example content and
              structure.
            </p>
            <div
              style={{
                marginTop: "30px",
                padding: "20px",
                background: "var(--sidebar-bg)",
                borderRadius: "8px",
                maxWidth: "500px",
                margin: "30px auto 0",
              }}
            >
              <h3 style={{ color: "var(--accent)", marginBottom: "15px" }}>
                🚀 Getting Started
              </h3>
              <ul style={{ textAlign: "left", lineHeight: "1.8" }}>
                <li>
                  Replace <code>[YOUR NAME]</code> with your actual name
                </li>
                <li>Update the example projects with your real work</li>
                <li>Add information about your education and experience</li>
                <li>Add your social media links</li>
                <li>Customize it as you see fit!</li>
                <li>Deploy to Vercel for free hosting</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="editor">
      <div className="editor-tabs">
        <div className="tab active">
          <span className="tab-name">{selectedFile.name}</span>
          <button className="tab-close" onClick={onCloseFile} title="Close tab">
            ×
          </button>
        </div>
      </div>
      <div className="editor-content">
        {selectedFile.content ? (
          <SyntaxHighlighter content={selectedFile.content} />
        ) : (
          <div style={{ color: "var(--text-muted)", fontStyle: "italic" }}>
            No content available for this file.
          </div>
        )}
      </div>
    </div>
  );
}
