import { Upload, X, FileText, CheckCircle, ChevronRight, FileSpreadsheet, AlertCircle } from "lucide-react";
import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Label } from "../components/ui/label";
import { Checkbox } from "../components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Button } from "../components/ui/button";

interface FileUploadAreaProps {
  onAnalyze: (files: File[], department: string, detailedAnalysis: boolean) => void;
}

export function FileUploadArea({ onAnalyze }: FileUploadAreaProps) {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [department, setDepartment] = useState<string>("");
  const [detailedAnalysis, setDetailedAnalysis] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [step, setStep] = useState<"upload" | "configure">("upload");
  const [uploadComplete, setUploadComplete] = useState<Set<number>>(new Set());

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const validateFile = (file: File): { valid: boolean; error?: string } => {
    const validExtensions = ['.pdf', '.xlsx', '.xls', '.csv'];
    const maxSize = 50 * 1024 * 1024;
    
    const extension = '.' + file.name.split('.').pop()?.toLowerCase();
    
    if (!validExtensions.includes(extension)) {
      return {
        valid: false,
        error: `"${file.name}" is not supported. Use PDF, CSV, or Excel files.`
      };
    }
    
    if (file.size > maxSize) {
      return {
        valid: false,
        error: `"${file.name}" exceeds 50MB limit.`
      };
    }
    
    return { valid: true };
  };

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = Array.from(e.dataTransfer.files);
    const validFiles: File[] = [];
    
    files.forEach(file => {
      const validation = validateFile(file);
      if (validation.valid) {
        validFiles.push(file);
      } else {
        setErrorMessage(validation.error || "Invalid file");
        setShowError(true);
        setTimeout(() => {
          setShowError(false);
          setErrorMessage("");
        }, 5000);
      }
    });
    
    if (validFiles.length > 0) {
      setSelectedFiles((prev) => [...prev, ...validFiles]);
    }
  }, []);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const files = Array.from(e.target.files);
      const validFiles: File[] = [];
      
      files.forEach(file => {
        const validation = validateFile(file);
        if (validation.valid) {
          validFiles.push(file);
        } else {
          setErrorMessage(validation.error || "Invalid file");
          setShowError(true);
          setTimeout(() => {
            setShowError(false);
            setErrorMessage("");
          }, 5000);
        }
      });
      
      if (validFiles.length > 0) {
        setSelectedFiles((prev) => [...prev, ...validFiles]);
      }
    }
    e.target.value = "";
  };

  const handleRemoveFile = (index: number) => {
    setSelectedFiles((prev) => {
      const newFiles = prev.filter((_, i) => i !== index);
      if (newFiles.length === 0) {
        setStep("upload");
        setUploadComplete(new Set());
      } else {
        // Reindex the sets after removal
        const newUploadComplete = new Set<number>();
        
        Array.from(uploadComplete).forEach((oldIndex) => {
          if (oldIndex < index) {
            newUploadComplete.add(oldIndex);
          } else if (oldIndex > index) {
            newUploadComplete.add(oldIndex - 1);
          }
        });
        
        setUploadComplete(newUploadComplete);
      }
      return newFiles;
    });
  };

  const handleUploadComplete = (index: number) => {
    setUploadComplete((prev) => new Set(prev).add(index));
  };

  const handleContinueToConfig = () => {
    if (selectedFiles.length > 0) {
      setStep("configure");
    }
  };

  const handleBackToUpload = () => {
    setStep("upload");
  };

  const handleAnalyze = () => {
    if (!department) {
      setShowError(true);
      setErrorMessage("Please select a department before analyzing");
      return;
    }
    
    if (selectedFiles.length === 0) {
      setShowError(true);
      setErrorMessage("Please upload at least one file");
      return;
    }
    
    if (selectedFiles.length > 0 && department) {
      setShowError(false);
      setErrorMessage("");
      onAnalyze(selectedFiles, department, detailedAnalysis);
    }
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return "0 B";
    const k = 1024;
    const sizes = ["B", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + " " + sizes[i];
  };

  const getTotalSize = (): string => {
    const totalBytes = selectedFiles.reduce((sum, file) => sum + file.size, 0);
    return formatFileSize(totalBytes);
  };

  const isPdfFile = (file: File): boolean => {
    return file.type === "application/pdf" || file.name.toLowerCase().endsWith(".pdf");
  };

  const isSpreadsheetFile = (file: File): boolean => {
    return (
      file.type === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" ||
      file.type === "application/vnd.ms-excel" ||
      file.name.toLowerCase().endsWith(".xlsx") ||
      file.name.toLowerCase().endsWith(".xls") ||
      file.name.toLowerCase().endsWith(".csv")
    );
  };

  const getFileIconColor = (file: File) => {
    if (isPdfFile(file)) {
      return "bg-red-500 text-white";
    }
    if (isSpreadsheetFile(file)) {
      return "bg-green-600 text-white";
    }
    return "bg-gray-500 text-white";
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Result Analyzer
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Upload and analyze engineering department result files
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all ${
            step === "upload" 
              ? "bg-blue-100 dark:bg-blue-950/40 border-2 border-blue-400" 
              : selectedFiles.length > 0
              ? "bg-green-100 dark:bg-green-950/40 border-2 border-green-400"
              : "bg-gray-100 dark:bg-gray-800 border-2 border-gray-300"
          }`}>
            <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${
              step === "upload" 
                ? "bg-blue-600" 
                : selectedFiles.length > 0
                ? "bg-green-600"
                : "bg-gray-400"
            }`}>
              {selectedFiles.length > 0 && step !== "upload" ? (
                <CheckCircle className="w-4 h-4 text-white" />
              ) : (
                <Upload className="w-4 h-4 text-white" />
              )}
            </div>
            <span className="text-sm font-semibold text-gray-900 dark:text-white">Upload</span>
          </div>
          
          <ChevronRight className="w-4 h-4 text-gray-400" />
          
          <div className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all ${
            step === "configure" 
              ? "bg-blue-100 dark:bg-blue-950/40 border-2 border-blue-400" 
              : "bg-gray-100 dark:bg-gray-800 border-2 border-gray-300"
          }`}>
            <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${
              step === "configure" 
                ? "bg-blue-600" 
                : "bg-gray-400"
            }`}>
              <CheckCircle className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm font-semibold text-gray-900 dark:text-white">Configure</span>
          </div>
          
          <ChevronRight className="w-4 h-4 text-gray-400" />
          
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-100 dark:bg-gray-800 border-2 border-gray-300">
            <div className="w-7 h-7 rounded-lg bg-gray-400 flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <span className="text-sm font-semibold text-gray-900 dark:text-white">Results</span>
          </div>
        </div>

        {/* Error Alert */}
        <AnimatePresence>
          {showError && errorMessage && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mb-4"
            >
              <div className="bg-red-50 dark:bg-red-900/20 border-2 border-red-200 dark:border-red-800 rounded-2xl p-4 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                <p className="text-sm font-medium text-red-700 dark:text-red-300 flex-1">
                  {errorMessage}
                </p>
                <button
                  onClick={() => {
                    setShowError(false);
                    setErrorMessage("");
                  }}
                  className="text-red-600 dark:text-red-400 hover:text-red-800"
                  title="Dismiss error"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Card */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl border-2 border-gray-200 dark:border-gray-700 overflow-hidden">
          {/* STEP 1: Upload */}
          {step === "upload" && (
            <div className="p-8">
              {/* Upload Drop Zone */}
              <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                className={`relative border-3 border-dashed rounded-2xl p-12 text-center transition-all duration-300 ${
                  isDragging
                    ? "border-teal-500 bg-teal-50 dark:bg-teal-950/30 scale-[1.02]"
                    : "border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900/50 hover:border-blue-400 dark:hover:border-blue-500"
                }`}
              >
                <input
                  type="file"
                  id="file-upload"
                  className="hidden"
                  accept=".xlsx,.xls,.csv,.pdf"
                  onChange={handleFileSelect}
                  multiple
                />
                <label htmlFor="file-upload" className="cursor-pointer block">
                  <motion.div
                    animate={isDragging ? { scale: 1.1 } : { scale: 1 }}
                    className={`w-20 h-20 mx-auto mb-4 rounded-2xl flex items-center justify-center ${
                      isDragging 
                        ? "bg-teal-600 shadow-xl" 
                        : "bg-gradient-to-br from-blue-500 to-teal-500 shadow-lg"
                    }`}
                  >
                    <Upload className="w-10 h-10 text-white" strokeWidth={2.5} />
                  </motion.div>
                  
                  <p className="text-base font-semibold text-gray-900 dark:text-white mb-2">
                    {isDragging ? "Drop your file(s) here" : "Drop your file(s) here, or Browse"}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                    Supports: pdf, Max file size 50MB
                  </p>
                  
                  {!isDragging && (
                    <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all">
                      <Upload className="w-4 h-4" />
                      Browse Files
                    </div>
                  )}
                </label>
              </div>

              {/* Files List */}
              {selectedFiles.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                      Your file is being uploaded
                    </h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {getTotalSize()} • {selectedFiles.length} file{selectedFiles.length > 1 ? 's' : ''}
                    </span>
                  </div>
                  
                  <div className="space-y-3 max-h-80 overflow-y-auto pr-2">
                    {selectedFiles.map((file, index) => (
                      <motion.div
                        key={`${file.name}-${index}`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-gray-50 dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-xl p-4 hover:border-blue-300 dark:hover:border-blue-600 transition-all group"
                      >
                        <div className="flex items-center gap-3">
                          <div className={`${getFileIconColor(file)} p-3 rounded-xl shadow-md flex-shrink-0`}>
                            {isPdfFile(file) ? (
                              <FileText className="w-5 h-5" />
                            ) : (
                              <FileSpreadsheet className="w-5 h-5" />
                            )}
                          </div>
                          
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-2">
                              <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 truncate">
                                {file.name}
                              </p>
                              <span className="text-xs font-medium text-gray-500 dark:text-gray-400 ml-2">
                                {formatFileSize(file.size)}
                              </span>
                            </div>
                            
                            {/* Progress Bar - Hidden after upload completes */}
                            {!uploadComplete.has(index) && (
                              <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                <motion.div
                                  initial={{ width: 0 }}
                                  animate={{ width: "100%" }}
                                  transition={{ duration: 1, delay: index * 0.2 }}
                                  onAnimationComplete={() => handleUploadComplete(index)}
                                  className="h-full bg-gradient-to-r from-blue-500 to-teal-500"
                                />
                              </div>
                            )}
                          </div>
                          
                          {/* Action Buttons - Show after upload completes */}
                          {uploadComplete.has(index) && (
                            <div className="flex items-center gap-2">
                              {/* Remove Button */}
                              <button
                                onClick={() => handleRemoveFile(index)}
                                className="p-2 rounded-lg text-gray-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/30 transition-all"
                                title="Remove file"
                              >
                                <X className="w-4 h-4" />
                              </button>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <Button
                    onClick={handleContinueToConfig}
                    className="w-full mt-6 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white py-4 rounded-xl text-base font-semibold shadow-lg hover:shadow-xl transition-all"
                  >
                    Continue to Configuration
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </Button>
                </motion.div>
              )}
            </div>
          )}

          {/* STEP 2: Configure */}
          {step === "configure" && (
            <div className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-green-500 flex items-center justify-center shadow-lg">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                    Configure Analysis
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {selectedFiles.length} file{selectedFiles.length > 1 ? 's' : ''} ready • {getTotalSize()}
                  </p>
                </div>
              </div>

              <div className="space-y-5">
                {/* Files Summary */}
                <div className="bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800 rounded-2xl p-4">
                  <h3 className="text-sm font-semibold text-green-900 dark:text-green-300 mb-3">
                    Selected Files
                  </h3>
                  <div className="space-y-2 max-h-40 overflow-y-auto">
                    {selectedFiles.map((file, index) => (
                      <div key={`cfg-${index}`} className="flex items-center justify-between bg-white dark:bg-gray-800 rounded-lg p-3 border border-green-100 dark:border-green-900">
                        <div className="flex items-center gap-2 flex-1 min-w-0">
                          <div className={`${getFileIconColor(file)} p-2 rounded-lg`}>
                            {isPdfFile(file) ? (
                              <FileText className="w-3.5 h-3.5" />
                            ) : (
                              <FileSpreadsheet className="w-3.5 h-3.5" />
                            )}
                          </div>
                          <span className="text-sm font-medium text-green-800 dark:text-green-300 truncate">
                            {file.name}
                          </span>
                        </div>
                        <button
                          onClick={() => handleRemoveFile(index)}
                          className="ml-2 text-green-700 dark:text-green-400 hover:text-red-600 transition-colors"
                          title="Remove file"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Department Selection */}
                <div>
                  <Label htmlFor="department" className="text-sm font-semibold text-gray-900 dark:text-white mb-2 block">
                    Select Department <span className="text-red-500">*</span>
                  </Label>
                  <Select value={department} onValueChange={(value: string) => {
                    setDepartment(value);
                    setShowError(false);
                    setErrorMessage("");
                  }}>
                    <SelectTrigger 
                      id="department" 
                      className={`w-full h-12 text-sm border-2 rounded-xl ${
                        department
                          ? 'border-green-400 bg-green-50 dark:bg-green-950/20'
                          : showError && !department 
                          ? 'border-red-500' 
                          : 'border-gray-300'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        {department && <CheckCircle className="w-4 h-4 text-green-500" />}
                        <SelectValue placeholder="Choose engineering department" />
                      </div>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mechanical">Mechanical Engineering</SelectItem>
                      <SelectItem value="civil">Civil Engineering</SelectItem>
                      <SelectItem value="computer">Computer Science Engineering</SelectItem>
                      <SelectItem value="electrical">Electrical & Electronics Engineering</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Analysis Options */}
                <div>
                  <Label className="text-sm font-semibold text-gray-900 dark:text-white mb-2 block">
                    Analysis Options
                  </Label>
                  <div 
                    onClick={() => setDetailedAnalysis(!detailedAnalysis)}
                    className={`cursor-pointer border-2 rounded-xl p-4 transition-all ${
                      detailedAnalysis
                        ? 'border-blue-400 bg-blue-50 dark:bg-blue-950/30 shadow-sm'
                        : 'border-gray-300 bg-gray-50 dark:bg-gray-900 hover:border-gray-400'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <Checkbox
                        id="detailed"
                        checked={detailedAnalysis}
                        onCheckedChange={(checked: boolean | "indeterminate") => setDetailedAnalysis(checked === true)}
                        className="mt-1"
                      />
                      <Label htmlFor="detailed" className="text-sm cursor-pointer flex-1">
                        <span className="font-semibold text-gray-900 dark:text-white block mb-1">
                          Detailed Analysis
                        </span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          Include comprehensive statistics, interactive charts, grade distributions, and department switching
                        </span>
                      </Label>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-2">
                  <Button
                    onClick={handleBackToUpload}
                    variant="outline"
                    className="flex-1 h-12 border-2 rounded-xl text-sm font-semibold"
                  >
                    <ChevronRight className="w-4 h-4 mr-2 rotate-180" />
                    Back
                  </Button>
                  <Button
                    onClick={handleAnalyze}
                    className="flex-1 h-12 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 rounded-xl text-sm font-semibold shadow-lg hover:shadow-xl transition-all"
                  >
                    Start Analysis
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}