// src/pages/Dashboard.tsx

import React, { useEffect, useState } from 'react';
import { Sidebar } from '../components/Sidebar';
import { ModernNavbar } from '../components/ModernNavbar';
import { WelcomeCard } from '../components/WelcomeCard';
import { CalendarWidget } from '../components/CalendarWidget';
import { ModernPerformanceChart } from '../components/ModernPerformanceChart';
import { SubjectScores } from '../components/SubjectScores';
import { TopPerformers } from '../components/TopPerformers';
import { ChatBot } from '../components/ChatBot';
import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { useTheme } from '../context/ThemeContext';
// >>>>>> ADD THIS LINE <<<<<<
import { apiFetch } from '../utils/api';

export function Dashboard() {
  const [isChatOpen, setIsChatOpen] = React.useState(false);
  const { isDarkMode, toggleDarkMode } = useTheme();

  // >>>>>> AUTH INTEGRATION STATE <<<<<<
  const [userInfo, setUserInfo] = useState<any>(null);
  const [authError, setAuthError] = useState<string>("");

  // >>>>>> CALL PROTECTED ROUTE ON LOAD <<<<<<
  useEffect(() => {
    apiFetch<{ user: any }>('/protected')
      .then(data => setUserInfo(data.user))
      .catch(err => setAuthError(err.message));
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors">
      <Sidebar isDarkMode={isDarkMode} />
      
      <div className="ml-20">
        <ModernNavbar isDarkMode={isDarkMode} onToggleDarkMode={toggleDarkMode} />
        
        <main className="p-6 max-w-[1600px] mx-auto">
          {/* >>>>>> AUTH STATUS CARD <<<<<< */}
          <div className="mb-6">
            {userInfo && (
              <div className="rounded-xl bg-green-100 text-green-900 px-4 py-2 mb-2 shadow">
                <strong>Logged in as:</strong> {userInfo.email}
              </div>
            )}
            {authError && (
              <div className="rounded-xl bg-red-100 text-red-900 px-4 py-2 mb-2 shadow">
                <strong>Auth Error:</strong> {authError}
              </div>
            )}
          </div>
          {/* Welcome Card */}
          <WelcomeCard isDarkMode={isDarkMode} />

          {/* Main Grid Layout */}
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - 2 spans */}
            <div className="lg:col-span-2 space-y-6">
              <ModernPerformanceChart isDarkMode={isDarkMode} />
              <SubjectScores isDarkMode={isDarkMode} />
            </div>

            {/* Right Column - 1 span */}
            <div className="space-y-6">
              <CalendarWidget isDarkMode={isDarkMode} />
              <TopPerformers isDarkMode={isDarkMode} />
            </div>
          </div>
        </main>
      </div>

      {/* Floating Chat Button */}
      {!isChatOpen && (
        null
      )}
      
      <ChatBot isOpen={isChatOpen} onToggle={() => setIsChatOpen(!isChatOpen)} isDarkMode={isDarkMode} />
    </div>
  );
}