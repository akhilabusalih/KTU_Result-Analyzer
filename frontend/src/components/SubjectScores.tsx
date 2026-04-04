import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Award, TrendingUp } from 'lucide-react';

interface SubjectScoresProps {
  isDarkMode: boolean;
}

export function SubjectScores({ isDarkMode }: SubjectScoresProps) {
  const subjects = [
    { name: 'Data Structures', code: 'CS301', score: 87, maxScore: 100, grade: 'A', trend: 'up' },
    { name: 'Database Management', code: 'CS302', score: 92, maxScore: 100, grade: 'A+', trend: 'up' },
    { name: 'Computer Networks', code: 'CS303', score: 78, maxScore: 100, grade: 'B+', trend: 'down' },
    { name: 'Operating Systems', code: 'CS304', score: 95, maxScore: 100, grade: 'A+', trend: 'up' },
    { name: 'Software Engineering', code: 'CS305', score: 82, maxScore: 100, grade: 'A', trend: 'up' },
  ];

  const getGradeColor = (grade: string) => {
    if (grade.includes('A')) return isDarkMode ? 'text-green-400' : 'text-green-600';
    if (grade.includes('B')) return isDarkMode ? 'text-blue-400' : 'text-blue-600';
    if (grade.includes('C')) return isDarkMode ? 'text-yellow-400' : 'text-yellow-600';
    return isDarkMode ? 'text-red-400' : 'text-red-600';
  };

  const getGradeBg = (grade: string) => {
    if (grade.includes('A')) return isDarkMode ? 'bg-green-500/10' : 'bg-green-50';
    if (grade.includes('B')) return isDarkMode ? 'bg-blue-500/10' : 'bg-blue-50';
    if (grade.includes('C')) return isDarkMode ? 'bg-yellow-500/10' : 'bg-yellow-50';
    return isDarkMode ? 'bg-red-500/10' : 'bg-red-50';
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'from-green-500 to-emerald-600';
    if (score >= 80) return 'from-blue-500 to-indigo-600';
    if (score >= 70) return 'from-yellow-500 to-orange-600';
    return 'from-red-500 to-pink-600';
  };

  const averageScore = Math.round(subjects.reduce((acc, s) => acc + s.score, 0) / subjects.length);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className={`rounded-2xl p-6 ${
        isDarkMode ? 'bg-gray-900/50 border border-gray-800' : 'bg-white'
      } shadow-xl`}
    >
      {/* Header with Average Score */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Subject Scores
            </h3>
            <p className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-600'}`}>
              Current Semester
            </p>
          </div>
        </div>
        <div className={`px-4 py-2 rounded-xl ${
          isDarkMode ? 'bg-blue-500/10' : 'bg-blue-50'
        }`}>
          <div className="flex items-center gap-2">
            <Award className={`w-4 h-4 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
            <span className={`text-sm font-bold ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
              Avg: {averageScore}%
            </span>
          </div>
        </div>
      </div>

      {/* Subject List */}
      <div className="space-y-3">
        {subjects.map((subject, index) => (
          <motion.div
            key={subject.code}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + index * 0.05 }}
            className={`p-4 rounded-xl border transition-all hover:scale-[1.02] cursor-pointer ${
              isDarkMode 
                ? 'bg-gray-800/50 border-gray-700 hover:border-gray-600' 
                : 'bg-gray-50 border-gray-200 hover:border-gray-300'
            }`}
          >
            <div className="flex items-center justify-between">
              {/* Subject Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className={`text-sm font-semibold truncate ${
                    isDarkMode ? 'text-gray-200' : 'text-gray-900'
                  }`}>
                    {subject.name}
                  </h4>
                  {subject.trend === 'up' && (
                    <TrendingUp className="w-3 h-3 text-green-500 flex-shrink-0" />
                  )}
                </div>
                <p className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-600'}`}>
                  {subject.code}
                </p>
              </div>

              {/* Score and Grade */}
              <div className="flex items-center gap-3">
                {/* Score Badge */}
                <div className={`px-3 py-2 rounded-lg bg-gradient-to-r ${getScoreColor(subject.score)} shadow-lg`}>
                  <span className="text-sm font-bold text-white">
                    {subject.score}/{subject.maxScore}
                  </span>
                </div>

                {/* Grade Badge */}
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${getGradeBg(subject.grade)}`}>
                  <span className={`text-lg font-bold ${getGradeColor(subject.grade)}`}>
                    {subject.grade}
                  </span>
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-3">
              <div className={`h-1.5 rounded-full overflow-hidden ${
                isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
              }`}>
                <motion.div
                  className={`h-full rounded-full bg-gradient-to-r ${getScoreColor(subject.score)}`}
                  initial={{ width: 0 }}
                  animate={{ width: `${subject.score}%` }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
