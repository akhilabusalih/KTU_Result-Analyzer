import React from 'react';
import { Search, Sun, Moon, Bell, ChevronDown, X, User, Settings, HelpCircle, LogOut } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router';
import { useTheme } from '../context/ThemeContext';
import { useNotifications } from '../context/NotificationContext';

interface ModernNavbarProps {
  isDarkMode?: boolean;
  onToggleDarkMode?: () => void;
}

export function ModernNavbar(props: ModernNavbarProps) {
  const { isDarkMode, setDarkMode } = useTheme();
  const { notifications, markAllAsRead, hasUnread } = useNotifications();
  const navigate = useNavigate();
  const [isNotificationOpen, setIsNotificationOpen] = React.useState(false);
  const [isProfileOpen, setIsProfileOpen] = React.useState(false);
  const notificationRef = React.useRef<HTMLDivElement>(null);
  const profileRef = React.useRef<HTMLDivElement>(null);

  // Profile menu items
  const profileMenuItems = [
    { icon: User, label: 'View Profile', path: '/dashboard/profile', description: 'Manage your profile information' },
    { icon: Settings, label: 'Account Settings', path: '/dashboard/settings', description: 'Update your preferences' },
    { icon: HelpCircle, label: 'Help & Support', path: '/dashboard/help-support', description: 'Get help or report issues' },
  ];

  // Close dropdowns when clicking outside
  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (notificationRef.current && !notificationRef.current.contains(event.target as Node)) {
        setIsNotificationOpen(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleProfileMenuClick = (path: string) => {
    setIsProfileOpen(false);
    navigate(path);
  };

  const handleSignOut = () => {
    setIsProfileOpen(false);
    navigate('/auth');
  };

  return (
    <div className={`sticky top-0 z-30 border-b transition-colors ${
      isDarkMode 
        ? 'bg-gray-900/95 backdrop-blur-lg border-gray-800' 
        : 'bg-white/95 backdrop-blur-lg border-gray-200'
    }`}>
      <div className="h-20 px-8 flex items-center justify-between">
        {/* Search Bar */}
        <div className="flex-1 max-w-xl">
          <div className="relative">
            <Search className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 ${
              isDarkMode ? 'text-gray-500' : 'text-gray-400'
            }`} />
            <input
              type="text"
              placeholder="Search Courses, Documents, Activities..."
              className={`w-full pl-12 pr-4 py-3 rounded-xl transition-colors ${
                isDarkMode
                  ? 'bg-gray-800 text-gray-200 placeholder-gray-500 focus:bg-gray-750'
                  : 'bg-gray-50 text-gray-900 placeholder-gray-400 focus:bg-white'
              } border-2 border-transparent focus:border-blue-500 outline-none`}
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4 ml-8">
          {/* Theme Toggles */}
          <div className={`flex items-center gap-1 p-1 rounded-xl ${
            isDarkMode ? 'bg-gray-800' : 'bg-gray-100'
          }`}>
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setDarkMode(false)}
              className={`p-2 rounded-lg transition-colors ${
                !isDarkMode 
                  ? 'bg-white text-yellow-500 shadow-sm' 
                  : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              <Sun className="w-4 h-4" />
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setDarkMode(true)}
              className={`p-2 rounded-lg transition-colors ${
                isDarkMode 
                  ? 'bg-blue-600 text-white shadow-sm' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <Moon className="w-4 h-4" />
            </motion.button>
          </div>

          {/* Notifications */}
          <div className="relative" ref={notificationRef}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsNotificationOpen(!isNotificationOpen)}
              className="relative p-2"
            >
              <Bell className={`w-6 h-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`} />
              {hasUnread && (
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
              )}
            </motion.button>

            {/* Notification Dropdown */}
            <AnimatePresence>
              {isNotificationOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className={`absolute right-0 mt-2 w-96 rounded-xl shadow-2xl border overflow-hidden ${
                    isDarkMode
                      ? 'bg-gray-900 border-gray-800'
                      : 'bg-white border-gray-200'
                  }`}
                >
                  {/* Header */}
                  <div className={`px-4 py-3 border-b flex items-center justify-between ${
                    isDarkMode ? 'border-gray-800' : 'border-gray-200'
                  }`}>
                    <h3 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      Notifications
                    </h3>
                    <button
                      onClick={() => setIsNotificationOpen(false)}
                      className={`p-1 rounded-lg transition-colors ${
                        isDarkMode ? 'hover:bg-gray-800 text-gray-400' : 'hover:bg-gray-100 text-gray-600'
                      }`}
                      title="Close notifications"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Notifications List */}
                  <div className="max-h-96 overflow-y-auto">
                    {notifications.length === 0 ? (
                      <div className="px-4 py-12 text-center">
                        <Bell className={`w-12 h-12 mx-auto mb-3 ${
                          isDarkMode ? 'text-gray-700' : 'text-gray-300'
                        }`} />
                        <p className={`text-sm font-medium ${
                          isDarkMode ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          No new notifications
                        </p>
                        <p className={`text-xs mt-1 ${
                          isDarkMode ? 'text-gray-600' : 'text-gray-400'
                        }`}>
                          You're all caught up!
                        </p>
                      </div>
                    ) : (
                      <div className="divide-y divide-gray-200 dark:divide-gray-800">
                        {notifications.map((notification) => (
                          <div
                            key={notification.id}
                            className={`px-4 py-3 cursor-pointer transition-colors ${
                              notification.unread
                                ? isDarkMode ? 'bg-blue-500/5 hover:bg-gray-800' : 'bg-blue-50/50 hover:bg-gray-100'
                                : isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-50'
                            }`}
                          >
                            <div className="flex items-start gap-3">
                              {notification.unread && (
                                <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                              )}
                              <div className="flex-1 min-w-0">
                                <p className={`text-sm font-semibold ${
                                  isDarkMode ? 'text-white' : 'text-gray-900'
                                }`}>
                                  {notification.title}
                                </p>
                                <p className={`text-xs mt-0.5 ${
                                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                                }`}>
                                  {notification.message}
                                </p>
                                <p className={`text-xs mt-1 ${
                                  isDarkMode ? 'text-gray-600' : 'text-gray-400'
                                }`}>
                                  {notification.time}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Footer */}
                  {notifications.length > 0 && (
                    <div className={`px-4 py-2.5 border-t ${
                      isDarkMode ? 'border-gray-800' : 'border-gray-200'
                    }`}>
                      <button
                        onClick={markAllAsRead}
                        className={`w-full text-center text-xs font-semibold py-1.5 rounded-lg transition-colors ${
                          isDarkMode
                            ? 'text-blue-400 hover:bg-gray-800'
                            : 'text-blue-600 hover:bg-gray-50'
                        }`}>
                        Mark all as read
                      </button>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* User Profile */}
          <div className="relative" ref={profileRef}>
            <motion.button
              whileHover={{ scale: 1.02 }}
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className={`flex items-center gap-3 pl-2 pr-3 py-2 rounded-xl transition-colors ${
                isDarkMode 
                  ? 'hover:bg-gray-800' 
                  : 'hover:bg-gray-50'
              }`}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-white font-medium shadow-lg">
                SM
              </div>
              <div className="text-left">
                <div className={`text-sm font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`}>
                  Dr. Sujithra MS
                </div>
                <div className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                  Administrator
                </div>
              </div>
              <motion.div
                animate={{ rotate: isProfileOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown className={`w-4 h-4 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`} />
              </motion.div>
            </motion.button>

            {/* Profile Dropdown */}
            <AnimatePresence>
              {isProfileOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className={`absolute right-0 mt-2 w-80 rounded-xl shadow-2xl border overflow-hidden ${
                    isDarkMode
                      ? 'bg-gray-900 border-gray-800'
                      : 'bg-white border-gray-200'
                  }`}
                >
                  {/* Header */}
                  <div className={`px-6 py-4 border-b ${
                    isDarkMode ? 'border-gray-800 bg-gray-800/50' : 'border-gray-200 bg-gray-50'
                  }`}>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-white font-medium shadow-lg">
                        SM
                      </div>
                      <div className="flex-1">
                        <p className={`text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                          Dr. Sujithra MS
                        </p>
                        <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          sujithra.ms@university.edu
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Profile Menu */}
                  <div className="py-2">
                    {profileMenuItems.map((item, index) => (
                      <button
                        key={item.label}
                        onClick={() => handleProfileMenuClick(item.path)}
                        className={`w-full px-4 py-3 flex items-center gap-3 transition-colors ${
                          isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-50'
                        }`}
                      >
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                          isDarkMode ? 'bg-gray-800' : 'bg-gray-100'
                        }`}>
                          <item.icon className={`w-4 h-4 ${
                            isDarkMode ? 'text-gray-400' : 'text-gray-600'
                          }`} />
                        </div>
                        <div className="flex-1 text-left">
                          <p className={`text-sm font-medium ${
                            isDarkMode ? 'text-white' : 'text-gray-900'
                          }`}>
                            {item.label}
                          </p>
                          <p className={`text-xs ${
                            isDarkMode ? 'text-gray-500' : 'text-gray-500'
                          }`}>
                            {item.description}
                          </p>
                        </div>
                      </button>
                    ))}
                  </div>

                  {/* Footer - Sign Out */}
                  <div className={`px-4 py-3 border-t ${
                    isDarkMode ? 'border-gray-800' : 'border-gray-200'
                  }`}>
                    <button
                      onClick={handleSignOut}
                      className={`w-full px-4 py-2.5 rounded-lg flex items-center justify-center gap-2 font-medium transition-colors ${
                        isDarkMode
                          ? 'bg-red-500/10 text-red-400 hover:bg-red-500/20'
                          : 'bg-red-50 text-red-600 hover:bg-red-100'
                      }`}
                    >
                      <LogOut className="w-4 h-4" />
                      Sign Out
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}