import React from 'react';
import { useNavigate, useLocation } from 'react-router';
import { 
  AlertCircle, 
  Upload, 
  X, 
  CheckCircle, 
  ArrowLeft,
  Loader2,
  FileImage,
  Video
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Sidebar } from '../components/Sidebar';
import { ModernNavbar } from '../components/ModernNavbar';
import { useTheme } from '../context/ThemeContext';

export function ReportIssue() {
  const navigate = useNavigate();
  const location = useLocation();
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [ticketId, setTicketId] = React.useState('');
  const [files, setFiles] = React.useState<File[]>([]);
  const [errors, setErrors] = React.useState<Record<string, string>>({});

  // Form state
  const [formData, setFormData] = React.useState({
    title: '',
    category: '',
    severity: '',
    description: '',
    stepsToReproduce: '',
    email: '',
    name: '',
    privacyConfirmed: false,
  });

  // Auto-capture device info
  const deviceInfo = React.useMemo(() => ({
    browser: navigator.userAgent,
    screenResolution: `${window.screen.width}x${window.screen.height}`,
    pageUrl: window.location.href,
    timestamp: new Date().toISOString(),
  }), []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);
    const validFiles: File[] = [];
    const newErrors: Record<string, string> = {};

    selectedFiles.forEach(file => {
      // Check file size (10MB max)
      if (file.size > 10 * 1024 * 1024) {
        newErrors.files = 'File size must be less than 10MB';
        return;
      }

      // Check file type
      const validTypes = ['image/jpeg', 'image/png', 'image/webp', 'video/mp4'];
      if (!validTypes.includes(file.type)) {
        newErrors.files = 'Only JPG, PNG, WEBP, and MP4 files are allowed';
        return;
      }

      validFiles.push(file);
    });

    // Max 3 files
    const totalFiles = [...files, ...validFiles];
    if (totalFiles.length > 3) {
      newErrors.files = 'Maximum 3 files allowed';
      setErrors(newErrors);
      return;
    }

    setFiles(totalFiles);
    setErrors(newErrors);
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.title.trim()) {
      newErrors.title = 'Issue title is required';
    } else if (formData.title.length > 100) {
      newErrors.title = 'Title must be 100 characters or less';
    }

    if (!formData.category) {
      newErrors.category = 'Please select a category';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    } else if (formData.description.length < 20) {
      newErrors.description = 'Description must be at least 20 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.privacyConfirmed) {
      newErrors.privacy = 'You must confirm the privacy statement';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Generate mock ticket ID
    const mockTicketId = `ISSUE-${Math.floor(Math.random() * 10000).toString().padStart(4, '0')}`;
    setTicketId(mockTicketId);
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      title: '',
      category: '',
      severity: '',
      description: '',
      stepsToReproduce: '',
      email: '',
      name: '',
      privacyConfirmed: false,
    });
    setFiles([]);
    setErrors({});
    setTicketId('');
  };

  const categories = [
    'Bug',
    'UI / UX Issue',
    'Performance Issue',
    'Payment Problem',
    'Account Issue',
    'Feature Request',
    'Security Concern',
    'Other',
  ];

  const severityLevels = [
    { value: 'low', label: 'Low – Minor inconvenience' },
    { value: 'medium', label: 'Medium – Feature partially broken' },
    { value: 'high', label: 'High – Major functionality broken' },
    { value: 'critical', label: 'Critical – System unusable' },
  ];

  return (
    <div className={`min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors`}>
      <Sidebar isDarkMode={isDarkMode} />
      <div className="ml-20">
        <ModernNavbar isDarkMode={isDarkMode} onToggleDarkMode={toggleDarkMode} />
        
        <div className="p-8">
          {/* Success State */}
          <AnimatePresence mode="wait">
            {isSubmitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="max-w-2xl mx-auto mt-12"
              >
                <div className={`rounded-2xl p-12 text-center shadow-sm border ${
                  isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'
                }`}>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: 'spring' }}
                  >
                    <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-green-500" />
                    </div>
                  </motion.div>
                  
                  <h2 className={`text-3xl font-bold mb-4 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    Issue Submitted Successfully!
                  </h2>
                  
                  <p className={`text-lg mb-8 ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    Thank you for bringing this to our attention. Our technical team has been notified.
                  </p>

                  <div className={`inline-block px-8 py-4 rounded-xl mb-8 ${
                    isDarkMode ? 'bg-gray-800/50 border border-gray-700' : 'bg-gray-50 border border-gray-200'
                  }`}>
                    <p className={`text-sm font-medium mb-1 ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      Reference Ticket ID
                    </p>
                    <p className="text-3xl font-bold tracking-tight text-blue-500">
                      {ticketId}
                    </p>
                  </div>

                  <p className={`text-sm mb-10 ${
                    isDarkMode ? 'text-gray-500' : 'text-gray-500'
                  }`}>
                    Estimated response time: <span className="font-semibold">24-48 hours</span>
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                      onClick={handleReset}
                      className={`px-6 py-3 rounded-xl font-medium transition-colors ${
                        isDarkMode
                          ? 'bg-gray-800 text-white hover:bg-gray-700 border border-gray-700'
                          : 'bg-white text-gray-900 hover:bg-gray-50 border border-gray-200'
                      }`}
                    >
                      Submit Another Issue
                    </button>
                    <button
                      onClick={() => navigate('/dashboard')}
                      className="px-6 py-3 rounded-xl font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-sm"
                    >
                      Return to Dashboard
                    </button>
                  </div>
                </div>
              </motion.div>
            ) : (
              /* Form State */
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="w-full"
              >
                {/* Header */}
                <div className="mb-8 flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/20 flex-shrink-0">
                      <AlertCircle className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h1 className={`text-3xl font-bold tracking-tight ${
                        isDarkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        Report an Issue
                      </h1>
                      <p className={`text-base mt-1 ${
                        isDarkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        Help us understand the problem so we can fix it faster.
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => navigate('/dashboard')}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors mt-1 ${
                      isDarkMode 
                        ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white' 
                        : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                    }`}
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Dashboard
                  </button>
                </div>

                {/* Unified Form Card */}
                <form onSubmit={handleSubmit}>
                  <div className={`rounded-2xl shadow-sm border ${
                    isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'
                  }`}>
                    
                    {/* Section: Issue Details */}
                    <div className="p-8">
                      <h2 className={`text-lg font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        Issue Details
                      </h2>
                      <div className="space-y-6">
                        {/* Issue Title */}
                        <div>
                          <label className={`block text-sm font-semibold mb-2 ${
                            isDarkMode ? 'text-gray-200' : 'text-gray-700'
                          }`}>
                            Issue Title <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleInputChange}
                            placeholder="Briefly describe the issue"
                            maxLength={100}
                            className={`w-full px-4 py-3 rounded-xl border transition-colors ${
                              errors.title
                                ? 'border-red-500 focus:border-red-500'
                                : isDarkMode
                                ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-blue-500'
                                : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400 focus:border-blue-500'
                            } outline-none focus:ring-2 focus:ring-blue-500/20`}
                          />
                          {errors.title && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.title}</p>}
                          <p className={`text-xs mt-1.5 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                            {formData.title.length}/100 characters
                          </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {/* Category */}
                          <div>
                            <label className={`block text-sm font-semibold mb-2 ${
                              isDarkMode ? 'text-gray-200' : 'text-gray-700'
                            }`}>
                              Category <span className="text-red-500">*</span>
                            </label>
                            <select
                              name="category"
                              value={formData.category}
                              onChange={handleInputChange}
                              title="Category"
                              className={`w-full px-4 py-3 rounded-xl border transition-colors ${
                                errors.category
                                  ? 'border-red-500 focus:border-red-500'
                                  : isDarkMode
                                  ? 'bg-gray-800 border-gray-700 text-white focus:border-blue-500'
                                  : 'bg-gray-50 border-gray-200 text-gray-900 focus:border-blue-500'
                              } outline-none focus:ring-2 focus:ring-blue-500/20 appearance-none`}
                            >
                              <option value="">Select a category</option>
                              {categories.map(cat => (
                                <option key={cat} value={cat}>{cat}</option>
                              ))}
                            </select>
                            {errors.category && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.category}</p>}
                          </div>

                          {/* Severity */}
                          <div>
                            <label className={`block text-sm font-semibold mb-2 ${
                              isDarkMode ? 'text-gray-200' : 'text-gray-700'
                            }`}>
                              Severity
                            </label>
                            <select
                              name="severity"
                              value={formData.severity}
                              onChange={handleInputChange}
                              title="Severity"
                              className={`w-full px-4 py-3 rounded-xl border transition-colors ${
                                isDarkMode
                                  ? 'bg-gray-800 border-gray-700 text-white focus:border-blue-500'
                                  : 'bg-gray-50 border-gray-200 text-gray-900 focus:border-blue-500'
                              } outline-none focus:ring-2 focus:ring-blue-500/20 appearance-none`}
                            >
                              <option value="">Select severity level</option>
                              {severityLevels.map(level => (
                                <option key={level.value} value={level.value}>
                                  {level.label}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>

                        {/* Description */}
                        <div>
                          <label className={`block text-sm font-semibold mb-2 ${
                            isDarkMode ? 'text-gray-200' : 'text-gray-700'
                          }`}>
                            Detailed Description <span className="text-red-500">*</span>
                          </label>
                          <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleInputChange}
                            placeholder="• What were you trying to do?&#10;• What did you expect to happen?&#10;• What actually happened?"
                            rows={6}
                            className={`w-full px-4 py-3 rounded-xl border transition-colors resize-none ${
                              errors.description
                                ? 'border-red-500 focus:border-red-500'
                                : isDarkMode
                                ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-blue-500'
                                : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400 focus:border-blue-500'
                            } outline-none focus:ring-2 focus:ring-blue-500/20`}
                          />
                          {errors.description && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.description}</p>}
                        </div>

                        {/* Steps to Reproduce */}
                        <div>
                          <label className={`block text-sm font-semibold mb-2 ${
                            isDarkMode ? 'text-gray-200' : 'text-gray-700'
                          }`}>
                            Steps to Reproduce
                          </label>
                          <textarea
                            name="stepsToReproduce"
                            value={formData.stepsToReproduce}
                            onChange={handleInputChange}
                            placeholder="1. Go to...&#10;2. Click on...&#10;3. See error..."
                            rows={4}
                            className={`w-full px-4 py-3 rounded-xl border transition-colors resize-none ${
                              isDarkMode
                                ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-blue-500'
                                : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400 focus:border-blue-500'
                            } outline-none focus:ring-2 focus:ring-blue-500/20`}
                          />
                        </div>
                      </div>
                    </div>

                    <div className={`h-px w-full ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'}`} />

                    {/* Section: Context & Contact */}
                    <div className="p-8">
                      <h2 className={`text-lg font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        Context & Contact
                      </h2>
                      <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className={`block text-sm font-semibold mb-2 ${
                              isDarkMode ? 'text-gray-200' : 'text-gray-700'
                            }`}>
                              Email <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              placeholder="your@email.com"
                              className={`w-full px-4 py-3 rounded-xl border transition-colors ${
                                errors.email
                                  ? 'border-red-500 focus:border-red-500'
                                  : isDarkMode
                                  ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-blue-500'
                                  : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400 focus:border-blue-500'
                              } outline-none focus:ring-2 focus:ring-blue-500/20`}
                            />
                            {errors.email && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.email}</p>}
                          </div>

                          <div>
                            <label className={`block text-sm font-semibold mb-2 ${
                              isDarkMode ? 'text-gray-200' : 'text-gray-700'
                            }`}>
                              Name <span className="text-gray-400 font-normal">(Optional)</span>
                            </label>
                            <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              placeholder="Your name"
                              className={`w-full px-4 py-3 rounded-xl border transition-colors ${
                                isDarkMode
                                  ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-blue-500'
                                  : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400 focus:border-blue-500'
                              } outline-none focus:ring-2 focus:ring-blue-500/20`}
                            />
                          </div>
                        </div>

                        <div>
                          <label className={`block text-sm font-semibold mb-2 ${
                            isDarkMode ? 'text-gray-200' : 'text-gray-700'
                          }`}>
                            Page URL (Auto-captured)
                          </label>
                          <input
                            type="text"
                            value={deviceInfo.pageUrl}
                            readOnly
                            title="Page URL"
                            className={`w-full px-4 py-3 rounded-xl border cursor-not-allowed ${
                              isDarkMode
                                ? 'bg-gray-800/50 border-gray-700 text-gray-500'
                                : 'bg-gray-50 border-gray-200 text-gray-500'
                            }`}
                          />
                        </div>
                      </div>
                    </div>

                    <div className={`h-px w-full ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'}`} />

                    {/* Section: Attachments */}
                    <div className="p-8">
                      <h2 className={`text-lg font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        Attachments
                      </h2>
                      <div>
                        <div className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors ${
                          isDarkMode
                            ? 'border-gray-700 hover:border-gray-500 bg-gray-800/50'
                            : 'border-gray-300 hover:border-blue-400 bg-gray-50'
                        }`}>
                          <input
                            type="file"
                            id="file-upload"
                            accept=".jpg,.jpeg,.png,.webp,.mp4"
                            multiple
                            onChange={handleFileUpload}
                            className="hidden"
                            title="Upload attachments"
                          />
                          <label htmlFor="file-upload" className="cursor-pointer block">
                            <div className={`w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center ${
                              isDarkMode ? 'bg-gray-800' : 'bg-white shadow-sm border border-gray-100'
                            }`}>
                              <Upload className={`w-7 h-7 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                            </div>
                            <p className={`text-base font-medium mb-1 ${
                              isDarkMode ? 'text-gray-300' : 'text-gray-700'
                            }`}>
                              Click to upload or drag and drop
                            </p>
                            <p className={`text-sm ${
                              isDarkMode ? 'text-gray-500' : 'text-gray-500'
                            }`}>
                              JPG, PNG, WEBP, MP4 (max 10MB)
                            </p>
                          </label>
                        </div>
                        {errors.files && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.files}</p>}

                        {/* Uploaded Files */}
                        {files.length > 0 && (
                          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {files.map((file, index) => (
                              <div
                                key={index}
                                className={`flex items-center gap-3 p-4 rounded-xl border ${
                                  isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200 shadow-sm'
                                }`}
                              >
                                {file.type.startsWith('image/') ? (
                                  <FileImage className={`w-6 h-6 flex-shrink-0 ${isDarkMode ? 'text-blue-400' : 'text-blue-500'}`} />
                                ) : (
                                  <Video className={`w-6 h-6 flex-shrink-0 ${isDarkMode ? 'text-purple-400' : 'text-purple-500'}`} />
                                )}
                                <div className="flex-1 min-w-0">
                                  <p className={`text-sm font-medium truncate ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                    {file.name}
                                  </p>
                                  <p className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                                    {(file.size / 1024 / 1024).toFixed(2)} MB
                                  </p>
                                </div>
                                <button
                                  type="button"
                                  onClick={() => removeFile(index)}
                                  title="Remove file"
                                  className={`p-2 rounded-lg transition-colors ${
                                    isDarkMode
                                      ? 'hover:bg-gray-700 text-gray-400 hover:text-red-400'
                                      : 'hover:bg-gray-100 text-gray-500 hover:text-red-500'
                                  }`}
                                >
                                  <X className="w-5 h-5" />
                                </button>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Section: Actions */}
                    <div className={`p-8 rounded-b-2xl ${
                      isDarkMode ? 'bg-gray-800/30' : 'bg-gray-50'
                    }`}>
                      <div className={`p-4 rounded-xl border mb-6 ${
                        errors.privacy
                          ? 'border-red-500/50 bg-red-50/50 dark:bg-red-500/10'
                          : isDarkMode
                          ? 'border-gray-700 bg-gray-800'
                          : 'border-gray-200 bg-white'
                      }`}>
                        <label className="flex items-start gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            name="privacyConfirmed"
                            checked={formData.privacyConfirmed}
                            onChange={handleInputChange}
                            title="Privacy confirmation"
                            className="mt-1 w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 focus:ring-offset-0 bg-white"
                          />
                          <span className={`text-sm leading-snug ${
                            isDarkMode ? 'text-gray-300' : 'text-gray-700'
                          }`}>
                            I confirm this report does not include sensitive personal data.{' '}
                            <span className="text-red-500">*</span>
                          </span>
                        </label>
                        {errors.privacy && (
                          <p className="text-red-500 text-sm mt-2 ml-8 font-medium">{errors.privacy}</p>
                        )}
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                          type="button"
                          onClick={() => navigate('/dashboard')}
                          className={`px-8 py-3 rounded-xl font-medium transition-colors border ${
                            isDarkMode
                              ? 'border-gray-700 text-gray-300 hover:bg-gray-800'
                              : 'border-gray-300 text-gray-700 hover:bg-gray-100 bg-white'
                          }`}
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="px-8 py-3 rounded-xl font-medium bg-blue-600 text-white hover:bg-blue-700 hover:shadow-md transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 min-w-[200px]"
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="w-5 h-5 animate-spin" />
                              Submitting...
                            </>
                          ) : (
                            'Submit Report'
                          )}
                        </button>
                      </div>
                    </div>

                  </div>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}