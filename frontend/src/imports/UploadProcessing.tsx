import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, Upload, FileCheck, Database, FileSearch, BarChart3 } from "lucide-react";

interface UploadProcessingProps {
  fileCount: number;
  totalSize: number;
  onComplete: () => void;
}

interface ProcessingStep {
  id: number;
  label: string;
  icon: React.ComponentType<any>;
}

export function UploadProcessing({ fileCount, totalSize, onComplete }: UploadProcessingProps) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isStepComplete, setIsStepComplete] = useState(false);
  const [isFullyComplete, setIsFullyComplete] = useState(false);

  const steps: ProcessingStep[] = [
    { id: 1, label: "Uploading file", icon: Upload },
    { id: 2, label: "Validating file format", icon: FileCheck },
    { id: 3, label: "Extracting student records", icon: FileSearch },
    { id: 4, label: "Storing data in database", icon: Database },
    { id: 5, label: "Generating analytics", icon: BarChart3 },
  ];

  const currentStep = steps[currentStepIndex];

  useEffect(() => {
    // Animate progress for current step
    const targetProgress = ((currentStepIndex + 1) / steps.length) * 100;
    const duration = 1500; // 1.5 seconds per step
    const startProgress = (currentStepIndex / steps.length) * 100;
    const startTime = Date.now();

    const animateProgress = () => {
      const elapsed = Date.now() - startTime;
      const progressRatio = Math.min(elapsed / duration, 1);
      
      // Smoother easing function for more fluid animation
      const easeInOutCubic = (t: number): number => {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      };
      
      const easedProgress = easeInOutCubic(progressRatio);
      const currentProgress = startProgress + (targetProgress - startProgress) * easedProgress;
      
      setProgress(currentProgress);

      if (progressRatio < 1) {
        requestAnimationFrame(animateProgress);
      } else {
        // Step completed - show checkmark
        setIsStepComplete(true);
        
        // Wait briefly then move to next step
        setTimeout(() => {
          if (currentStepIndex < steps.length - 1) {
            setCurrentStepIndex(prev => prev + 1);
            setIsStepComplete(false);
          } else {
            // All steps complete
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

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return "0.00 MB";
    const mb = bytes / (1024 * 1024);
    return mb.toFixed(2) + " MB";
  };

  const radius = 110; // Increased from 80
  const strokeWidth = 16; // Increased from 8 for thicker ring
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop with blur */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute inset-0 bg-gray-900/60 dark:bg-gray-950/80 backdrop-blur-md"
      />

      {/* Modal Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="relative w-full max-w-md bg-white dark:bg-gray-800 rounded-3xl shadow-2xl border-2 border-gray-200 dark:border-gray-700 p-12"
      >
        {/* File Info Badge */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-full">
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-xs font-semibold text-blue-700 dark:text-blue-300">
              {fileCount} file{fileCount > 1 ? "s" : ""} • {formatFileSize(totalSize)}
            </span>
          </div>
        </div>

        {/* Circular Progress */}
        <div className="flex flex-col items-center justify-center">
          {/* SVG Circle Container - Larger size */}
          <div className="relative w-72 h-72 mb-6">
            {/* Background Circle */}
            <svg className="w-full h-full transform -rotate-90">
              <defs>
                <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#14B8A6" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              
              {/* Track - Thicker */}
              <circle
                cx="144"
                cy="144"
                r={radius}
                fill="none"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                className="text-gray-200 dark:text-gray-700"
              />
              
              {/* Progress - Thicker with smoother animation */}
              <motion.circle
                cx="144"
                cy="144"
                r={radius}
                fill="none"
                stroke="url(#progressGradient)"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                style={{
                  transition: "stroke-dashoffset 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                  filter: "url(#glow)",
                }}
              />
            </svg>

            {/* Center Content - Icon Only (Centered) */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Icon or Checkmark */}
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
                    transition={{ 
                      duration: 0.5, 
                      ease: [0.4, 0, 0.2, 1]
                    }}
                    className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center shadow-lg relative"
                  >
                    <currentStep.icon className="w-10 h-10 text-white" strokeWidth={2.5} />
                    
                    {/* Pulse effect - smoother */}
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
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                {isFullyComplete ? "Processing Complete" : currentStep.label}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
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
            className="mt-8 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-2xl p-4"
          >
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-xs font-medium text-blue-800 dark:text-blue-300">
                  This process typically takes 5-10 seconds
                </p>
                <p className="text-xs text-blue-600 dark:text-blue-400 mt-0.5">
                  Please don't close or refresh this page
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
