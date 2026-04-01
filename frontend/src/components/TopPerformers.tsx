import React from 'react';
import { motion } from 'motion/react';
import { Trophy, ChevronRight } from 'lucide-react';

interface TopPerformersProps {
  isDarkMode: boolean;
}

export function TopPerformers({ isDarkMode }: TopPerformersProps) {
  const performers = [
    {
      id: 1,
      name: 'Aditya Patel',
      avatar: 'AP',
      points: '9.64/10 CGPA',
      bgColor: 'from-yellow-400 to-yellow-600',
      rank: 1
    },
    {
      id: 2,
      name: 'Meera Krishnan',
      avatar: 'MK',
      points: '9.10 CGPA',
      bgColor: 'from-blue-400 to-blue-600',
      rank: 2
    },
    {
      id: 3,
      name: 'Arjun Reddy',
      avatar: 'AR',
      points: '8.5/10 CGPA',
      bgColor: 'from-pink-400 to-pink-600',
      rank: 3
    },
    {
      id: 4,
      name: 'Kavya Nair',
      avatar: 'KN',
      points: '8.2/10 CGPA',
      bgColor: 'from-orange-400 to-orange-600',
      rank: 4
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className={`rounded-2xl p-6 ${
        isDarkMode ? 'bg-gray-900/50 border border-gray-800' : 'bg-white'
      } shadow-xl`}
    >
      <div className="flex items-center gap-3 mb-4">
        <Trophy className="w-6 h-6 text-yellow-500" />
        <h3 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Top Performing Students
        </h3>
      </div>

      <div className="space-y-2.5">
        {performers.map((performer, index) => (
          <motion.div
            key={performer.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 + index * 0.05 }}
            whileHover={{ scale: 1.02 }}
            className="relative overflow-hidden rounded-xl cursor-pointer group"
          >
            <div className={`absolute inset-0 bg-gradient-to-r ${performer.bgColor} opacity-90 group-hover:opacity-100 transition-opacity`} />
            
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative p-3.5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{performer.avatar}</span>
                </div>
                <div>
                  <h4 className="font-medium text-white mb-0.5 text-sm">
                    {performer.name}
                  </h4>
                  <p className="text-xs text-white/80">
                    {performer.points}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {performer.rank === 1 && (
                  <Trophy className="w-4 h-4 text-white" />
                )}
                <ChevronRight className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}