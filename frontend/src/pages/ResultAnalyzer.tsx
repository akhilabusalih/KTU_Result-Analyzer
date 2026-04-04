import { useState, useCallback } from "react";
import { useNavigate } from "react-router";
import { BarChart3, ArrowLeft, Moon, Sun, GraduationCap } from "lucide-react";
import { Button } from "../components/ui/button";
import { useTheme } from "../context/ThemeContext";
import { FileUploadArea } from "../components/FileUploadArea";
import { UploadProcessing } from "../components/UploadProcessing";
import { ResultsDisplay } from "../components/ResultsDisplay";
import { DepartmentProcessing } from "../components/DepartmentProcessing";

type AppState = "upload" | "processing" | "results" | "department-processing";

export function ResultAnalyzer() {
  const navigate = useNavigate();
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [appState, setAppState] = useState<AppState>("upload");
  const [files, setFiles] = useState<File[]>([]);
  const [department, setDepartment] = useState("computer");
  const [detailedAnalysis, setDetailedAnalysis] = useState(true);

  const handleAnalyze = useCallback((uploadedFiles: File[], dept: string, detailed: boolean) => {
    setFiles(uploadedFiles);
    setDepartment(dept);
    setDetailedAnalysis(detailed);
    setAppState("processing");
  }, []);

  const handleProcessingComplete = useCallback(() => {
    setAppState("results");
  }, []);

  const handleDepartmentChange = useCallback((newDept: string) => {
    setDepartment(newDept);
    setAppState("department-processing");
  }, []);

  const handleDepartmentProcessingComplete = useCallback(() => {
    setAppState("results");
  }, []);

  const handleReset = useCallback(() => {
    setAppState("upload");
    setFiles([]);
    setDepartment("computer");
    setDetailedAnalysis(true);
  }, []);

  const totalSize = files.reduce((sum, f) => sum + f.size, 0);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors">
      {/* Header */}
      <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-6 py-4 transition-colors">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </button>
            <div className="h-6 w-px bg-gray-300 dark:bg-gray-700" />
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-blue-500 to-teal-500 p-2 rounded-lg shadow-lg">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="bg-gradient-to-r from-blue-600 to-teal-600 dark:from-blue-400 dark:to-teal-400 bg-clip-text text-transparent">
                    ScoreSight — Result Analyzer
                  </h1>
                  <span className="bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 px-2 py-0.5 rounded text-xs">
                    Public
                  </span>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Upload and analyze engineering exam results — no login required
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle theme"
          >
            {isDarkMode ? (
              <Sun className="w-5 h-5 text-amber-500" />
            ) : (
              <Moon className="w-5 h-5 text-blue-600" />
            )}
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-8 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Page Header - Gold Standard */}
          {appState === "upload" && (
            <div className="flex items-start justify-between mb-8">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-2xl bg-blue-600 shadow-lg shadow-blue-500/20 flex items-center justify-center">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Result Analyzer
                  </h1>
                  <p className="text-base mt-1 text-gray-600 dark:text-gray-400">
                    Upload PDF or Excel result files to generate detailed performance analytics
                  </p>
                </div>
              </div>
              <Button
                variant="outline"
                onClick={() => navigate("/")}
                className="border-gray-300 dark:border-gray-600"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </div>
          )}

          {/* Upload State */}
          {appState === "upload" && (
            <div className="flex items-center justify-center py-8">
              <FileUploadArea onAnalyze={handleAnalyze} />
            </div>
          )}

          {/* Processing State */}
          {appState === "processing" && (
            <UploadProcessing
              fileCount={files.length}
              totalSize={totalSize}
              onComplete={handleProcessingComplete}
            />
          )}

          {/* Results State */}
          {appState === "results" && (
            <ResultsDisplay
              fileName={files.map(f => f.name).join(", ")}
              department={department}
              detailedAnalysis={detailedAnalysis}
              onDepartmentChange={detailedAnalysis ? handleDepartmentChange : undefined}
              onReset={handleReset}
            />
          )}

          {/* Department Processing */}
          {appState === "department-processing" && (
            <DepartmentProcessing onComplete={handleDepartmentProcessingComplete} />
          )}
        </div>
      </main>
    </div>
  );
}
