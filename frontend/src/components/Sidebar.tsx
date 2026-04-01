import React from 'react';
import { useNavigate, useLocation } from 'react-router';
import { 
  Home, 
  FileText, 
  TrendingUp, 
  Users, 
  BookOpen,
  LogOut,
  GraduationCap,
  AlertCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface SidebarProps {
  isDarkMode: boolean;
}

export function Sidebar({ isDarkMode }: SidebarProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [hoveredItem, setHoveredItem] = React.useState<string | null>(null);
  const [showTooltip, setShowTooltip] = React.useState<string | null>(null);
  const hoverTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  const menuItems = [
    { 
      icon: Home, 
      label: 'Home', 
      path: '/dashboard', 
      badge: null,
      tooltip: '🏠 Your Dashboard Hub',
      description: 'Get insights, track performance & view analytics at a glance'
    },
    { 
      icon: FileText, 
      label: 'Results', 
      path: '/dashboard/results', 
      badge: null,
      tooltip: '📊 Result Analyzer',
      description: 'Upload PDFs, extract data & generate comprehensive reports'
    },
    { 
      icon: TrendingUp, 
      label: 'Analytics', 
      path: '/dashboard/analytics', 
      badge: null,
      tooltip: '📈 Advanced Analytics',
      description: 'Deep dive into performance trends & statistical insights'
    },
    { 
      icon: Users, 
      label: 'Students', 
      path: '/dashboard/students', 
      badge: null,
      tooltip: '👥 Student Management',
      description: 'View profiles, track progress & manage student records'
    },
    { 
      icon: BookOpen, 
      label: 'Subject Configuration', 
      path: '/dashboard/subjects', 
      badge: null,
      tooltip: '📚 Subject Configuration',
      description: 'Add, edit & manage subjects, credit hours & course structure'
    },
    { 
      icon: AlertCircle, 
      label: 'Report Issue', 
      path: '/dashboard/report-issue', 
      badge: null,
      tooltip: '🐛 Report an Issue',
      description: 'Found a problem? Let us know so we can fix it faster'
    },
  ];

  const handleMouseEnter = (path: string) => {
    setHoveredItem(path);
    hoverTimeoutRef.current = setTimeout(() => {
      setShowTooltip(path);
    }, 2000); // 2 second delay
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
    setShowTooltip(null);
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
  };

  React.useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div className={`fixed left-0 top-0 h-screen w-20 flex flex-col items-center py-6 border-r transition-colors z-50 ${
      isDarkMode 
        ? 'bg-gray-900 border-gray-800' 
        : 'bg-white border-gray-200'
    }`}>
      {/* Logo */}
      <motion.div 
        whileHover={{ scale: 1.05 }}
        className="mb-12 cursor-pointer relative group"
        onClick={() => navigate('/dashboard')}
        onMouseEnter={() => handleMouseEnter('logo')}
        onMouseLeave={handleMouseLeave}
      >
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
          <GraduationCap className="w-7 h-7 text-white" />
        </div>
        
        {/* Logo Tooltip */}
        <AnimatePresence>
          {showTooltip === 'logo' && (
            <motion.div
              initial={{ opacity: 0, x: -10, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute left-20 top-0 ml-4 z-50"
            >
              <div className={`px-4 py-3 rounded-xl shadow-2xl border backdrop-blur-sm ${
                isDarkMode
                  ? 'bg-gray-800/95 border-gray-700'
                  : 'bg-white/95 border-gray-200'
              }`}>
                <div className="whitespace-nowrap">
                  <div className={`font-bold text-sm mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    🎓 ScoreSight AI
                  </div>
                  <div className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Academic Excellence Platform
                  </div>
                </div>
                {/* Arrow */}
                <div className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent ${
                  isDarkMode ? 'border-r-[8px] border-r-gray-800' : 'border-r-[8px] border-r-white'
                }`} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Menu Items */}
      <div className="flex-1 flex flex-col gap-4 w-full px-3">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <div key={item.path} className="relative">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate(item.path)}
                onMouseEnter={() => handleMouseEnter(item.path)}
                onMouseLeave={handleMouseLeave}
                className={`relative w-full h-12 rounded-xl flex items-center justify-center transition-all ${
                  isActive
                    ? 'bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-lg'
                    : isDarkMode
                    ? 'text-gray-400 hover:text-white hover:bg-gray-800'
                    : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <item.icon className="w-5 h-5" />
                {item.badge && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-medium">
                    {item.badge}
                  </span>
                )}
              </motion.button>

              {/* Tooltip */}
              <AnimatePresence>
                {showTooltip === item.path && (
                  <motion.div
                    initial={{ opacity: 0, x: -10, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-full top-0 ml-4 z-50"
                  >
                    <div className={`px-4 py-3 rounded-xl shadow-2xl border backdrop-blur-sm ${
                      isDarkMode
                        ? 'bg-gray-800/95 border-gray-700'
                        : 'bg-white/95 border-gray-200'
                    }`}>
                      <div className="whitespace-nowrap">
                        <div className={`font-bold text-sm mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                          {item.tooltip}
                        </div>
                        <div className={`text-xs max-w-[200px] whitespace-normal ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          {item.description}
                        </div>
                      </div>
                      {/* Arrow */}
                      <div className={`absolute left-0 top-6 -translate-y-1/2 -translate-x-2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent ${
                        isDarkMode ? 'border-r-[8px] border-r-gray-800' : 'border-r-[8px] border-r-white'
                      }`} />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* Sign Out */}
      <div className="relative">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/auth')}
          onMouseEnter={() => handleMouseEnter('logout')}
          onMouseLeave={handleMouseLeave}
          className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
            isDarkMode
              ? 'text-red-400 hover:bg-red-900/20'
              : 'text-red-500 hover:bg-red-50'
          }`}
        >
          <LogOut className="w-5 h-5" />
        </motion.button>

        {/* Logout Tooltip */}
        <AnimatePresence>
          {showTooltip === 'logout' && (
            <motion.div
              initial={{ opacity: 0, x: -10, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute left-full bottom-0 ml-4 z-50"
            >
              <div className={`px-4 py-3 rounded-xl shadow-2xl border backdrop-blur-sm ${
                isDarkMode
                  ? 'bg-gray-800/95 border-red-900/50'
                  : 'bg-white/95 border-red-200'
              }`}>
                <div className="whitespace-nowrap">
                  <div className={`font-bold text-sm mb-1 ${isDarkMode ? 'text-red-400' : 'text-red-600'}`}>
                    🚪 Sign Out
                  </div>
                  <div className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Securely logout from your account
                  </div>
                </div>
                {/* Arrow */}
                <div className={`absolute left-0 bottom-3 -translate-x-2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent ${
                  isDarkMode ? 'border-r-[8px] border-r-gray-800' : 'border-r-[8px] border-r-white'
                }`} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}