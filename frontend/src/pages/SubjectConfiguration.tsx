import React from 'react';
import { Sidebar } from '../components/Sidebar';
import { ModernNavbar } from '../components/ModernNavbar';
import { useTheme } from '../context/ThemeContext';
import { 
  Plus, 
  Edit2, 
  Trash2, 
  BookOpen, 
  Clock,
  GraduationCap,
  Search,
  Save,
  X,
  Upload,
  FileJson,
  FileSpreadsheet,
  AlertCircle,
  CheckCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface Subject {
  id: string;
  code: string;
  name: string;
  credits: number;
  semester: number;
  department: string;
  type: 'Theory' | 'Practical' | 'Theory + Practical';
  totalHours: number;
}

export function SubjectConfiguration() {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [subjects, setSubjects] = React.useState<Subject[]>([
    { id: '1', code: 'CS101', name: 'Data Structures', credits: 4, semester: 3, department: 'CSE', type: 'Theory + Practical', totalHours: 60 },
    { id: '2', code: 'CS102', name: 'Database Management Systems', credits: 4, semester: 4, department: 'CSE', type: 'Theory + Practical', totalHours: 60 },
    { id: '3', code: 'CS103', name: 'Operating Systems', credits: 3, semester: 5, department: 'CSE', type: 'Theory', totalHours: 45 },
    { id: '4', code: 'CS104', name: 'Computer Networks', credits: 3, semester: 5, department: 'CSE', type: 'Theory', totalHours: 45 },
    { id: '5', code: 'MA101', name: 'Linear Algebra', credits: 4, semester: 2, department: 'Mathematics', type: 'Theory', totalHours: 60 },
    { id: '6', code: 'PH101', name: 'Physics Lab', credits: 2, semester: 1, department: 'Physics', type: 'Practical', totalHours: 30 },
  ]);

  const [isAddModalOpen, setIsAddModalOpen] = React.useState(false);
  const [editingSubject, setEditingSubject] = React.useState<Subject | null>(null);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [filterDepartment, setFilterDepartment] = React.useState('all');
  const [filterSemester, setFilterSemester] = React.useState('all');

  // Import modal states
  const [isImportModalOpen, setIsImportModalOpen] = React.useState(false);
  const [importPreviewData, setImportPreviewData] = React.useState<Subject[]>([]);
  const [importError, setImportError] = React.useState<string | null>(null);
  const [isDragging, setIsDragging] = React.useState(false);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const [formData, setFormData] = React.useState({
    code: '',
    name: '',
    credits: 3,
    semester: 1,
    department: '',
    type: 'Theory' as 'Theory' | 'Practical' | 'Theory + Practical',
    totalHours: 45,
  });

  const handleAddSubject = () => {
    const newSubject: Subject = {
      id: Date.now().toString(),
      ...formData,
    };
    setSubjects([...subjects, newSubject]);
    setIsAddModalOpen(false);
    resetForm();
  };

  const handleUpdateSubject = () => {
    if (editingSubject) {
      setSubjects(subjects.map(s => s.id === editingSubject.id ? { ...editingSubject, ...formData } : s));
      setEditingSubject(null);
      resetForm();
    }
  };

  const handleDeleteSubject = (id: string) => {
    if (confirm('Are you sure you want to delete this subject?')) {
      setSubjects(subjects.filter(s => s.id !== id));
    }
  };

  const openEditModal = (subject: Subject) => {
    setEditingSubject(subject);
    setFormData({
      code: subject.code,
      name: subject.name,
      credits: subject.credits,
      semester: subject.semester,
      department: subject.department,
      type: subject.type,
      totalHours: subject.totalHours,
    });
  };

  const resetForm = () => {
    setFormData({
      code: '',
      name: '',
      credits: 3,
      semester: 1,
      department: '',
      type: 'Theory',
      totalHours: 45,
    });
  };

  const closeModal = () => {
    setIsAddModalOpen(false);
    setEditingSubject(null);
    resetForm();
  };

  // Import functions
  const parseCSV = (csvText: string): Subject[] => {
    const lines = csvText.trim().split('\n');
    const headers = lines[0].split(',').map(h => h.trim().toLowerCase());
    
    const subjects: Subject[] = [];
    for (let i = 1; i < lines.length; i++) {
      const values = lines[i].split(',').map(v => v.trim());
      if (values.length < headers.length) continue;
      
      const subject: any = { id: Date.now().toString() + i };
      headers.forEach((header, index) => {
        const value = values[index];
        if (header === 'code') subject.code = value;
        else if (header === 'name') subject.name = value;
        else if (header === 'credits') subject.credits = parseInt(value) || 3;
        else if (header === 'semester') subject.semester = parseInt(value) || 1;
        else if (header === 'department') subject.department = value;
        else if (header === 'type') subject.type = value as any;
        else if (header === 'totalhours') subject.totalHours = parseInt(value) || 45;
      });
      
      if (subject.code && subject.name) {
        subjects.push(subject as Subject);
      }
    }
    return subjects;
  };

  const parseJSON = (jsonText: string): Subject[] => {
    try {
      const data = JSON.parse(jsonText);
      const array = Array.isArray(data) ? data : [data];
      
      return array.map((item, index) => ({
        id: Date.now().toString() + index,
        code: item.code || '',
        name: item.name || '',
        credits: item.credits || 3,
        semester: item.semester || 1,
        department: item.department || '',
        type: item.type || 'Theory',
        totalHours: item.totalHours || 45,
      })).filter(s => s.code && s.name);
    } catch (error) {
      throw new Error('Invalid JSON format');
    }
  };

  const handleFileSelect = async (file: File) => {
    setImportError(null);
    
    try {
      const text = await file.text();
      let parsedData: Subject[];
      
      if (file.name.endsWith('.json')) {
        parsedData = parseJSON(text);
      } else if (file.name.endsWith('.csv')) {
        parsedData = parseCSV(text);
      } else {
        throw new Error('Unsupported file type. Please upload .json or .csv files.');
      }
      
      if (parsedData.length === 0) {
        throw new Error('No valid subject data found in the file.');
      }
      
      setImportPreviewData(parsedData);
    } catch (error: any) {
      setImportError(error.message || 'Failed to parse file');
      setImportPreviewData([]);
    }
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const file = e.dataTransfer.files[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const confirmImport = () => {
    setSubjects([...subjects, ...importPreviewData]);
    setIsImportModalOpen(false);
    setImportPreviewData([]);
    setImportError(null);
  };

  const closeImportModal = () => {
    setIsImportModalOpen(false);
    setImportPreviewData([]);
    setImportError(null);
  };

  const filteredSubjects = subjects.filter(subject => {
    const matchesSearch = subject.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         subject.code.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDepartment = filterDepartment === 'all' || subject.department === filterDepartment;
    const matchesSemester = filterSemester === 'all' || subject.semester.toString() === filterSemester;
    return matchesSearch && matchesDepartment && matchesSemester;
  });

  const stats = {
    total: subjects.length,
    theory: subjects.filter(s => s.type === 'Theory').length,
    practical: subjects.filter(s => s.type === 'Practical').length,
    hybrid: subjects.filter(s => s.type === 'Theory + Practical').length,
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors">
      <Sidebar isDarkMode={isDarkMode} />
      
      <div className="ml-20">
        <ModernNavbar isDarkMode={isDarkMode} onToggleDarkMode={toggleDarkMode} />
        
        <main className="p-6 max-w-[1600px] mx-auto">
          {/* Page Header */}
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/20 flex-shrink-0">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className={`text-3xl font-bold tracking-tight ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Subject Configuration
                </h1>
                <p className={`text-base mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Add, edit & manage subjects, credit hours & course structure
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsImportModalOpen(true)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                  isDarkMode
                    ? 'bg-gray-800 text-white border border-gray-700 hover:bg-gray-750'
                    : 'bg-white text-gray-700 border border-gray-300 hover:border-gray-400 shadow-sm'
                }`}
              >
                <Upload className="w-5 h-5" />
                Import Data
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsAddModalOpen(true)}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg font-medium hover:shadow-lg transition-shadow"
              >
                <Plus className="w-5 h-5" />
                Add New Subject
              </motion.button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-4 rounded-xl ${
                isDarkMode 
                  ? 'bg-gray-900 border border-gray-800' 
                  : 'bg-white shadow-md'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
              </div>
              <h3 className={`text-2xl font-bold mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                {stats.total}
              </h3>
              <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Total Subjects
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className={`p-4 rounded-xl ${
                isDarkMode 
                  ? 'bg-gray-900 border border-gray-800' 
                  : 'bg-white shadow-md'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
              </div>
              <h3 className={`text-2xl font-bold mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                {stats.theory}
              </h3>
              <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Theory Subjects
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className={`p-4 rounded-xl ${
                isDarkMode 
                  ? 'bg-gray-900 border border-gray-800' 
                  : 'bg-white shadow-md'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-white" />
                </div>
              </div>
              <h3 className={`text-2xl font-bold mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                {stats.practical}
              </h3>
              <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Practical Subjects
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className={`p-4 rounded-xl ${
                isDarkMode 
                  ? 'bg-gray-900 border border-gray-800' 
                  : 'bg-white shadow-md'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
              </div>
              <h3 className={`text-2xl font-bold mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                {stats.hybrid}
              </h3>
              <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Theory + Practical
              </p>
            </motion.div>
          </div>

          {/* Search and Filter Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-4 rounded-2xl mb-6 ${
              isDarkMode 
                ? 'bg-gray-900 border border-gray-800' 
                : 'bg-white shadow-lg'
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-2 relative">
                <Search className={`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`} />
                <input
                  type="text"
                  placeholder="Search by subject name or code..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`w-full pl-10 pr-4 py-3 rounded-lg border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                    isDarkMode
                      ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500'
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'
                  }`}
                />
              </div>

              <select
                value={filterDepartment}
                onChange={(e) => setFilterDepartment(e.target.value)}
                title="Filter by department"
                className={`px-4 py-3 rounded-lg border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                  isDarkMode
                    ? 'bg-gray-800 border-gray-700 text-white hover:border-gray-600'
                    : 'bg-white border-gray-300 text-gray-900 hover:border-gray-400'
                }`}
              >
                <option value="all">All Departments</option>
                <option value="CSE">Computer Science</option>
                <option value="Mathematics">Mathematics</option>
                <option value="Physics">Physics</option>
                <option value="Electronics">Electronics</option>
              </select>

              <select
                value={filterSemester}
                onChange={(e) => setFilterSemester(e.target.value)}
                title="Filter by semester"
                className={`px-4 py-3 rounded-lg border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                  isDarkMode
                    ? 'bg-gray-800 border-gray-700 text-white hover:border-gray-600'
                    : 'bg-white border-gray-300 text-gray-900 hover:border-gray-400'
                }`}
              >
                <option value="all">All Semesters</option>
                {[1, 2, 3, 4, 5, 6, 7, 8].map(sem => (
                  <option key={sem} value={sem.toString()}>Semester {sem}</option>
                ))}
              </select>
            </div>
          </motion.div>

          {/* Subjects Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`rounded-2xl overflow-hidden ${
              isDarkMode 
                ? 'bg-gray-900 border border-gray-800' 
                : 'bg-white shadow-lg'
            }`}
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className={isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}>
                  <tr>
                    <th className={`px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Subject Code
                    </th>
                    <th className={`px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Subject Name
                    </th>
                    <th className={`px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Department
                    </th>
                    <th className={`px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Semester
                    </th>
                    <th className={`px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Type
                    </th>
                    <th className={`px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Credits
                    </th>
                    <th className={`px-6 py-4 text-right text-xs font-semibold uppercase tracking-wider ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className={`divide-y ${isDarkMode ? 'divide-gray-800' : 'divide-gray-200'}`}>
                  {filteredSubjects.map((subject, index) => (
                    <motion.tr
                      key={subject.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.05 }}
                      className={`hover:bg-opacity-50 transition-colors ${
                        isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-50'
                      }`}
                    >
                      <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                        {subject.code}
                      </td>
                      <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {subject.name}
                      </td>
                      <td className={`px-6 py-4 whitespace-nowrap text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {subject.department}
                      </td>
                      <td className={`px-6 py-4 whitespace-nowrap text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Semester {subject.semester}
                      </td>
                      <td className={`px-6 py-4 whitespace-nowrap text-sm`}>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          subject.type === 'Theory' 
                            ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                            : subject.type === 'Practical'
                            ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400'
                            : 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400'
                        }`}>
                          {subject.type}
                        </span>
                      </td>
                      <td className={`px-6 py-4 whitespace-nowrap text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {subject.credits}
                      </td>
                      <td className={`px-6 py-4 whitespace-nowrap text-right text-sm`}>
                        <div className="flex items-center justify-end gap-2">
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => openEditModal(subject)}
                            className={`p-2 rounded-lg transition-colors ${
                              isDarkMode
                                ? 'hover:bg-gray-800 text-blue-400'
                                : 'hover:bg-blue-50 text-blue-600'
                            }`}
                          >
                            <Edit2 className="w-4 h-4" />
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => handleDeleteSubject(subject.id)}
                            className={`p-2 rounded-lg transition-colors ${
                              isDarkMode
                                ? 'hover:bg-gray-800 text-red-400'
                                : 'hover:bg-red-50 text-red-600'
                            }`}
                          >
                            <Trash2 className="w-4 h-4" />
                          </motion.button>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </main>
      </div>

      {/* Add/Edit Modal */}
      <AnimatePresence>
        {(isAddModalOpen || editingSubject) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className={`w-full max-w-2xl rounded-2xl p-6 ${
                isDarkMode ? 'bg-gray-900 border border-gray-800' : 'bg-white shadow-2xl'
              }`}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {editingSubject ? 'Edit Subject' : 'Add New Subject'}
                </h2>
                <button
                  onClick={closeModal}
                  title="Close"
                  className={`p-2 rounded-lg transition-colors ${
                    isDarkMode ? 'hover:bg-gray-800 text-gray-400' : 'hover:bg-gray-100 text-gray-600'
                  }`}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Subject Code
                  </label>
                  <input
                    type="text"
                    value={formData.code}
                    onChange={(e) => setFormData({ ...formData, code: e.target.value })}
                    className={`w-full px-4 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      isDarkMode
                        ? 'bg-gray-800 border-gray-700 text-white'
                        : 'bg-white border-gray-300 text-gray-900'
                    }`}
                    placeholder="e.g., CS101"
                  />
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Subject Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full px-4 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      isDarkMode
                        ? 'bg-gray-800 border-gray-700 text-white'
                        : 'bg-white border-gray-300 text-gray-900'
                    }`}
                    placeholder="e.g., Data Structures"
                  />
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Department
                  </label>
                  <input
                    type="text"
                    value={formData.department}
                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                    className={`w-full px-4 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      isDarkMode
                        ? 'bg-gray-800 border-gray-700 text-white'
                        : 'bg-white border-gray-300 text-gray-900'
                    }`}
                    placeholder="e.g., CSE"
                  />
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Subject Type
                  </label>
                  <select
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value as any })}
                    title="Subject Type"
                    className={`w-full px-4 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      isDarkMode
                        ? 'bg-gray-800 border-gray-700 text-white'
                        : 'bg-white border-gray-300 text-gray-900'
                    }`}
                  >
                    <option value="Theory">Theory</option>
                    <option value="Practical">Practical</option>
                    <option value="Theory + Practical">Theory + Practical</option>
                  </select>
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Semester
                  </label>
                  <select
                    value={formData.semester}
                    onChange={(e) => setFormData({ ...formData, semester: parseInt(e.target.value) })}
                    title="Semester"
                    className={`w-full px-4 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      isDarkMode
                        ? 'bg-gray-800 border-gray-700 text-white'
                        : 'bg-white border-gray-300 text-gray-900'
                    }`}
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(sem => (
                      <option key={sem} value={sem}>Semester {sem}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Credits
                  </label>
                  <input
                    type="number"
                    value={formData.credits}
                    onChange={(e) => setFormData({ ...formData, credits: parseInt(e.target.value) })}
                    title="Credits"
                    className={`w-full px-4 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      isDarkMode
                        ? 'bg-gray-800 border-gray-700 text-white'
                        : 'bg-white border-gray-300 text-gray-900'
                    }`}
                    min="1"
                    max="6"
                  />
                </div>

                <div className="col-span-2">
                  <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Total Hours
                  </label>
                  <input
                    type="number"
                    value={formData.totalHours}
                    onChange={(e) => setFormData({ ...formData, totalHours: parseInt(e.target.value) })}
                    title="Total Hours"
                    className={`w-full px-4 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      isDarkMode
                        ? 'bg-gray-800 border-gray-700 text-white'
                        : 'bg-white border-gray-300 text-gray-900'
                    }`}
                    min="15"
                    max="120"
                    step="15"
                  />
                </div>
              </div>

              <div className="flex gap-3 justify-end">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={closeModal}
                  className={`px-6 py-2.5 rounded-lg font-medium transition-colors ${
                    isDarkMode
                      ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  Cancel
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={editingSubject ? handleUpdateSubject : handleAddSubject}
                  className="px-6 py-2.5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg font-medium hover:shadow-lg transition-shadow flex items-center gap-2"
                >
                  <Save className="w-4 h-4" />
                  {editingSubject ? 'Update Subject' : 'Add Subject'}
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Import Modal */}
      <AnimatePresence>
        {isImportModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={closeImportModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className={`w-full max-w-3xl rounded-2xl p-6 max-h-[90vh] overflow-y-auto ${
                isDarkMode ? 'bg-gray-900 border border-gray-800' : 'bg-white shadow-2xl'
              }`}
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    📥 Import Subject Data
                  </h2>
                  <p className={`text-sm mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Upload JSON or CSV file to bulk import subjects
                  </p>
                </div>
                <button
                  onClick={closeImportModal}
                  title="Close"
                  className={`p-2 rounded-lg transition-colors ${
                    isDarkMode ? 'hover:bg-gray-800 text-gray-400' : 'hover:bg-gray-100 text-gray-600'
                  }`}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* File Upload Area */}
              {importPreviewData.length === 0 && (
                <div
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  className={`border-2 border-dashed rounded-xl p-8 text-center transition-all ${
                    isDragging
                      ? isDarkMode
                        ? 'border-blue-500 bg-blue-500/10'
                        : 'border-blue-500 bg-blue-50'
                      : isDarkMode
                      ? 'border-gray-700 hover:border-gray-600'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  <Upload className={`w-12 h-12 mx-auto mb-3 ${
                    isDarkMode ? 'text-gray-600' : 'text-gray-400'
                  }`} />
                  <h3 className={`text-base font-semibold mb-1 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    Drag & drop your file here
                  </h3>
                  <p className={`text-sm mb-3 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    or click to browse
                  </p>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".json,.csv"
                    onChange={handleFileInputChange}
                    className="hidden"
                    title="Upload subject data file"
                  />
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => fileInputRef.current?.click()}
                    className="px-6 py-2.5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg font-medium hover:shadow-lg transition-shadow"
                  >
                    Browse Files
                  </motion.button>
                  <div className={`flex items-center justify-center gap-4 mt-4 text-sm ${
                    isDarkMode ? 'text-gray-500' : 'text-gray-500'
                  }`}>
                    <div className="flex items-center gap-2">
                      <FileJson className="w-4 h-4" />
                      <span>.JSON</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FileSpreadsheet className="w-4 h-4" />
                      <span>.CSV</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Error Message */}
              {importError && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 flex items-start gap-3"
                >
                  <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-red-800 dark:text-red-300 text-sm mb-1">
                      Import Failed
                    </h4>
                    <p className="text-sm text-red-700 dark:text-red-400">
                      {importError}
                    </p>
                  </div>
                </motion.div>
              )}

              {/* Preview Data */}
              {importPreviewData.length > 0 && (
                <div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className={`mb-4 p-4 rounded-lg ${isDarkMode ? 'bg-green-900/20 border border-green-800' : 'bg-green-50 border border-green-200'} flex items-start gap-3`}
                  >
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-green-800 dark:text-green-300 text-sm mb-1">
                        File Parsed Successfully
                      </h4>
                      <p className="text-sm text-green-700 dark:text-green-400">
                        Found {importPreviewData.length} valid subject(s) ready to import
                      </p>
                    </div>
                  </motion.div>

                  <div className={`rounded-xl border ${isDarkMode ? 'border-gray-800' : 'border-gray-200'} overflow-hidden max-h-96 overflow-y-auto`}>
                    <table className="w-full">
                      <thead className={`sticky top-0 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
                        <tr>
                          <th className={`px-4 py-3 text-left text-xs font-semibold uppercase ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            Code
                          </th>
                          <th className={`px-4 py-3 text-left text-xs font-semibold uppercase ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            Name
                          </th>
                          <th className={`px-4 py-3 text-left text-xs font-semibold uppercase ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            Dept
                          </th>
                          <th className={`px-4 py-3 text-left text-xs font-semibold uppercase ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            Sem
                          </th>
                          <th className={`px-4 py-3 text-left text-xs font-semibold uppercase ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            Type
                          </th>
                        </tr>
                      </thead>
                      <tbody className={`divide-y ${isDarkMode ? 'divide-gray-800' : 'divide-gray-200'}`}>
                        {importPreviewData.map((subject, index) => (
                          <tr key={index} className={isDarkMode ? 'hover:bg-gray-800/50' : 'hover:bg-gray-50'}>
                            <td className={`px-4 py-3 text-sm font-medium ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                              {subject.code}
                            </td>
                            <td className={`px-4 py-3 text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                              {subject.name}
                            </td>
                            <td className={`px-4 py-3 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                              {subject.department}
                            </td>
                            <td className={`px-4 py-3 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                              {subject.semester}
                            </td>
                            <td className={`px-4 py-3 text-sm`}>
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                subject.type === 'Theory' 
                                  ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                                  : subject.type === 'Practical'
                                  ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400'
                                  : 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400'
                              }`}>
                                {subject.type}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="flex gap-3 justify-end mt-6">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={closeImportModal}
                      className={`px-6 py-2.5 rounded-lg font-medium transition-colors ${
                        isDarkMode
                          ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      Cancel
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={confirmImport}
                      className="px-6 py-2.5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg font-medium hover:shadow-lg transition-shadow flex items-center gap-2"
                    >
                      <CheckCircle className="w-4 h-4" />
                      Import {importPreviewData.length} Subject(s)
                    </motion.button>
                  </div>
                </div>
              )}

              {/* Format Guide */}
              {importPreviewData.length === 0 && !importError && (
                <div className={`mt-4 p-3 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
                  <h4 className={`font-semibold text-xs mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    📋 File Format Guide:
                  </h4>
                  <div className="grid md:grid-cols-2 gap-3 text-xs">
                    <div>
                      <p className={`font-medium mb-1.5 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                        JSON Format:
                      </p>
                      <code className={`block p-2 rounded text-[10px] whitespace-pre overflow-x-auto ${isDarkMode ? 'bg-gray-900 text-gray-300' : 'bg-white text-gray-800'}`}>
{`[{
  "code": "CS101",
  "name": "Data...",
  "credits": 4,
  "semester": 3,
  "department": "CSE",
  "type": "Theory",
  "totalHours": 60
}]`}
                      </code>
                    </div>
                    <div>
                      <p className={`font-medium mb-1.5 ${isDarkMode ? 'text-green-400' : 'text-green-600'}`}>
                        CSV Format:
                      </p>
                      <code className={`block p-2 rounded text-[10px] whitespace-pre overflow-x-auto ${isDarkMode ? 'bg-gray-900 text-gray-300' : 'bg-white text-gray-800'}`}>
{`code,name,credits,...
CS101,Data Structures,4,3
CS102,DBMS,4,4`}
                      </code>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}