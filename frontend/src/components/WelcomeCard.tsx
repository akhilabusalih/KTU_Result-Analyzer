import React from 'react';
import { motion } from 'motion/react';
import { TrendingUp, Users, Award, AlertCircle, ChevronRight } from 'lucide-react';

interface WelcomeCardProps {
  isDarkMode: boolean;
}

export function WelcomeCard({ isDarkMode }: WelcomeCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-600 p-6 shadow-2xl"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-800/30 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="relative flex items-center justify-between">
        <div className="flex-1">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl font-bold text-white mb-2 flex items-center gap-3"
          >
            Welcome back, Dr. Sujithra 👋
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="text-blue-100 text-base mb-1"
          >
            You've analyzed <span className="font-bold text-white">85%</span> of semester results this week!
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="text-blue-200 text-sm"
          >
            Keep it up and complete your analysis goals.
          </motion.p>

          {/* Quick Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-4 mt-5"
          >
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-xl">
              <TrendingUp className="w-4 h-4 text-green-300" />
              <div>
                <div className="text-xs text-blue-200">Pass Rate</div>
                <div className="text-base font-bold text-white">87.5%</div>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-xl">
              <Users className="w-4 h-4 text-yellow-300" />
              <div>
                <div className="text-xs text-blue-200">Total Students</div>
                <div className="text-base font-bold text-white">1,245</div>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-xl">
              <Award className="w-4 h-4 text-purple-300" />
              <div>
                <div className="text-xs text-blue-200">Avg CGPA</div>
                <div className="text-base font-bold text-white">8.4</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: 0.3, type: "spring" }}
          className="hidden lg:block"
        >
          <div className="relative w-48 h-48">
            {/* Decorative circles */}
            <motion.div
              animate={{ scale: [1, 1.1, 1], rotate: [0, 180, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 right-0 w-24 h-24 bg-yellow-400/30 rounded-full blur-xl"
            />
            <motion.div
              animate={{ scale: [1.1, 1, 1.1], rotate: [360, 180, 0] }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-0 left-0 w-32 h-32 bg-pink-400/30 rounded-full blur-xl"
            />
            
            {/* Character illustration */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-36 h-36 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <Award className="w-20 h-20 text-white" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}