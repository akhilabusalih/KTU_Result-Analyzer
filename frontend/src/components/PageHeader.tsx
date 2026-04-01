import React from 'react';

interface PageHeaderProps {
  isDarkMode: boolean;
}

export function PageHeader({ isDarkMode }: PageHeaderProps) {
  return (
    <div className={`rounded-lg p-4 shadow-sm transition-colors ${
      isDarkMode ? 'bg-gray-800' : 'bg-white'
    }`}>
      <h1 className={`text-xl ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Result Analysis Dashboard</h1>
      <p className={`text-sm mt-0.5 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>S3 Computer Science Engineering – Regular Exam</p>
    </div>
  );
}
