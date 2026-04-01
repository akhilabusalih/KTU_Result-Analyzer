import React from 'react';
import { Download, FileSpreadsheet, MessageCircle } from 'lucide-react';

interface QuickActionsProps {
  onOpenChat: () => void;
  isDarkMode: boolean;
}

export function QuickActions({ onOpenChat, isDarkMode }: QuickActionsProps) {
  return (
    <div className={`rounded-lg p-4 shadow-sm transition-colors ${
      isDarkMode ? 'bg-gray-800' : 'bg-white'
    }`}>
      <h3 className={`text-base mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Quick Actions</h3>
      
      <div className="flex gap-3">
        <button className="flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm">
          <Download className="w-4 h-4" />
          <span>Download PDF Report</span>
        </button>
        
        <button className="flex items-center gap-2 px-4 py-2.5 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors text-sm">
          <FileSpreadsheet className="w-4 h-4" />
          <span>Export Excel</span>
        </button>
        
        <button 
          onClick={onOpenChat}
          className="flex items-center gap-2 px-4 py-2.5 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors text-sm"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Ask AI Chatbot</span>
        </button>
      </div>
    </div>
  );
}
