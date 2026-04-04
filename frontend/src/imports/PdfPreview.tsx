import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { X, ZoomIn, ZoomOut } from "lucide-react";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// Set up the PDF worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface PdfPreviewProps {
  file: File;
  onClose: () => void;
}

export function PdfPreview({ file, onClose }: PdfPreviewProps) {
  const [numPages, setNumPages] = useState<number>(0);
  const [fileUrl, setFileUrl] = useState<string>("");
  const [scale, setScale] = useState<number>(1);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  // Create object URL for the file
  useState(() => {
    const url = URL.createObjectURL(file);
    setFileUrl(url);
    return () => URL.revokeObjectURL(url);
  });

  const handleZoomIn = () => {
    setScale((prev) => Math.min(prev + 0.2, 2));
  };

  const handleZoomOut = () => {
    setScale((prev) => Math.max(prev - 0.2, 0.4));
  };

  const handleResetZoom = () => {
    setScale(1);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 transition-colors">
      <div className="flex items-center justify-between mb-4">
        <div className="flex-1 min-w-0">
          <h3 className="text-gray-900 dark:text-gray-100">PDF Preview</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 truncate">{file.name}</p>
        </div>
        <div className="flex items-center gap-2 ml-4">
          {/* Zoom Controls */}
          <div className="flex items-center gap-1 bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
            <button
              onClick={handleZoomOut}
              disabled={scale <= 0.4}
              className="p-1.5 rounded hover:bg-white dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              aria-label="Zoom out"
              title="Zoom out"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <button
              onClick={handleResetZoom}
              className="px-2 py-1 text-xs font-medium text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-600 rounded transition-colors min-w-[3rem]"
              title="Reset zoom"
            >
              {Math.round(scale * 100)}%
            </button>
            <button
              onClick={handleZoomIn}
              disabled={scale >= 2}
              className="p-1.5 rounded hover:bg-white dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              aria-label="Zoom in"
              title="Zoom in"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
            aria-label="Close preview"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="max-h-[600px] overflow-y-auto pdf-preview-scrollbar">
        <Document file={fileUrl} onLoadSuccess={onDocumentLoadSuccess} className="space-y-4">
          {Array.from(new Array(numPages), (_, index) => (
            <div
              key={`page_${index + 1}`}
              className="border border-gray-200 dark:border-gray-600 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="bg-gray-100 dark:bg-gray-700 px-3 py-1 text-xs text-gray-600 dark:text-gray-300">
                Page {index + 1} of {numPages}
              </div>
              <div className="flex justify-center bg-gray-50 dark:bg-gray-900 p-4">
                <Page
                  pageNumber={index + 1}
                  scale={scale}
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                  className="shadow-sm"
                />
              </div>
            </div>
          ))}
        </Document>
      </div>

      <style>{`
        .pdf-preview-scrollbar::-webkit-scrollbar {
          width: 8px;
        }

        .pdf-preview-scrollbar::-webkit-scrollbar-track {
          background: transparent;
          border-radius: 10px;
        }

        .pdf-preview-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #3b82f6 0%, #14b8a6 100%);
          border-radius: 10px;
          transition: all 0.3s ease;
        }

        .pdf-preview-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #2563eb 0%, #0d9488 100%);
        }

        /* Dark mode scrollbar */
        .dark .pdf-preview-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #60a5fa 0%, #2dd4bf 100%);
        }

        .dark .pdf-preview-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #3b82f6 0%, #14b8a6 100%);
        }

        /* Firefox */
        .pdf-preview-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #3b82f6 transparent;
        }

        .dark .pdf-preview-scrollbar {
          scrollbar-color: #60a5fa transparent;
        }
      `}</style>
    </div>
  );
}