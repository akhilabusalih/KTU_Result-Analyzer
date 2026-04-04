import { useState, useEffect } from "react";
import * as XLSX from "xlsx";
import { X, ZoomIn, ZoomOut } from "lucide-react";

interface SpreadsheetPreviewProps {
  file: File;
  onClose: () => void;
}

export function SpreadsheetPreview({ file, onClose }: SpreadsheetPreviewProps) {
  const [data, setData] = useState<string[][]>([]);
  const [sheetNames, setSheetNames] = useState<string[]>([]);
  const [activeSheet, setActiveSheet] = useState(0);
  const [scale, setScale] = useState<number>(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const reader = new FileReader();
    
    reader.onload = (e) => {
      try {
        const arrayBuffer = e.target?.result;
        const workbook = XLSX.read(arrayBuffer, { type: "array" });
        
        setSheetNames(workbook.SheetNames);
        
        // Load first sheet data
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 }) as string[][];
        setData(jsonData);
        setLoading(false);
      } catch (error) {
        console.error("Error reading file:", error);
        setLoading(false);
      }
    };

    reader.readAsArrayBuffer(file);
  }, [file]);

  useEffect(() => {
    if (sheetNames.length === 0) return;

    const reader = new FileReader();
    
    reader.onload = (e) => {
      const arrayBuffer = e.target?.result;
      const workbook = XLSX.read(arrayBuffer, { type: "array" });
      const worksheet = workbook.Sheets[sheetNames[activeSheet]];
      const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 }) as string[][];
      setData(jsonData);
    };

    reader.readAsArrayBuffer(file);
  }, [activeSheet, sheetNames, file]);

  const handleZoomIn = () => {
    setScale((prev) => Math.min(prev + 0.1, 2));
  };

  const handleZoomOut = () => {
    setScale((prev) => Math.max(prev - 0.1, 0.5));
  };

  const handleResetZoom = () => {
    setScale(1);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 transition-colors">
      <div className="flex items-center justify-between mb-4">
        <div className="flex-1 min-w-0">
          <h3 className="text-gray-900 dark:text-gray-100">Spreadsheet Preview</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 truncate">{file.name}</p>
        </div>
        <div className="flex items-center gap-2 ml-4">
          {/* Zoom Controls */}
          <div className="flex items-center gap-1 bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
            <button
              onClick={handleZoomOut}
              disabled={scale <= 0.5}
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

      {/* Sheet Tabs */}
      {sheetNames.length > 1 && (
        <div className="flex gap-2 mb-4 border-b border-gray-200 dark:border-gray-700">
          {sheetNames.map((name, index) => (
            <button
              key={index}
              onClick={() => setActiveSheet(index)}
              className={`px-4 py-2 text-sm font-medium transition-colors relative ${
                activeSheet === index
                  ? "text-blue-600 dark:text-blue-400"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
              }`}
            >
              {name}
              {activeSheet === index && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-teal-600 dark:from-blue-400 dark:to-teal-400" />
              )}
            </button>
          ))}
        </div>
      )}

      {/* Table Preview */}
      <div className="max-h-[600px] overflow-auto pdf-preview-scrollbar">
        {loading ? (
          <div className="flex items-center justify-center h-40">
            <div className="text-gray-500 dark:text-gray-400">Loading...</div>
          </div>
        ) : data.length === 0 ? (
          <div className="flex items-center justify-center h-40">
            <div className="text-gray-500 dark:text-gray-400">No data available</div>
          </div>
        ) : (
          <div 
            className="inline-block min-w-full"
            style={{ 
              transform: `scale(${scale})`, 
              transformOrigin: 'top left',
              transition: 'transform 0.2s ease'
            }}
          >
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 border border-gray-200 dark:border-gray-700">
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {data.map((row, rowIndex) => (
                  <tr key={rowIndex} className={rowIndex === 0 ? "bg-gray-50 dark:bg-gray-700" : ""}>
                    {row.map((cell, cellIndex) => (
                      <td
                        key={cellIndex}
                        className="px-3 py-2 text-sm text-gray-900 dark:text-gray-100 whitespace-nowrap border-r border-gray-200 dark:border-gray-700"
                      >
                        {cell !== null && cell !== undefined ? String(cell) : ""}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <div className="mt-4 text-xs text-gray-500 dark:text-gray-400">
        Showing {data.length} rows × {data[0]?.length || 0} columns
      </div>
    </div>
  );
}
