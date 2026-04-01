import React from 'react';
import { motion } from 'motion/react';
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { TrendingDown } from 'lucide-react';

interface ModernPerformanceChartProps {
  isDarkMode: boolean;
}

export function ModernPerformanceChart({ isDarkMode }: ModernPerformanceChartProps) {
  const data = [
    { name: 'Sem 1', value: 7.8 },
    { name: 'Sem 2', value: 8.2 },
    { name: 'Sem 3', value: 8.5 },
    { name: 'Sem 4', value: 8.1 },
    { name: 'Sem 5', value: 8.7 },
    { name: 'Sem 6', value: 8.9 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className={`rounded-2xl p-6 ${
        isDarkMode ? 'bg-gray-900/50 border border-gray-800' : 'bg-white'
      } shadow-xl`}
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Average Performance Trend
        </h3>
        <div className="flex items-center gap-2">
          <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            Semester-wise CGPA
          </span>
          <TrendingDown className="w-4 h-4 text-blue-500" />
        </div>
      </div>

      <div className="h-64">
        <ResponsiveContainer key={isDarkMode ? 'dark' : 'light'} width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1}/>
              </linearGradient>
            </defs>
            <CartesianGrid 
              strokeDasharray="3 3" 
              stroke={isDarkMode ? '#374151' : '#e5e7eb'} 
              vertical={false}
            />
            <XAxis 
              dataKey="name" 
              stroke={isDarkMode ? '#6b7280' : '#9ca3af'}
              tick={{ fontSize: 12 }}
              axisLine={false}
            />
            <YAxis 
              stroke={isDarkMode ? '#6b7280' : '#9ca3af'}
              tick={{ fontSize: 12 }}
              axisLine={false}
              domain={[7, 10]}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: isDarkMode ? '#1f2937' : '#ffffff',
                border: 'none',
                borderRadius: '12px',
                boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
              }}
              labelStyle={{ color: isDarkMode ? '#fff' : '#000' }}
            />
            <Area 
              type="monotone" 
              dataKey="value" 
              stroke="#3b82f6" 
              strokeWidth={3}
              fill="url(#colorValue)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}