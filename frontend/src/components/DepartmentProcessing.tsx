import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

interface DepartmentProcessingProps {
  onComplete: () => void;
}

export function DepartmentProcessing({ onComplete }: DepartmentProcessingProps) {
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState<'processing' | 'complete'>('processing');

  useEffect(() => {
    if (stage !== 'processing') return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setStage('complete');
            setTimeout(onComplete, 800);
          }, 300);
          return 100;
        }
        return prev + 5;
      });
    }, 40);

    return () => clearInterval(interval);
  }, [stage, onComplete]);

  const circumference = 2 * Math.PI * 60;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 max-w-sm w-full mx-4"
      >
        <div className="flex flex-col items-center">
          <div className="relative w-40 h-40 mb-6">
            <svg className="w-40 h-40 -rotate-90" viewBox="0 0 140 140">
              <circle
                cx="70"
                cy="70"
                r="60"
                stroke="currentColor"
                strokeWidth="8"
                fill="none"
                className="text-gray-200 dark:text-gray-700"
              />
              {stage === 'processing' && (
                <motion.circle
                  cx="70"
                  cy="70"
                  r="60"
                  stroke="url(#dept-gradient)"
                  strokeWidth="8"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  initial={{ strokeDashoffset: circumference }}
                  animate={{ strokeDashoffset }}
                  transition={{ duration: 0.3 }}
                />
              )}
              {stage === 'complete' && (
                <motion.circle
                  cx="70"
                  cy="70"
                  r="60"
                  stroke="url(#dept-gradient)"
                  strokeWidth="8"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray={circumference}
                  initial={{ strokeDashoffset: circumference }}
                  animate={{ strokeDashoffset: 0 }}
                  transition={{ duration: 0.3 }}
                />
              )}
              <defs>
                <linearGradient id="dept-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#14b8a6" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              {stage === 'processing' && (
                <motion.div className="text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 dark:from-blue-400 dark:to-teal-400 bg-clip-text text-transparent">
                    {Math.round(progress)}%
                  </div>
                </motion.div>
              )}
              {stage === 'complete' && (
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", duration: 0.4 }}>
                  <CheckCircle2 className="w-16 h-16 text-teal-500" />
                </motion.div>
              )}
            </div>
          </div>
          {stage === 'processing' && (
            <motion.div className="text-center" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Processing</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Please wait while we update the department...</p>
            </motion.div>
          )}
          {stage === 'complete' && (
            <motion.div className="text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <h3 className="text-xl font-semibold text-teal-600 dark:text-teal-400 mb-2">Complete!</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Department updated successfully</p>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
