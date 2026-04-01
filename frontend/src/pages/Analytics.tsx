import React from 'react';
import { Sidebar } from '../components/Sidebar';
import { ModernNavbar } from '../components/ModernNavbar';
import { useTheme } from '../context/ThemeContext';
import { 
  Download, 
  FileText, 
  TrendingUp, 
  TrendingDown,
  Users,
  Award,
  AlertCircle,
  BookOpen,
  Filter
} from 'lucide-react';
import { motion } from 'motion/react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Area,
  AreaChart
} from 'recharts';

export function Analytics() {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [filters, setFilters] = React.useState({
    department: 'all',
    batch: 'all',
    semester: 'all',
    subject: 'all',
    dateRange: 'all'
  });

  // Mock data for charts
  const cgpaTrendData = [
    { semester: 'Sem 1', cgpa: 7.2 },
    { semester: 'Sem 2', cgpa: 7.5 },
    { semester: 'Sem 3', cgpa: 7.8 },
    { semester: 'Sem 4', cgpa: 8.0 },
    { semester: 'Sem 5', cgpa: 8.2 },
    { semester: 'Sem 6', cgpa: 8.4 },
  ];

  const cgpaDistributionData = [
    { range: '9.0-10', students: 15, percentage: 15 },
    { range: '8.0-9.0', students: 35, percentage: 35 },
    { range: '7.0-8.0', students: 30, percentage: 30 },
    { range: '6.0-7.0', students: 15, percentage: 15 },
    { range: 'Below 6.0', students: 5, percentage: 5 },
  ];

  const studentStabilityData = [
    { name: 'Improving', value: 45, color: '#10b981' },
    { name: 'Stable', value: 35, color: '#3b82f6' },
    { name: 'Declining', value: 20, color: '#ef4444' },
  ];

  const subjectPerformanceData = [
    { subject: 'Mathematics', avgMarks: 78, passRate: 92 },
    { subject: 'Physics', avgMarks: 72, passRate: 88 },
    { subject: 'Chemistry', avgMarks: 75, passRate: 90 },
    { subject: 'Data Structures', avgMarks: 85, passRate: 95 },
    { subject: 'DBMS', avgMarks: 80, passRate: 93 },
    { subject: 'OS', avgMarks: 68, passRate: 82 },
  ];

  const semesterComparisonData = [
    { semester: 'Sem 1', passRate: 88, avgCGPA: 7.2, backlogs: 12 },
    { semester: 'Sem 2', passRate: 90, avgCGPA: 7.5, backlogs: 10 },
    { semester: 'Sem 3', passRate: 92, avgCGPA: 7.8, backlogs: 8 },
    { semester: 'Sem 4', passRate: 94, avgCGPA: 8.0, backlogs: 6 },
    { semester: 'Sem 5', passRate: 93, avgCGPA: 8.2, backlogs: 7 },
    { semester: 'Sem 6', passRate: 95, avgCGPA: 8.4, backlogs: 5 },
  ];

  const topPerformers = [
    { name: 'Rajesh Kumar', cgpa: 9.8, rank: 1 },
    { name: 'Priya Sharma', cgpa: 9.6, rank: 2 },
    { name: 'Amit Patel', cgpa: 9.5, rank: 3 },
    { name: 'Sneha Reddy', cgpa: 9.4, rank: 4 },
    { name: 'Rahul Verma', cgpa: 9.3, rank: 5 },
  ];

  const bottomPerformers = [
    { name: 'Student A', cgpa: 5.2, rank: 96 },
    { name: 'Student B', cgpa: 5.4, rank: 97 },
    { name: 'Student C', cgpa: 5.5, rank: 98 },
    { name: 'Student D', cgpa: 5.7, rank: 99 },
    { name: 'Student E', cgpa: 5.8, rank: 100 },
  ];

  const kpiData = [
    {
      title: 'Average CGPA',
      value: '8.2',
      change: '+0.3',
      trend: 'up',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-600',
    },
    {
      title: 'Pass Percentage',
      value: '94%',
      change: '+2%',
      trend: 'up',
      icon: Award,
      color: 'from-blue-500 to-indigo-600',
    },
    {
      title: 'Highest Score',
      value: '98',
      change: '0',
      trend: 'neutral',
      icon: TrendingUp,
      color: 'from-purple-500 to-pink-600',
    },
    {
      title: 'Total Students',
      value: '450',
      change: '+25',
      trend: 'up',
      icon: Users,
      color: 'from-orange-500 to-red-600',
    },
    {
      title: 'Total Backlogs',
      value: '48',
      change: '-5',
      trend: 'up',
      icon: AlertCircle,
      color: 'from-red-500 to-rose-600',
    },
    {
      title: 'Lowest Score',
      value: '42',
      change: '+3',
      trend: 'up',
      icon: TrendingDown,
      color: 'from-gray-500 to-slate-600',
    },
  ];

  const handleExportPDF = () => {
    alert('Exporting PDF report...');
  };

  const handleExportCSV = () => {
    alert('Exporting CSV data...');
  };

  const handleExportImage = () => {
    alert('Exporting charts as images...');
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors">
      <Sidebar isDarkMode={isDarkMode} />
      
      <div className="ml-20">
        <ModernNavbar isDarkMode={isDarkMode} onToggleDarkMode={toggleDarkMode} />
        
        <main className="p-6 max-w-[1600px] mx-auto">
          {/* Page Header */}
          <div className="mb-6 flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/20 flex-shrink-0">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className={`text-3xl font-bold tracking-tight ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Advanced Analytics
              </h1>
              <p className={`text-base mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Deep dive into performance trends, insights & statistical analysis
              </p>
            </div>
          </div>

          {/* 1. Filter Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-6 rounded-2xl mb-6 ${
              isDarkMode 
                ? 'bg-gray-900 border border-gray-800' 
                : 'bg-white shadow-lg'
            }`}
          >
            <div className="flex items-center gap-2 mb-4">
              <Filter className={`w-5 h-5 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
              <h2 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Filter Analytics
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
              <select
                value={filters.department}
                onChange={(e) => setFilters({ ...filters, department: e.target.value })}
                title="Filter by department"
                className={`px-4 py-3 rounded-lg border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                  isDarkMode
                    ? 'bg-gray-800 border-gray-700 text-white hover:border-gray-600'
                    : 'bg-white border-gray-300 text-gray-900 hover:border-gray-400'
                }`}
              >
                <option value="all">All Departments</option>
                <option value="cse">Computer Science</option>
                <option value="ece">Electronics</option>
                <option value="me">Mechanical</option>
                <option value="ce">Civil</option>
              </select>

              <select
                value={filters.batch}
                onChange={(e) => setFilters({ ...filters, batch: e.target.value })}
                title="Filter by batch"
                className={`px-4 py-3 rounded-lg border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                  isDarkMode
                    ? 'bg-gray-800 border-gray-700 text-white hover:border-gray-600'
                    : 'bg-white border-gray-300 text-gray-900 hover:border-gray-400'
                }`}
              >
                <option value="all">All Batches</option>
                <option value="2024">Batch 2024</option>
                <option value="2023">Batch 2023</option>
                <option value="2022">Batch 2022</option>
                <option value="2021">Batch 2021</option>
              </select>

              <select
                value={filters.semester}
                onChange={(e) => setFilters({ ...filters, semester: e.target.value })}
                title="Filter by semester"
                className={`px-4 py-3 rounded-lg border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                  isDarkMode
                    ? 'bg-gray-800 border-gray-700 text-white hover:border-gray-600'
                    : 'bg-white border-gray-300 text-gray-900 hover:border-gray-400'
                }`}
              >
                <option value="all">All Semesters</option>
                <option value="1">Semester 1</option>
                <option value="2">Semester 2</option>
                <option value="3">Semester 3</option>
                <option value="4">Semester 4</option>
                <option value="5">Semester 5</option>
                <option value="6">Semester 6</option>
              </select>

              <select
                value={filters.subject}
                onChange={(e) => setFilters({ ...filters, subject: e.target.value })}
                title="Filter by subject"
                className={`px-4 py-3 rounded-lg border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                  isDarkMode
                    ? 'bg-gray-800 border-gray-700 text-white hover:border-gray-600'
                    : 'bg-white border-gray-300 text-gray-900 hover:border-gray-400'
                }`}
              >
                <option value="all">All Subjects</option>
                <option value="math">Mathematics</option>
                <option value="physics">Physics</option>
                <option value="ds">Data Structures</option>
                <option value="dbms">DBMS</option>
              </select>

              <select
                value={filters.dateRange}
                onChange={(e) => setFilters({ ...filters, dateRange: e.target.value })}
                title="Filter by date range"
                className={`px-4 py-3 rounded-lg border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                  isDarkMode
                    ? 'bg-gray-800 border-gray-700 text-white hover:border-gray-600'
                    : 'bg-white border-gray-300 text-gray-900 hover:border-gray-400'
                }`}
              >
                <option value="all">All Time</option>
                <option value="current">Current Year</option>
                <option value="last">Last Year</option>
                <option value="custom">Custom Range</option>
              </select>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg font-medium hover:shadow-lg transition-shadow text-sm"
              >
                Apply Filters
              </motion.button>
            </div>
          </motion.div>

          {/* 2. KPI Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-6">
            {kpiData.map((kpi, index) => (
              <motion.div
                key={kpi.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`p-4 rounded-xl ${
                  isDarkMode 
                    ? 'bg-gray-900 border border-gray-800' 
                    : 'bg-white shadow-md'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${kpi.color} flex items-center justify-center`}>
                    <kpi.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className={`text-xs font-medium ${
                    kpi.trend === 'up' ? 'text-green-500' : 
                    kpi.trend === 'down' ? 'text-red-500' : 
                    'text-gray-500'
                  }`}>
                    {kpi.change}
                  </span>
                </div>
                <h3 className={`text-2xl font-bold mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {kpi.value}
                </h3>
                <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {kpi.title}
                </p>
              </motion.div>
            ))}
          </div>

          {/* 3. Student Performance Analytics Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* CGPA Trend Line Graph */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-6 rounded-2xl ${
                isDarkMode 
                  ? 'bg-gray-900 border border-gray-800' 
                  : 'bg-white shadow-lg'
              }`}
            >
              <h2 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                📊 CGPA Trend Over Semesters
              </h2>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={cgpaTrendData}>
                  <defs>
                    <linearGradient id="colorCgpa" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke={isDarkMode ? '#374151' : '#e5e7eb'} />
                  <XAxis dataKey="semester" stroke={isDarkMode ? '#9ca3af' : '#6b7280'} />
                  <YAxis stroke={isDarkMode ? '#9ca3af' : '#6b7280'} domain={[6, 10]} />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: isDarkMode ? '#1f2937' : '#ffffff',
                      border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                      borderRadius: '8px',
                      color: isDarkMode ? '#ffffff' : '#000000'
                    }}
                  />
                  <Area type="monotone" dataKey="cgpa" stroke="#3b82f6" fillOpacity={1} fill="url(#colorCgpa)" />
                </AreaChart>
              </ResponsiveContainer>
            </motion.div>

            {/* CGPA Distribution Chart */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-6 rounded-2xl ${
                isDarkMode 
                  ? 'bg-gray-900 border border-gray-800' 
                  : 'bg-white shadow-lg'
              }`}
            >
              <h2 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                📈 CGPA Distribution
              </h2>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={cgpaDistributionData}>
                  <CartesianGrid strokeDasharray="3 3" stroke={isDarkMode ? '#374151' : '#e5e7eb'} />
                  <XAxis dataKey="range" stroke={isDarkMode ? '#9ca3af' : '#6b7280'} />
                  <YAxis stroke={isDarkMode ? '#9ca3af' : '#6b7280'} />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: isDarkMode ? '#1f2937' : '#ffffff',
                      border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                      borderRadius: '8px',
                      color: isDarkMode ? '#ffffff' : '#000000'
                    }}
                  />
                  <Bar dataKey="percentage" fill="#3b82f6" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </motion.div>

            {/* Student Stability Pie Chart */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-6 rounded-2xl ${
                isDarkMode 
                  ? 'bg-gray-900 border border-gray-800' 
                  : 'bg-white shadow-lg'
              }`}
            >
              <h2 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                🎯 Student Performance Stability
              </h2>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={studentStabilityData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name}: ${value}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {studentStabilityData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: isDarkMode ? '#1f2937' : '#ffffff',
                      border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                      borderRadius: '8px',
                      color: isDarkMode ? '#ffffff' : '#000000'
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </motion.div>

            {/* Subject-wise Average Marks */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-6 rounded-2xl ${
                isDarkMode 
                  ? 'bg-gray-900 border border-gray-800' 
                  : 'bg-white shadow-lg'
              }`}
            >
              <h2 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                📚 Subject-wise Average Marks
              </h2>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={subjectPerformanceData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke={isDarkMode ? '#374151' : '#e5e7eb'} />
                  <XAxis type="number" stroke={isDarkMode ? '#9ca3af' : '#6b7280'} domain={[0, 100]} />
                  <YAxis type="category" dataKey="subject" stroke={isDarkMode ? '#9ca3af' : '#6b7280'} width={120} />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: isDarkMode ? '#1f2937' : '#ffffff',
                      border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                      borderRadius: '8px',
                      color: isDarkMode ? '#ffffff' : '#000000'
                    }}
                  />
                  <Bar dataKey="avgMarks" fill="#8b5cf6" radius={[0, 8, 8, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </motion.div>
          </div>

          {/* 4. Subject Performance - Pass Rate */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-6 rounded-2xl mb-6 ${
              isDarkMode 
                ? 'bg-gray-900 border border-gray-800' 
                : 'bg-white shadow-lg'
            }`}
          >
            <h2 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              ✅ Pass Percentage per Subject
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={subjectPerformanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke={isDarkMode ? '#374151' : '#e5e7eb'} />
                <XAxis dataKey="subject" stroke={isDarkMode ? '#9ca3af' : '#6b7280'} />
                <YAxis stroke={isDarkMode ? '#9ca3af' : '#6b7280'} domain={[0, 100]} />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: isDarkMode ? '#1f2937' : '#ffffff',
                    border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                    borderRadius: '8px',
                    color: isDarkMode ? '#ffffff' : '#000000'
                  }}
                />
                <Bar dataKey="passRate" fill="#10b981" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* 5. Semester Comparison Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-6 rounded-2xl mb-6 ${
              isDarkMode 
                ? 'bg-gray-900 border border-gray-800' 
                : 'bg-white shadow-lg'
            }`}
          >
            <h2 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              🔄 Semester Comparison - Pass Rate, CGPA & Backlogs
            </h2>
            <ResponsiveContainer width="100%" height={350}>
              <LineChart data={semesterComparisonData}>
                <CartesianGrid strokeDasharray="3 3" stroke={isDarkMode ? '#374151' : '#e5e7eb'} />
                <XAxis dataKey="semester" stroke={isDarkMode ? '#9ca3af' : '#6b7280'} />
                <YAxis stroke={isDarkMode ? '#9ca3af' : '#6b7280'} />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: isDarkMode ? '#1f2937' : '#ffffff',
                    border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
                    borderRadius: '8px',
                    color: isDarkMode ? '#ffffff' : '#000000'
                  }}
                />
                <Legend />
                <Line type="monotone" dataKey="passRate" stroke="#10b981" strokeWidth={2} name="Pass Rate (%)" />
                <Line type="monotone" dataKey="avgCGPA" stroke="#3b82f6" strokeWidth={2} name="Average CGPA" />
                <Line type="monotone" dataKey="backlogs" stroke="#ef4444" strokeWidth={2} name="Backlogs" />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>

          {/* 6. Top & Bottom Performers */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Top Performers */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-6 rounded-2xl ${
                isDarkMode 
                  ? 'bg-gray-900 border border-gray-800' 
                  : 'bg-white shadow-lg'
              }`}
            >
              <div className="flex items-center gap-2 mb-4">
                <Award className="w-5 h-5 text-yellow-500" />
                <h2 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  🏆 Top 5 Performers
                </h2>
              </div>
              <div className="space-y-3">
                {topPerformers.map((student, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-between p-3 rounded-lg ${
                      isDarkMode ? 'bg-gray-800' : 'bg-green-50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">
                        {index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : '🏅'}
                      </span>
                      <div>
                        <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                          {student.name}
                        </p>
                        <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          Rank #{student.rank}
                        </p>
                      </div>
                    </div>
                    <span className={`text-lg font-bold ${isDarkMode ? 'text-green-400' : 'text-green-600'}`}>
                      {student.cgpa}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Bottom Performers */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-6 rounded-2xl ${
                isDarkMode 
                  ? 'bg-gray-900 border border-gray-800' 
                  : 'bg-white shadow-lg'
              }`}
            >
              <div className="flex items-center gap-2 mb-4">
                <AlertCircle className="w-5 h-5 text-red-500" />
                <h2 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  ⚠️ Bottom 5 Performers (Need Attention)
                </h2>
              </div>
              <div className="space-y-3">
                {bottomPerformers.map((student, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-between p-3 rounded-lg ${
                      isDarkMode ? 'bg-gray-800' : 'bg-red-50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <AlertCircle className={`w-5 h-5 ${isDarkMode ? 'text-red-400' : 'text-red-500'}`} />
                      <div>
                        <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                          {student.name}
                        </p>
                        <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          Rank #{student.rank}
                        </p>
                      </div>
                    </div>
                    <span className={`text-lg font-bold ${isDarkMode ? 'text-red-400' : 'text-red-600'}`}>
                      {student.cgpa}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* 7. Best & Worst Subjects */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-6 rounded-2xl ${
                isDarkMode 
                  ? 'bg-gray-900 border border-gray-800' 
                  : 'bg-white shadow-lg'
              }`}
            >
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="w-5 h-5 text-green-500" />
                <h2 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  🌟 Best Performing Subject
                </h2>
              </div>
              <div className={`p-4 rounded-lg text-center ${isDarkMode ? 'bg-green-900/20' : 'bg-green-50'}`}>
                <p className={`text-3xl font-bold mb-2 ${isDarkMode ? 'text-green-400' : 'text-green-600'}`}>
                  Data Structures
                </p>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Average: 85 marks • Pass Rate: 95%
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-6 rounded-2xl ${
                isDarkMode 
                  ? 'bg-gray-900 border border-gray-800' 
                  : 'bg-white shadow-lg'
              }`}
            >
              <div className="flex items-center gap-2 mb-4">
                <AlertCircle className="w-5 h-5 text-red-500" />
                <h2 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  📛 Most Failed Subject
                </h2>
              </div>
              <div className={`p-4 rounded-lg text-center ${isDarkMode ? 'bg-red-900/20' : 'bg-red-50'}`}>
                <p className={`text-3xl font-bold mb-2 ${isDarkMode ? 'text-red-400' : 'text-red-600'}`}>
                  Operating System
                </p>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Average: 68 marks • Pass Rate: 82%
                </p>
              </div>
            </motion.div>
          </div>

          {/* 8. Export Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-6 rounded-2xl ${
              isDarkMode 
                ? 'bg-gray-900 border border-gray-800' 
                : 'bg-white shadow-lg'
            }`}
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 className={`text-lg font-semibold mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  📥 Export Analytics Report
                </h2>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Download charts, data & comprehensive reports
                </p>
              </div>
              <div className="flex gap-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleExportPDF}
                  className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-red-500 to-pink-600 text-white rounded-lg font-medium hover:shadow-lg transition-shadow"
                >
                  <FileText className="w-4 h-4" />
                  Export PDF
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleExportCSV}
                  className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-medium hover:shadow-lg transition-shadow"
                >
                  <Download className="w-4 h-4" />
                  Export CSV
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleExportImage}
                  className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg font-medium hover:shadow-lg transition-shadow"
                >
                  <Download className="w-4 h-4" />
                  Export Images
                </motion.button>
              </div>
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
}