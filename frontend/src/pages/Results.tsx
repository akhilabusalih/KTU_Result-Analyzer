import React, { useState, useCallback, useEffect } from 'react';
import { Sidebar } from '../components/Sidebar';
import { ModernNavbar } from '../components/ModernNavbar';
import { useTheme } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'motion/react';
import { Upload, Settings, BarChart3, ChevronRight, FileText, X, Check, Info, Download, Printer, Share2, RefreshCw, FileCheck, FileSearch, Database, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Progress } from '../components/ui/progress';
import { ResultsDisplay } from '../components/ResultsDisplay';
import svgPaths from '../imports/svg-8euj0g2dyx';
import svgPathsProcessing from '../imports/svg-egn5tzd68t';
import KtuResultAnalyzer from '../imports/KtuResultAnalyzer';

type Step = 'upload' | 'configure' | 'results';

export function Results() {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [currentStep, setCurrentStep] = useState<Step>('upload');
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type === 'application/pdf') {
      setUploadedFile(file);
      // Simulate upload progress
      let progress = 0;
      const interval = setInterval(() => {
        progress += 10;
        setUploadProgress(progress);
        if (progress >= 100) {
          clearInterval(interval);
        }
      }, 100);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type === 'application/pdf') {
      setUploadedFile(file);
      // Simulate upload progress
      let progress = 0;
      const interval = setInterval(() => {
        progress += 10;
        setUploadProgress(progress);
        if (progress >= 100) {
          clearInterval(interval);
        }
      }, 100);
    }
  };

  const removeFile = () => {
    setUploadedFile(null);
    setUploadProgress(0);
  };

  const handleContinueToConfig = () => {
    setCurrentStep('configure');
  };

  const handleStartAnalysis = () => {
    if (!selectedDepartment) return;
    setIsProcessing(true);
  };

  const handleProcessingComplete = useCallback(() => {
    setIsProcessing(false);
    setCurrentStep('results');
  }, []);

  const handleBack = () => {
    if (currentStep === 'configure') {
      setCurrentStep('upload');
    }
  };

  const handleReset = () => {
    setCurrentStep('upload');
    setUploadedFile(null);
    setSelectedDepartment('');
    setUploadProgress(0);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors">
      <Sidebar isDarkMode={isDarkMode} />
      
      <div className="ml-20">
        <ModernNavbar isDarkMode={isDarkMode} onToggleDarkMode={toggleDarkMode} />
        
        <main className="p-6 max-w-[1400px] mx-auto">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6"
          >
            <div className="flex items-center gap-4 mb-3">
              <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/20 flex-shrink-0">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className={`text-3xl font-bold tracking-tight ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Result Analyzer
                </h1>
                <p className={`text-base mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Upload and analyze engineering department result files
                </p>
              </div>
            </div>
          </motion.div>

          {/* Step Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className={`mb-6 ${currentStep === 'results' ? 'hidden' : ''}`}
          >
            <div className="flex items-center justify-center gap-2.5">
              {/* Upload Step */}
              <div className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl border-2 transition-all ${
                currentStep === 'upload'
                  ? isDarkMode
                    ? 'bg-blue-500/10 border-blue-500/50'
                    : 'bg-blue-50 border-blue-400'
                  : isDarkMode
                  ? 'bg-gray-800 border-gray-700'
                  : 'bg-gray-100 border-gray-300'
              }`}>
                <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${
                  currentStep === 'upload'
                    ? 'bg-blue-500'
                    : uploadedFile
                    ? 'bg-green-500'
                    : isDarkMode
                    ? 'bg-gray-700'
                    : 'bg-gray-300'
                }`}>
                  {uploadedFile && currentStep !== 'upload' ? (
                    <Check className="w-4 h-4 text-white" />
                  ) : (
                    <Upload className="w-4 h-4 text-white" />
                  )}
                </div>
                <span className={`font-semibold text-sm ${
                  currentStep === 'upload'
                    ? isDarkMode ? 'text-white' : 'text-gray-900'
                    : isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  Upload
                </span>
              </div>

              <ChevronRight className={`w-5 h-5 ${isDarkMode ? 'text-gray-600' : 'text-gray-400'}`} />

              {/* Configure Step */}
              <div className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl border-2 transition-all ${
                currentStep === 'configure'
                  ? isDarkMode
                    ? 'bg-blue-500/10 border-blue-500/50'
                    : 'bg-blue-50 border-blue-400'
                  : isDarkMode
                  ? 'bg-gray-800 border-gray-700'
                  : 'bg-gray-100 border-gray-300'
              }`}>
                <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${
                  currentStep === 'configure'
                    ? 'bg-blue-500'
                    : selectedDepartment
                    ? 'bg-green-500'
                    : isDarkMode
                    ? 'bg-gray-700'
                    : 'bg-gray-300'
                }`}>
                  {selectedDepartment && currentStep === 'results' ? (
                    <Check className="w-4 h-4 text-white" />
                  ) : (
                    <Settings className="w-4 h-4 text-white" />
                  )}
                </div>
                <span className={`font-semibold text-sm ${
                  currentStep === 'configure'
                    ? isDarkMode ? 'text-white' : 'text-gray-900'
                    : isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  Configure
                </span>
              </div>

              <ChevronRight className={`w-5 h-5 ${isDarkMode ? 'text-gray-600' : 'text-gray-400'}`} />

              {/* Results Step */}
              <div className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl border-2 transition-all ${
                currentStep === 'results'
                  ? isDarkMode
                    ? 'bg-blue-500/10 border-blue-500/50'
                    : 'bg-blue-50 border-blue-400'
                  : isDarkMode
                  ? 'bg-gray-800 border-gray-700'
                  : 'bg-gray-100 border-gray-300'
              }`}>
                <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${
                  currentStep === 'results'
                    ? 'bg-blue-500'
                    : isDarkMode
                    ? 'bg-gray-700'
                    : 'bg-gray-300'
                }`}>
                  <BarChart3 className="w-4 h-4 text-white" />
                </div>
                <span className={`font-semibold text-sm ${
                  currentStep === 'results'
                    ? isDarkMode ? 'text-white' : 'text-gray-900'
                    : isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  Results
                </span>
              </div>
            </div>
          </motion.div>

          {/* Main Content Area */}
          <AnimatePresence mode="wait">
            {currentStep === 'upload' && (
              <UploadStep
                key="upload"
                isDarkMode={isDarkMode}
                uploadedFile={uploadedFile}
                uploadProgress={uploadProgress}
                onFileChange={handleFileChange}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                onRemoveFile={removeFile}
                onContinue={handleContinueToConfig}
              />
            )}

            {currentStep === 'configure' && (
              <ConfigureStep
                key="configure"
                isDarkMode={isDarkMode}
                uploadedFile={uploadedFile}
                selectedDepartment={selectedDepartment}
                onDepartmentChange={setSelectedDepartment}
                onBack={handleBack}
                onStartAnalysis={handleStartAnalysis}
                onRemoveFile={removeFile}
              />
            )}

            {currentStep === 'results' && (
              <motion.div
                key="results"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <ResultsDisplay
                  fileName={uploadedFile?.name || '2019 Sem 3.pdf'}
                  department={selectedDepartment || 'computer'}
                  detailedAnalysis={true}
                  onDepartmentChange={(dept) => setSelectedDepartment(dept)}
                  onReset={handleReset}
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Processing Modal */}
          <AnimatePresence>
            {isProcessing && (
              <ProcessingModal
                isDarkMode={isDarkMode}
                uploadedFile={uploadedFile}
                onComplete={handleProcessingComplete}
              />
            )}
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}

// Upload Step Component
function UploadStep({
  isDarkMode,
  uploadedFile,
  uploadProgress,
  onFileChange,
  onDragOver,
  onDrop,
  onRemoveFile,
  onContinue
}: {
  isDarkMode: boolean;
  uploadedFile: File | null;
  uploadProgress: number;
  onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onDragOver: (e: React.DragEvent) => void;
  onDrop: (e: React.DragEvent) => void;
  onRemoveFile: () => void;
  onContinue: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="max-w-2xl mx-auto"
    >
      <Card className={`p-5 ${
        isDarkMode
          ? 'bg-gray-900/50 border-gray-800'
          : 'bg-white border-gray-200'
      } shadow-xl`}>
        {/* Upload Area */}
        <div
          onDragOver={onDragOver}
          onDrop={onDrop}
          className={`relative border-2 border-dashed rounded-lg p-6 text-center transition-all ${
            isDarkMode
              ? 'border-gray-700 bg-gray-900/30 hover:border-blue-500/50 hover:bg-gray-900/50'
              : 'border-gray-300 bg-gray-50 hover:border-blue-400 hover:bg-blue-50/50'
          }`}
        >
          {/* Upload Icon */}
          <div className="flex justify-center mb-3">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg">
              <Upload className="w-6 h-6 text-white" />
            </div>
          </div>

          <h3 className={`text-base font-bold mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Drop your file(s) here, or Browse
          </h3>
          <p className={`text-xs mb-3 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Supports: pdf, Max file size 50MB
          </p>

          <label htmlFor="file-upload">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg font-semibold cursor-pointer shadow-lg hover:shadow-xl transition-all hover:scale-105 text-xs">
              <Upload className="w-3.5 h-3.5" />
              Browse Files
            </div>
          </label>
          <input
            id="file-upload"
            type="file"
            accept=".pdf"
            onChange={onFileChange}
            className="hidden"
          />
        </div>

        {/* Uploaded File Display */}
        {uploadedFile && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="mt-4"
          >
            <h4 className={`font-semibold text-xs mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Your file is being uploaded
            </h4>
            <p className={`text-[10px] mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              {(uploadedFile.size / 1024).toFixed(2)} KB • 1 file
            </p>

            <div className={`p-2.5 rounded-lg border ${
              isDarkMode
                ? 'bg-gray-800/50 border-gray-700'
                : 'bg-gray-50 border-gray-200'
            }`}>
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-red-500 flex items-center justify-center flex-shrink-0">
                  <FileText className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <p className={`text-xs font-semibold truncate ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      {uploadedFile.name}
                    </p>
                    <span className={`text-[10px] ml-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {(uploadedFile.size / 1024).toFixed(2)} KB
                    </span>
                  </div>
                  {uploadProgress < 100 && (
                    <Progress value={uploadProgress} className="h-1" />
                  )}
                </div>
                <button
                  onClick={onRemoveFile}
                  title="Remove file"
                  className={`p-1 rounded-lg transition-colors ${
                    isDarkMode
                      ? 'hover:bg-gray-700 text-gray-400'
                      : 'hover:bg-gray-200 text-gray-600'
                  }`}
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {uploadProgress >= 100 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-3"
              >
                <Button
                  onClick={onContinue}
                  className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold py-2 rounded-lg shadow-lg hover:shadow-xl transition-all text-xs"
                >
                  Continue to Configuration
                  <ChevronRight className="w-3.5 h-3.5 ml-2" />
                </Button>
              </motion.div>
            )}
          </motion.div>
        )}
      </Card>
    </motion.div>
  );
}

// Configure Step Component
function ConfigureStep({
  isDarkMode,
  uploadedFile,
  selectedDepartment,
  onDepartmentChange,
  onBack,
  onStartAnalysis,
  onRemoveFile
}: {
  isDarkMode: boolean;
  uploadedFile: File | null;
  selectedDepartment: string;
  onDepartmentChange: (dept: string) => void;
  onBack: () => void;
  onStartAnalysis: () => void;
  onRemoveFile: () => void;
}) {
  const departments = [
    'Computer Science Engineering',
    'Electrical Engineering',
    'Mechanical Engineering',
    'Civil Engineering',
    'Electronics & Communication',
    'Information Technology'
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="max-w-2xl mx-auto"
    >
      <Card className={`p-5 ${
        isDarkMode
          ? 'bg-gray-900/50 border-gray-800'
          : 'bg-white border-gray-200'
      } shadow-xl`}>
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-green-500 flex items-center justify-center">
            <Check className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Configure Analysis
            </h2>
            <p className={`text-[10px] ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              1 file ready • {uploadedFile ? (uploadedFile.size / 1024).toFixed(2) : '0'} KB
            </p>
          </div>
        </div>

        {/* Selected Files */}
        <div className={`p-2.5 rounded-lg border mb-4 ${
          isDarkMode
            ? 'bg-green-500/10 border-green-500/30'
            : 'bg-green-50 border-green-200'
        }`}>
          <h3 className={`font-semibold text-xs mb-1.5 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Selected Files
          </h3>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-red-500 flex items-center justify-center flex-shrink-0">
              <FileText className="w-3.5 h-3.5 text-white" />
            </div>
            <span className={`flex-1 text-xs font-medium truncate ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              {uploadedFile?.name}
            </span>
            <button
              onClick={onRemoveFile}
              title="Remove file"
              className={`p-0.5 rounded-lg transition-colors ${
                isDarkMode
                  ? 'hover:bg-gray-700 text-gray-400'
                  : 'hover:bg-gray-200 text-gray-600'
              }`}
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Department Selection */}
        <div className="mb-4">
          <label className={`block font-semibold text-xs mb-1.5 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Select Department <span className="text-red-500">*</span>
          </label>
          <select
            value={selectedDepartment}
            onChange={(e) => onDepartmentChange(e.target.value)}
            title="Select Department"
            className={`w-full px-3 py-2 rounded-lg border text-xs ${
              isDarkMode
                ? 'bg-gray-800 border-gray-700 text-white'
                : 'bg-white border-gray-300 text-gray-900'
            } focus:outline-none focus:ring-2 focus:ring-blue-500`}
          >
            <option value="">Choose engineering department</option>
            {departments.map(dept => (
              <option key={dept} value={dept}>{dept}</option>
            ))}
          </select>
        </div>

        {/* Analysis Options */}
        <div className="mb-4">
          <h3 className={`font-semibold text-xs mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Analysis Options
          </h3>
          <div className={`p-2.5 rounded-lg border ${
            isDarkMode
              ? 'bg-blue-500/10 border-blue-500/30'
              : 'bg-blue-50 border-blue-200'
          }`}>
            <label className="flex items-start gap-2 cursor-pointer">
              <input
                type="checkbox"
                defaultChecked
                className="mt-0.5 w-3.5 h-3.5 rounded border-gray-300 text-blue-500 focus:ring-blue-500"
              />
              <div className="flex-1">
                <span className={`font-semibold text-xs block ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Detailed Analysis
                </span>
                <span className={`text-[10px] ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Include comprehensive statistics, interactive charts, grade distributions, and department switching
                </span>
              </div>
            </label>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2.5">
          <Button
            onClick={onBack}
            variant="outline"
            className={`flex-1 py-2 rounded-lg font-semibold text-xs ${
              isDarkMode
                ? 'border-gray-700 text-gray-300 hover:bg-gray-800'
                : 'border-gray-300 text-gray-700 hover:bg-gray-50'
            }`}
          >
            Back
          </Button>
          <Button
            onClick={onStartAnalysis}
            disabled={!selectedDepartment}
            className={`flex-1 py-2 rounded-lg font-semibold text-xs shadow-lg hover:shadow-xl transition-all ${
              selectedDepartment
                ? 'bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            Start Analysis
            <ChevronRight className="w-3.5 h-3.5 ml-1.5" />
          </Button>
        </div>
      </Card>
    </motion.div>
  );
}

// Processing Modal Component
function ProcessingModal({ isDarkMode, uploadedFile, onComplete }: { isDarkMode: boolean; uploadedFile: File | null; onComplete: () => void }) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isStepComplete, setIsStepComplete] = useState(false);
  const [isFullyComplete, setIsFullyComplete] = useState(false);

  const steps = [
    { id: 1, label: "Uploading file", icon: Upload },
    { id: 2, label: "Validating file format", icon: FileCheck },
    { id: 3, label: "Extracting student records", icon: FileSearch },
    { id: 4, label: "Storing data in database", icon: Database },
    { id: 5, label: "Generating analytics", icon: BarChart3 },
  ];

  const currentStep = steps[currentStepIndex];

  useEffect(() => {
    const targetProgress = ((currentStepIndex + 1) / steps.length) * 100;
    const startProgress = (currentStepIndex / steps.length) * 100;
    const duration = 1500;
    const startTime = Date.now();

    const animateProgress = () => {
      const elapsed = Date.now() - startTime;
      const progressRatio = Math.min(elapsed / duration, 1);
      const easeInOutCubic = (t: number): number =>
        t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      const easedProgress = easeInOutCubic(progressRatio);
      const currentProgress = startProgress + (targetProgress - startProgress) * easedProgress;
      setProgress(currentProgress);

      if (progressRatio < 1) {
        requestAnimationFrame(animateProgress);
      } else {
        setIsStepComplete(true);
        setTimeout(() => {
          if (currentStepIndex < steps.length - 1) {
            setCurrentStepIndex(prev => prev + 1);
            setIsStepComplete(false);
          } else {
            setIsFullyComplete(true);
            setTimeout(() => {
              onComplete();
            }, 1500);
          }
        }, 800);
      }
    };

    animateProgress();
  }, [currentStepIndex, steps.length, onComplete]);

  const radius = 110;
  const strokeWidth = 16;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={`max-w-md w-full rounded-3xl shadow-2xl overflow-visible relative ${
          isDarkMode ? 'bg-gray-800 border-2 border-gray-700' : 'bg-white border-2 border-gray-200'
        }`}
        style={{ padding: '48px' }}
      >
        {/* File Badge at Top */}
        <div className="absolute left-1/2 -translate-x-1/2 top-6">
          <div className={`px-4 py-2 rounded-full border flex items-center gap-2 ${
            isDarkMode 
              ? 'bg-blue-950/30 border-blue-800 text-blue-300' 
              : 'bg-blue-50 border-blue-200 text-blue-700'
          }`}>
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-xs font-semibold">
              1 file • {uploadedFile ? (uploadedFile.size / (1024 * 1024)).toFixed(2) : '0.01'} MB
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center mt-8">
          {/* SVG Circle Container */}
          <div className="relative w-72 h-72 mb-6">
            <svg className="w-full h-full transform -rotate-90">
              <defs>
                <linearGradient id="progressGradientPrivate" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#14B8A6" />
                </linearGradient>
                <filter id="glowPrivate">
                  <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              
              {/* Track */}
              <circle
                cx="144"
                cy="144"
                r={radius}
                fill="none"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                className="text-gray-200 dark:text-gray-700"
              />
              
              {/* Progress */}
              <motion.circle
                cx="144"
                cy="144"
                r={radius}
                fill="none"
                stroke="url(#progressGradientPrivate)"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                style={{
                  transition: "stroke-dashoffset 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                  filter: "url(#glowPrivate)",
                }}
              />
            </svg>

            {/* Center Content - Icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <AnimatePresence mode="wait">
                {isFullyComplete || isStepComplete ? (
                  <motion.div
                    key="checkmark"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className="w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center shadow-lg"
                  >
                    <CheckCircle2 className="w-11 h-11 text-white" strokeWidth={2.5} />
                  </motion.div>
                ) : (
                  <motion.div
                    key={`step-${currentStep.id}`}
                    initial={{ scale: 0.7, opacity: 0, rotate: -20 }}
                    animate={{ scale: 1, opacity: 1, rotate: 0 }}
                    exit={{ scale: 0.7, opacity: 0, rotate: 20 }}
                    transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                    className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center shadow-lg relative"
                  >
                    <currentStep.icon className="w-10 h-10 text-white" strokeWidth={2.5} />
                    
                    {/* Pulse effect */}
                    <motion.div
                      className="absolute inset-0 rounded-full bg-blue-400"
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.4, 0, 0.4],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Step Label */}
          <AnimatePresence mode="wait">
            <motion.div
              key={isFullyComplete ? "complete" : `label-${currentStep.id}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="text-center"
            >
              <h3 className={`text-lg font-semibold mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                {isFullyComplete ? "Processing Complete" : currentStep.label}
              </h3>
              <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                {isFullyComplete 
                  ? "Your analytics are ready"
                  : "Please wait while we process your files"
                }
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Info Banner */}
        {!isFullyComplete && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`mt-8 rounded-2xl p-4 border ${
              isDarkMode
                ? 'bg-blue-950/20 border-blue-800'
                : 'bg-blue-50 border-blue-200'
            }`}
          >
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className={`text-xs font-medium ${isDarkMode ? 'text-blue-300' : 'text-blue-800'}`}>
                  This process typically takes 5-10 seconds
                </p>
                <p className={`text-xs mt-0.5 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                  Please don't close or refresh this page
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}