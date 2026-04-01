import React from 'react';
import { Sidebar } from '../components/Sidebar';
import { ModernNavbar } from '../components/ModernNavbar';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'motion/react';
import { MessageSquare } from 'lucide-react';

export function Messages() {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors">
      <Sidebar isDarkMode={isDarkMode} />
      
      <div className="ml-20">
        <ModernNavbar isDarkMode={isDarkMode} onToggleDarkMode={toggleDarkMode} />
        
        <main className="p-8 max-w-[1600px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center min-h-[60vh]"
          >
            <div className={`w-24 h-24 rounded-full bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center mb-6 shadow-2xl`}>
              <MessageSquare className="w-12 h-12 text-white" />
            </div>
            <h1 className={`text-3xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Messages
            </h1>
            <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              This page is under construction. Coming soon!
            </p>
          </motion.div>
        </main>
      </div>
    </div>
  );
}