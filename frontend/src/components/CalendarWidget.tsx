import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

interface CalendarWidgetProps {
  isDarkMode: boolean;
}

export function CalendarWidget({ isDarkMode }: CalendarWidgetProps) {
  const daysOfWeek = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
  const currentMonth = 'JULY 2024';
  
  // Generate calendar days (simplified for demo)
  const days = [
    { day: null },
    { day: null },
    { day: null },
    { day: null },
    { day: 1 },
    { day: 2 },
    { day: 3 },
    { day: 4 },
    { day: 5 },
    { day: 6 },
    { day: 7 },
    { day: 8, isActive: true, color: 'blue' },
    { day: 9 },
    { day: 10 },
    { day: 11 },
    { day: 12 },
    { day: 13, isActive: true, color: 'pink' },
    { day: 14 },
    { day: 15 },
    { day: 16 },
    { day: 17 },
    { day: 18, isActive: true, color: 'green' },
    { day: 19 },
    { day: 20 },
    { day: 21 },
    { day: 22 },
    { day: 23, isActive: true, color: 'orange' },
    { day: 24 },
    { day: 25 },
    { day: 26 },
    { day: 27 },
    { day: 28 },
    { day: 29 },
    { day: 30 },
    { day: 31 },
  ];

  const upcomingActivities = [
    {
      id: 1,
      title: 'Result Upload Deadline',
      date: '8th July 2024',
      time: '8 AM - 9 AM',
      location: 'Online Portal, System Dashboard',
      color: 'blue',
      day: 8
    },
    {
      id: 2,
      title: 'Semester Evaluation',
      date: '13th July 2024',
      time: '8 AM - 9 AM',
      location: 'Main Hall, University Campus',
      color: 'pink',
      day: 13
    },
    {
      id: 3,
      title: 'Department Review Meet',
      date: '18th July 2024',
      time: '8 AM - 9 AM',
      location: 'To be submitted via Email',
      color: 'green',
      day: 18
    },
    {
      id: 4,
      title: 'Academic Board Meeting',
      date: '23rd July 2024',
      time: '10 AM - 1 PM',
      location: 'Conference Hall, Main Campus',
      color: 'orange',
      day: 23
    },
  ];

  const getColorClasses = (color: string, isActive: boolean = false) => {
    const colors = {
      blue: isActive 
        ? 'bg-blue-500 text-white' 
        : 'border-blue-500 text-blue-500',
      pink: isActive 
        ? 'bg-pink-500 text-white' 
        : 'border-pink-500 text-pink-500',
      green: isActive 
        ? 'bg-green-500 text-white' 
        : 'border-green-500 text-green-500',
      orange: isActive 
        ? 'bg-orange-500 text-white' 
        : 'border-orange-500 text-orange-500',
    };
    return colors[color as keyof typeof colors] || '';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className={`rounded-2xl p-6 ${
        isDarkMode ? 'bg-gray-900/50 border border-gray-800' : 'bg-white'
      } shadow-xl`}
    >
      {/* Calendar Section */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            My Progress
          </h3>
          <div className={`text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            {currentMonth}
          </div>
        </div>

        {/* Days of week */}
        <div className="grid grid-cols-7 gap-1.5 mb-2">
          {daysOfWeek.map((day) => (
            <div
              key={day}
              className={`text-center text-xs font-medium ${
                isDarkMode ? 'text-gray-500' : 'text-gray-500'
              }`}
            >
              {day}
            </div>
          ))}
        </div>

        {/* Calendar days */}
        <div className="grid grid-cols-7 gap-1.5">
          {days.map((dayObj, index) => (
            <motion.div
              key={index}
              whileHover={dayObj.day ? { scale: 1.1 } : {}}
              className={`aspect-square flex items-center justify-center text-sm rounded-lg transition-all ${
                !dayObj.day
                  ? ''
                  : dayObj.isActive
                  ? `${getColorClasses(dayObj.color || 'blue', true)} shadow-lg font-bold cursor-pointer`
                  : isDarkMode
                  ? 'text-gray-300 hover:bg-gray-700 cursor-pointer'
                  : 'text-gray-700 hover:bg-gray-100 cursor-pointer'
              }`}
            >
              {dayObj.day}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className={`h-px mb-6 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'}`} />

      {/* Upcoming Activities Section */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className={`text-base font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Upcoming Activities
          </h3>
          <button className="text-xs font-medium text-blue-500 hover:text-blue-600">
            See all
          </button>
        </div>

        <div className="space-y-2">
          {upcomingActivities.slice(0, 3).map((activity, index) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.05 }}
              whileHover={{ scale: 1.02 }}
              className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all group ${
                isDarkMode 
                  ? 'hover:bg-gray-800 border border-gray-800' 
                  : 'hover:bg-gray-50 border border-gray-100'
              }`}
            >
              <div className={`w-10 h-10 rounded-lg ${getColorClasses(activity.color, true)} flex items-center justify-center text-base font-bold flex-shrink-0 shadow-lg`}>
                {activity.day}
              </div>
              <div className="flex-1 min-w-0">
                <h4 className={`font-medium text-sm mb-0.5 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {activity.title}
                </h4>
                <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  {activity.date}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}