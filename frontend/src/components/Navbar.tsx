import React from 'react';
import { GraduationCap, ChevronDown, Moon, Sun } from 'lucide-react';

interface NavbarProps {
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
}

export function Navbar({ isDarkMode, onToggleDarkMode }: NavbarProps) {
  const [selectedSemester, setSelectedSemester] = React.useState('Semester 3');
  const [isSemesterOpen, setIsSemesterOpen] = React.useState(false);
  const [selectedDepartment, setSelectedDepartment] = React.useState('Computer Science Engineering');
  const [isDepartmentOpen, setIsDepartmentOpen] = React.useState(false);
  
  const semesters = [
    'Semester 1',
    'Semester 2',
    'Semester 3',
    'Semester 4',
    'Semester 5',
    'Semester 6',
    'Semester 7',
    'Semester 8',
  ];

  const departments = [
    'Civil Engineering',
    'Mechanical Engineering',
    'Electrical & Electronics Engineering',
    'Computer Science Engineering',
  ];

  return (
    <nav className={`border-b transition-colors ${
      isDarkMode 
        ? 'bg-gray-800 border-gray-700' 
        : 'bg-white border-gray-200'
    }`}>
      <div className="max-w-[1600px] mx-auto px-6">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-1.5 rounded-lg">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <span className={`text-base font-medium ${isDarkMode ? 'text-white' : 'text-blue-900'}`}>AI Result Analyzer</span>
          </div>
          
          {/* Center - Dropdowns */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <button 
                onClick={() => setIsSemesterOpen(!isSemesterOpen)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg transition-colors text-sm ${
                  isDarkMode 
                    ? 'bg-gray-700 hover:bg-gray-600' 
                    : 'bg-gray-50 hover:bg-gray-100'
                }`}
              >
                <span className={isDarkMode ? 'text-gray-200' : 'text-gray-700'}>{selectedSemester}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${
                  isSemesterOpen ? 'rotate-180' : ''
                } ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
              </button>
              
              {isSemesterOpen && (
                <>
                  <div 
                    className="fixed inset-0 z-10" 
                    onClick={() => setIsSemesterOpen(false)}
                  />
                  <div className={`absolute top-full mt-1 left-0 w-40 rounded-lg shadow-lg border py-1 z-20 ${
                    isDarkMode 
                      ? 'bg-gray-700 border-gray-600' 
                      : 'bg-white border-gray-200'
                  }`}>
                    {semesters.map((semester) => (
                      <button
                        key={semester}
                        onClick={() => {
                          setSelectedSemester(semester);
                          setIsSemesterOpen(false);
                        }}
                        className={`w-full text-left px-3 py-1.5 text-sm transition-colors ${
                          selectedSemester === semester 
                            ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400' 
                            : isDarkMode 
                              ? 'text-gray-200 hover:bg-gray-600' 
                              : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        {semester}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
            
            <div className="relative">
              <button 
                onClick={() => setIsDepartmentOpen(!isDepartmentOpen)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg transition-colors text-sm ${
                  isDarkMode 
                    ? 'bg-gray-700 hover:bg-gray-600' 
                    : 'bg-gray-50 hover:bg-gray-100'
                }`}
              >
                <span className={isDarkMode ? 'text-gray-200' : 'text-gray-700'}>{selectedDepartment}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${
                  isDepartmentOpen ? 'rotate-180' : ''
                } ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
              </button>
              
              {isDepartmentOpen && (
                <>
                  <div 
                    className="fixed inset-0 z-10" 
                    onClick={() => setIsDepartmentOpen(false)}
                  />
                  <div className={`absolute top-full mt-1 left-0 w-64 rounded-lg shadow-lg border py-1 z-20 ${
                    isDarkMode 
                      ? 'bg-gray-700 border-gray-600' 
                      : 'bg-white border-gray-200'
                  }`}>
                    {departments.map((department) => (
                      <button
                        key={department}
                        onClick={() => {
                          setSelectedDepartment(department);
                          setIsDepartmentOpen(false);
                        }}
                        className={`w-full text-left px-3 py-1.5 text-sm transition-colors ${
                          selectedDepartment === department 
                            ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400' 
                            : isDarkMode 
                              ? 'text-gray-200 hover:bg-gray-600' 
                              : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        {department}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
          
          {/* User Profile */}
          <div className="flex items-center gap-3">
            {/* Dark/Light Mode Toggle */}
            <button
              onClick={onToggleDarkMode}
              className={`p-1.5 rounded-lg transition-colors ${
                isDarkMode 
                  ? 'bg-gray-700 hover:bg-gray-600 text-yellow-400' 
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
              title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            
            <div className="text-right">
              <div className={`text-sm ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>Dr. Sujithra MS</div>
              <div className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>HOD, Computer Science</div>
            </div>
            <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-sm">
              SM
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
