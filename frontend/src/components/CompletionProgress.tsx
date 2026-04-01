import React from 'react';
import { motion } from 'motion/react';

interface CompletionProgressProps {
  isDarkMode: boolean;
}

export function CompletionProgress({ isDarkMode }: CompletionProgressProps) {
  const subjects = [
    { name: 'Data Structures', chapter: 'Chapter 3', progress: 79, color: 'blue' },
    { name: 'Database Systems', chapter: 'Chapter 4', progress: 91, color: 'green' },
    { name: 'Advanced Mathematics', chapter: 'Module 2', progress: 25, color: 'orange' },
    { name: 'Operating Systems', chapter: 'Chapter 5', progress: 97, color: 'purple' },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'text-blue-500',
      green: 'text-green-500',
      orange: 'text-orange-500',
      purple: 'text-purple-500',
    };
    return colors[color as keyof typeof colors];
  };

  const getStrokeColor = (color: string) => {
    const colors = {
      blue: '#3b82f6',
      green: '#10b981',
      orange: '#f97316',
      purple: '#a855f7',
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className={`rounded-2xl p-6 ${
        isDarkMode ? 'bg-gray-800' : 'bg-white'
      } shadow-xl`}
    >
      <h3 className={`text-lg font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
        Completion Progress
      </h3>

      <div className="space-y-5">
        {subjects.map((subject, index) => (
          <motion.div
            key={subject.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + index * 0.1 }}
            className="flex items-center justify-between"
          >
            <div className="flex-1">
              <h4 className={`text-sm font-medium mb-1 ${
                isDarkMode ? 'text-gray-200' : 'text-gray-900'
              }`}>
                {subject.name}
              </h4>
              <p className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                {subject.chapter}
              </p>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="relative w-16 h-16">
                <svg className="w-16 h-16 transform -rotate-90">
                  <circle
                    cx="32"
                    cy="32"
                    r="28"
                    stroke={isDarkMode ? '#374151' : '#e5e7eb'}
                    strokeWidth="6"
                    fill="none"
                  />
                  <motion.circle
                    cx="32"
                    cy="32"
                    r="28"
                    stroke={getStrokeColor(subject.color)}
                    strokeWidth="6"
                    fill="none"
                    strokeLinecap="round"
                    initial={{ strokeDasharray: '0 176' }}
                    animate={{ 
                      strokeDasharray: `${(subject.progress / 100) * 176} 176` 
                    }}
                    transition={{ duration: 1, delay: 0.6 + index * 0.1 }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className={`text-xs font-bold ${getColorClasses(subject.color)}`}>
                    {subject.progress}%
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
