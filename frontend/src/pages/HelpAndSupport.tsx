import React from 'react';
import { useNavigate } from 'react-router';
import { 
  HelpCircle, 
  ArrowLeft, 
  Book, 
  Zap, 
  Shield, 
  FileText, 
  TrendingUp, 
  Users, 
  BookOpen, 
  AlertCircle,
  CheckCircle,
  Mail,
  MessageCircle,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Lightbulb,
  Upload
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Sidebar } from '../components/Sidebar';
import { ModernNavbar } from '../components/ModernNavbar';
import { useTheme } from '../context/ThemeContext';

export function HelpAndSupport() {
  const navigate = useNavigate();
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [expandedFaq, setExpandedFaq] = React.useState<number | null>(null);
  const [activeTab, setActiveTab] = React.useState<'overview' | 'features' | 'faq' | 'troubleshoot'>('overview');

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const features = [
    {
      icon: FileText,
      title: 'Results Management',
      description: 'Upload semester result PDFs and automatically extract student performance data with AI-powered parsing.',
      tips: [
        'Supports PDF format with clear text (not scanned images)',
        'Upload multiple files at once for batch processing',
        'Review extracted data before finalizing',
      ],
    },
    {
      icon: TrendingUp,
      title: 'Advanced Analytics',
      description: 'Deep dive into performance trends with interactive charts, filters, and comprehensive statistical insights.',
      tips: [
        'Filter by semester, department, or subject',
        'Compare performance across multiple semesters',
        'Export charts and reports for presentations',
      ],
    },
    {
      icon: Users,
      title: 'Student Management',
      description: 'Track individual student progress, view detailed profiles, and monitor academic performance over time.',
      tips: [
        'Search students by name, roll number, or department',
        'View semester-wise performance history',
        'Identify at-risk students early',
      ],
    },
    {
      icon: BookOpen,
      title: 'Subject Configuration',
      description: 'Manage subjects, credit hours, course codes, and configure grading schemes for your institution.',
      tips: [
        'Add subjects with credit hours and course codes',
        'Configure pass/fail thresholds',
        'Link subjects to specific departments',
      ],
    },
  ];

  const faqs = [
    {
      question: 'What is ScoreSight AI Result Analyzer?',
      answer: 'ScoreSight (AI Result Analyzer) is a comprehensive academic performance analysis platform designed for college teachers and administrators. It automatically extracts data from semester result PDFs, organizes it into a structured database, and generates insightful performance analytics to help institutions make data-driven decisions.',
    },
    {
      question: 'What file formats are supported for result uploads?',
      answer: 'Currently, the system supports PDF files with readable text content. The PDFs should contain structured result data (student names, roll numbers, subjects, marks). Scanned image PDFs may not work correctly and should be converted to text-based PDFs first using OCR tools.',
    },
    {
      question: 'How does the PDF extraction work?',
      answer: 'Our AI-powered system analyzes the structure of your uploaded PDF, identifies key data points (student information, subjects, marks, grades), and automatically extracts them into a structured format. The system uses pattern recognition to handle various PDF layouts and formats commonly used by universities.',
    },
    {
      question: 'Can I edit the extracted data if there are errors?',
      answer: 'Yes! After the initial extraction, you can review all data and make manual corrections before finalizing. The system provides a preview interface where you can edit student names, marks, grades, and other extracted information to ensure 100% accuracy.',
    },
    {
      question: 'How do I interpret the analytics dashboard?',
      answer: "The Analytics page displays KPIs (Key Performance Indicators) at the top showing overall statistics. Below that, you'll find interactive charts showing student performance distribution, subject-wise analysis, semester comparisons, and trend analysis. Use the filters to narrow down data by semester, department, or subject. Hover over charts for detailed information.",
    },
    {
      question: 'Is my data secure and private?',
      answer: 'Absolutely. We take data security seriously. All data is stored securely with encryption. Access is restricted to authorized users only. We do not share any student or institutional data with third parties. The platform is designed for internal institutional use only.',
    },
    {
      question: 'Can I export reports and analytics?',
      answer: 'Yes, you can export data in multiple formats including CSV, Excel, and PDF. The export functionality is available on the Results page, Analytics page, and Student Management sections. Exported reports include all visible data and charts based on your current filters.',
    },
    {
      question: 'How do I add new subjects to the system?',
      answer: 'Navigate to Subject Configuration from the sidebar. Click "Add Subject" and fill in the required details including subject name, course code, credit hours, department, and semester. You can also set pass/fail thresholds and configure grading schemes specific to each subject.',
    },
    {
      question: 'What should I do if the PDF upload fails?',
      answer: 'First, ensure your PDF is text-based (not a scanned image). Check that the file size is under 10MB. Make sure the PDF contains structured result data in a tabular format. If the issue persists, try splitting large PDFs into smaller files or contact support through the Report Issue page.',
    },
    {
      question: 'Can multiple users access the system simultaneously?',
      answer: 'Yes, the system supports multiple concurrent users. Different user roles (Administrator, Teacher, Viewer) can be configured with specific permissions. Administrators have full access, while Teachers may have limited access to their department data only.',
    },
    {
      question: 'How do I identify at-risk students?',
      answer: 'Use the Analytics page filters to identify students with low CGPA or failing grades. The "Bottom Performers" section shows students who need attention. You can also use the Student Management page to search and filter students by performance metrics and view their detailed academic history.',
    },
    {
      question: 'What happens to old semester data?',
      answer: "All historical data is preserved in the system. You can access any semester's data using the semester filter available on most pages. This allows you to track student progress over multiple semesters and compare performance trends year-over-year.",
    },
    {
      question: 'Can I customize the grading system?',
      answer: "Yes, in Subject Configuration, you can define custom grading schemes, credit hours, and pass/fail thresholds for each subject. This flexibility allows the system to adapt to your institution's specific grading policies and requirements.",
    },
    {
      question: 'How do I reset my password?',
      answer: "On the login page, click \"Forgot Password\" and enter your registered email address. You'll receive a password reset link via email. Follow the link to create a new password. If you don't receive the email, check your spam folder or contact your system administrator.",
    },
    {
      question: 'What browsers are supported?',
      answer: 'ScoreSight works best on modern browsers including Google Chrome (recommended), Mozilla Firefox, Microsoft Edge, and Safari. Make sure your browser is updated to the latest version for optimal performance. Internet Explorer is not supported.',
    },
  ];

  const gettingStartedSteps = [
    {
      step: 1,
      title: 'Upload Result PDFs',
      description: 'Navigate to the Results page and click "Upload PDF". Select your semester result PDF files (text-based PDFs work best).',
    },
    {
      step: 2,
      title: 'Review Extracted Data',
      description: 'The system will automatically extract student data. Review the preview to ensure accuracy and make any necessary corrections.',
    },
    {
      step: 3,
      title: 'Configure Subjects',
      description: "Go to Subject Configuration and add your institution's subjects with credit hours, course codes, and grading schemes.",
    },
    {
      step: 4,
      title: 'Analyze Performance',
      description: 'Visit the Analytics page to view comprehensive performance metrics, charts, and insights. Use filters to drill down into specific data.',
    },
    {
      step: 5,
      title: 'Monitor Students',
      description: 'Use Student Management to track individual progress, identify at-risk students, and view detailed academic histories.',
    },
  ];

  const troubleshootingSections = [
    {
      title: 'PDF Upload Issues',
      icon: Upload,
      items: [
        'Ensure PDF is text-based, not a scanned image',
        'Check file size is under 10MB',
        'Try splitting large files into smaller PDFs',
        'Verify PDF contains structured tabular data',
      ],
    },
    {
      title: 'Data Extraction Errors',
      icon: AlertCircle,
      items: [
        'Review extracted data before finalizing',
        'Manually correct any misread fields',
        'Ensure consistent PDF formatting across files',
        'Contact support if issues persist',
      ],
    },
    {
      title: 'Performance Issues',
      icon: Zap,
      items: [
        'Clear browser cache and cookies',
        'Use latest version of Chrome or Firefox',
        'Check internet connection stability',
        'Reduce number of active filters on Analytics page',
      ],
    },
  ];

  const tabs = [
    { id: 'overview' as const, label: 'Overview', icon: Book },
    { id: 'features' as const, label: 'Features', icon: Lightbulb },
    { id: 'faq' as const, label: 'FAQ', icon: HelpCircle },
    { id: 'troubleshoot' as const, label: 'Troubleshooting', icon: AlertCircle },
  ];

  return (
    <div className={`min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors`}>
      <Sidebar isDarkMode={isDarkMode} />
      <div className="ml-20">
        <ModernNavbar isDarkMode={isDarkMode} onToggleDarkMode={toggleDarkMode} />
        
        <div className="p-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full"
          >
            {/* Header */}
            <div className="mb-8 flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/20 flex-shrink-0">
                  <HelpCircle className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className={`text-3xl font-bold tracking-tight ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    Help & Support Center
                  </h1>
                  <p className={`text-base mt-1 ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    Everything you need to know about ScoreSight AI Result Analyzer
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

            {/* Unified Card */}
            <div className={`rounded-2xl shadow-sm border ${
              isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'
            }`}>
              
              {/* Tab Navigation */}
              <div className={`p-2 border-b ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`}>
                <div className="flex gap-1">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors flex-1 justify-center ${
                        activeTab === tab.id
                          ? isDarkMode
                            ? 'bg-blue-600/20 text-blue-400'
                            : 'bg-blue-50 text-blue-600'
                          : isDarkMode
                          ? 'text-gray-400 hover:text-gray-200 hover:bg-gray-800'
                          : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <tab.icon className="w-4 h-4" />
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tab Content */}
              <AnimatePresence mode="wait">
                {/* Overview Tab */}
                {activeTab === 'overview' && (
                  <motion.div
                    key="overview"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                  >
                    {/* Welcome */}
                    <div className="p-8">
                      <h2 className={`text-lg font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        Welcome to ScoreSight
                      </h2>
                      <p className={`text-sm leading-relaxed mb-6 ${
                        isDarkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        ScoreSight (AI Result Analyzer) is your comprehensive academic performance analysis platform. 
                        Designed specifically for college teachers and administrators, our system automatically extracts 
                        data from semester result PDFs, organizes it into a structured database, and generates powerful 
                        insights to help your institution make data-driven decisions.
                      </p>

                      <div className="grid grid-cols-3 gap-4">
                        {[
                          { icon: Zap, title: 'Fast & Automated', desc: 'AI-powered PDF extraction saves hours of manual data entry', color: 'yellow' },
                          { icon: TrendingUp, title: 'Powerful Analytics', desc: 'Interactive charts and comprehensive performance insights', color: 'green' },
                          { icon: Shield, title: 'Secure & Private', desc: 'Your data is encrypted and never shared with third parties', color: 'blue' },
                        ].map((item, i) => (
                          <div key={i} className={`p-4 rounded-xl border ${
                            isDarkMode ? 'border-gray-800 bg-gray-800/50' : 'border-gray-100 bg-gray-50'
                          }`}>
                            <item.icon className={`w-6 h-6 mb-3 ${
                              item.color === 'yellow' 
                                ? isDarkMode ? 'text-yellow-400' : 'text-yellow-500'
                                : item.color === 'green'
                                ? isDarkMode ? 'text-green-400' : 'text-green-500'
                                : isDarkMode ? 'text-blue-400' : 'text-blue-500'
                            }`} />
                            <h3 className={`text-sm font-semibold mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                              {item.title}
                            </h3>
                            <p className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                              {item.desc}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className={`h-px w-full ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'}`} />

                    {/* Getting Started */}
                    <div className="p-8">
                      <div className="flex items-center gap-3 mb-2">
                        <Book className={`w-5 h-5 ${isDarkMode ? 'text-blue-400' : 'text-blue-500'}`} />
                        <h2 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                          Getting Started
                        </h2>
                      </div>
                      <p className={`text-sm mb-6 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Follow these simple steps to start analyzing your academic results.
                      </p>
                      <div className="space-y-4">
                        {gettingStartedSteps.map((item) => (
                          <div key={item.step} className="flex gap-4 items-start">
                            <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold ${
                              isDarkMode 
                                ? 'bg-blue-500/20 text-blue-400' 
                                : 'bg-blue-100 text-blue-600'
                            }`}>
                              {item.step}
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className={`text-sm font-semibold mb-0.5 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                {item.title}
                              </h3>
                              <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                {item.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className={`h-px w-full ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'}`} />

                    {/* Contact & Support */}
                    <div className="p-8">
                      <h2 className={`text-lg font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        Need More Help?
                      </h2>
                      <p className={`text-sm mb-6 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        If you couldn't find the answer to your question, our support team is here to help.
                      </p>
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className={`p-5 rounded-xl border ${
                          isDarkMode ? 'border-gray-800 bg-gray-800/50' : 'border-gray-100 bg-gray-50'
                        }`}>
                          <Mail className={`w-6 h-6 mb-3 ${isDarkMode ? 'text-blue-400' : 'text-blue-500'}`} />
                          <h3 className={`text-sm font-semibold mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                            Email Support
                          </h3>
                          <p className={`text-xs mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            Get help via email
                          </p>
                          <a 
                            href="mailto:support@scoresight.edu"
                            className={`text-xs font-medium ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}
                          >
                            support@scoresight.edu
                          </a>
                        </div>
                        <div className={`p-5 rounded-xl border ${
                          isDarkMode ? 'border-gray-800 bg-gray-800/50' : 'border-gray-100 bg-gray-50'
                        }`}>
                          <MessageCircle className={`w-6 h-6 mb-3 ${isDarkMode ? 'text-green-400' : 'text-green-500'}`} />
                          <h3 className={`text-sm font-semibold mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                            Response Time
                          </h3>
                          <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            We typically respond within 24-48 hours during business days
                          </p>
                        </div>
                      </div>

                      <button
                        onClick={() => navigate('/dashboard/report-issue')}
                        className="w-full px-6 py-3 rounded-xl font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-sm flex items-center justify-center gap-2"
                      >
                        <AlertCircle className="w-5 h-5" />
                        Report an Issue
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* Features Tab */}
                {activeTab === 'features' && (
                  <motion.div
                    key="features"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="p-8">
                      <h2 className={`text-lg font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        Key Features & Best Practices
                      </h2>
                      <p className={`text-sm mb-6 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Learn how to get the most out of each feature in ScoreSight.
                      </p>
                      <div className="space-y-4">
                        {features.map((feature, index) => (
                          <div key={index} className={`p-5 rounded-xl border ${
                            isDarkMode ? 'border-gray-800 bg-gray-800/30' : 'border-gray-100 bg-gray-50'
                          }`}>
                            <div className="flex items-start gap-4">
                              <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center ${
                                isDarkMode ? 'bg-blue-500/20' : 'bg-blue-100'
                              }`}>
                                <feature.icon className={`w-5 h-5 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                              </div>
                              <div className="flex-1 min-w-0">
                                <h3 className={`text-sm font-semibold mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                  {feature.title}
                                </h3>
                                <p className={`text-xs mb-3 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                  {feature.description}
                                </p>
                                <div className="space-y-1.5">
                                  {feature.tips.map((tip, idx) => (
                                    <div key={idx} className="flex items-center gap-2">
                                      <CheckCircle className={`w-3.5 h-3.5 flex-shrink-0 ${
                                        isDarkMode ? 'text-green-400' : 'text-green-500'
                                      }`} />
                                      <span className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                        {tip}
                                      </span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* FAQ Tab */}
                {activeTab === 'faq' && (
                  <motion.div
                    key="faq"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="p-8">
                      <h2 className={`text-lg font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        Frequently Asked Questions
                      </h2>
                      <p className={`text-sm mb-6 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Find answers to common questions about ScoreSight.
                      </p>
                      <div className="space-y-2">
                        {faqs.map((faq, index) => (
                          <div key={index} className={`rounded-xl border overflow-hidden transition-colors ${
                            expandedFaq === index
                              ? isDarkMode ? 'border-blue-500/30 bg-blue-500/5' : 'border-blue-200 bg-blue-50/30'
                              : isDarkMode ? 'border-gray-800 bg-gray-800/30' : 'border-gray-100 bg-gray-50'
                          }`}>
                            <button
                              onClick={() => toggleFaq(index)}
                              className="w-full px-5 py-4 flex items-center justify-between text-left"
                            >
                              <span className={`text-sm font-semibold pr-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                {faq.question}
                              </span>
                              <div className={`flex-shrink-0 w-6 h-6 rounded-md flex items-center justify-center ${
                                expandedFaq === index
                                  ? isDarkMode ? 'bg-blue-500/20' : 'bg-blue-100'
                                  : isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
                              }`}>
                                {expandedFaq === index ? (
                                  <ChevronUp className={`w-3.5 h-3.5 ${
                                    expandedFaq === index
                                      ? isDarkMode ? 'text-blue-400' : 'text-blue-600'
                                      : isDarkMode ? 'text-gray-400' : 'text-gray-600'
                                  }`} />
                                ) : (
                                  <ChevronDown className={`w-3.5 h-3.5 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`} />
                                )}
                              </div>
                            </button>
                            <AnimatePresence>
                              {expandedFaq === index && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: 'auto', opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.2 }}
                                >
                                  <div className={`px-5 pb-4 border-t ${
                                    isDarkMode ? 'border-gray-800' : 'border-gray-200'
                                  }`}>
                                    <p className={`text-xs leading-relaxed pt-3 ${
                                      isDarkMode ? 'text-gray-400' : 'text-gray-600'
                                    }`}>
                                      {faq.answer}
                                    </p>
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Troubleshooting Tab */}
                {activeTab === 'troubleshoot' && (
                  <motion.div
                    key="troubleshoot"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="p-8">
                      <h2 className={`text-lg font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        Troubleshooting Guide
                      </h2>
                      <p className={`text-sm mb-6 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Common issues and how to resolve them.
                      </p>
                      <div className="space-y-4">
                        {troubleshootingSections.map((section, index) => (
                          <div key={index} className={`p-5 rounded-xl border ${
                            isDarkMode ? 'border-gray-800 bg-gray-800/30' : 'border-gray-100 bg-gray-50'
                          }`}>
                            <div className="flex items-center gap-3 mb-3">
                              <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                                isDarkMode ? 'bg-orange-500/20' : 'bg-orange-100'
                              }`}>
                                <section.icon className={`w-4 h-4 ${isDarkMode ? 'text-orange-400' : 'text-orange-500'}`} />
                              </div>
                              <h3 className={`text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                {section.title}
                              </h3>
                            </div>
                            <ul className="space-y-2 ml-11">
                              {section.items.map((item, idx) => (
                                <li key={idx} className="flex items-center gap-2">
                                  <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                                    isDarkMode ? 'bg-gray-600' : 'bg-gray-300'
                                  }`} />
                                  <span className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                    {item}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className={`h-px w-full ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'}`} />

                    {/* Still need help footer */}
                    <div className={`p-8 rounded-b-2xl ${isDarkMode ? 'bg-gray-800/30' : 'bg-gray-50'}`}>
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className={`text-sm font-semibold mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                            Still experiencing issues?
                          </h3>
                          <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            Submit a detailed report and our team will investigate.
                          </p>
                        </div>
                        <button
                          onClick={() => navigate('/dashboard/report-issue')}
                          className="px-6 py-2.5 rounded-xl text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-sm flex items-center gap-2"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Report Issue
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}