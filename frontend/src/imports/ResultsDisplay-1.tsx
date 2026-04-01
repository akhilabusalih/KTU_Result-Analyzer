import { FileText, TrendingUp, Users, Award, FileDown, FileSpreadsheet, UserX, Trophy, RefreshCw, RotateCcw, ArrowUp } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import jsPDF from "jspdf";
import * as XLSX from "xlsx";
import { useState } from "react";

interface ResultsDisplayProps {
  fileName: string;
  department: string;
  detailedAnalysis: boolean;
  onDepartmentChange?: (department: string) => void;
  onReset?: () => void;
}

export function ResultsDisplay({
  fileName,
  department,
  detailedAnalysis,
  onDepartmentChange,
  onReset,
}: ResultsDisplayProps) {
  const [showDisabledWarning, setShowDisabledWarning] = useState(false);

  // Mock data for demonstration
  const departmentNames: Record<string, string> = {
    mechanical: "Mechanical Engineering",
    civil: "Civil Engineering",
    computer: "Computer Science Engineering",
    electrical: "Electrical and Electronics Engineering",
  };

  const stats = {
    totalStudents: 156,
    averageScore: 76.5,
    passRate: 89.7,
    topScore: 98,
    failedStudents: 10,
  };

  const gradeDistribution = [
    { grade: "A+", count: 23, percentage: 14.7 },
    { grade: "A", count: 35, percentage: 22.4 },
    { grade: "B+", count: 42, percentage: 26.9 },
    { grade: "B", count: 28, percentage: 17.9 },
    { grade: "C", count: 18, percentage: 11.5 },
    { grade: "F", count: 10, percentage: 6.4 },
  ];

  // Student results data
  const studentResults = [
    { registerNo: "CMA19CS001", EST200: "C+", MCN201: "S", MAT203: "F", CST201: "F", CST203: "F", CST205: "F", CSL201: "A", CSL203: "P", SGPA: "0", noArrea: "4" },
    { registerNo: "CMA19CS002", EST200: "F", MCN201: "S", MAT203: "D", CST201: "C", CST203: "C", CST205: "C", CSL201: "A", CSL203: "B", SGPA: "0", noArrea: "1" },
    { registerNo: "CMA19CS003", EST200: "F", MCN201: "A+", MAT203: "F", CST201: "F", CST203: "F", CST205: "F", CSL201: "C", CSL203: "B", SGPA: "0", noArrea: "5" },
    { registerNo: "CMA19CS004", EST200: "C", MCN201: "S", MAT203: "B", CST201: "D", CST203: "C", CST205: "D", CSL201: "A", CSL203: "C", SGPA: "0", noArrea: "0" },
    { registerNo: "CMA19CS005", EST200: "C", MCN201: "S", MAT203: "F", CST201: "P", CST203: "C", CST205: "F", CSL201: "A", CSL203: "D", SGPA: "0", noArrea: "2" },
    { registerNo: "CMA19CS006", EST200: "C", MCN201: "S", MAT203: "F", CST201: "F", CST203: "D", CST205: "P", CSL201: "A+", CSL203: "A+", SGPA: "0", noArrea: "2" },
    { registerNo: "CMA19CS007", EST200: "C", MCN201: "S", MAT203: "S", CST201: "C", CST203: "B", CST205: "C", CSL201: "A+", CSL203: "D", SGPA: "0", noArrea: "0" },
    { registerNo: "CMA19CS008", EST200: "B", MCN201: "S", MAT203: "F", CST201: "P", CST203: "F", CST205: "F", CSL201: "A", CSL203: "D", SGPA: "0", noArrea: "3" },
    { registerNo: "CMA19CS009", EST200: "A", MCN201: "S", MAT203: "A", CST201: "S", CST203: "S", CST205: "A+", CSL201: "A+", CSL203: "A", SGPA: "0", noArrea: "0" },
    { registerNo: "CMA19CS010", EST200: "B", MCN201: "S", MAT203: "S", CST201: "A", CST203: "A+", CST205: "C", CSL201: "A+", CSL203: "B+", SGPA: "0", noArrea: "0" },
    { registerNo: "CMA19CS011", EST200: "C", MCN201: "S", MAT203: "P", CST201: "P", CST203: "D", CST205: "F", CSL201: "B+", CSL203: "C+", SGPA: "0", noArrea: "1" },
    { registerNo: "CMA19CS012", EST200: "C", MCN201: "S", MAT203: "C", CST201: "P", CST203: "D", CST205: "D", CSL201: "A+", CSL203: "D", SGPA: "0", noArrea: "0" },
    { registerNo: "CMA19CS013", EST200: "P", MCN201: "A", MAT203: "B+", CST201: "F", CST203: "F", CST205: "D", CSL201: "A", CSL203: "D", SGPA: "0", noArrea: "2" },
    { registerNo: "CMA19CS014", EST200: "C", MCN201: "S", MAT203: "S", CST201: "C+", CST203: "A+", CST205: "P", CSL201: "B+", CSL203: "B+", SGPA: "0", noArrea: "0" },
    { registerNo: "CMA19CS015", EST200: "D", MCN201: "S", MAT203: "C", CST201: "B", CST203: "B+", CST205: "P", CSL201: "A", CSL203: "A+", SGPA: "0", noArrea: "0" },
    { registerNo: "CMA19CS016", EST200: "C", MCN201: "S", MAT203: "F", CST201: "F", CST203: "F", CST205: "F", CSL201: "A", CSL203: "D", SGPA: "0", noArrea: "4" },
    { registerNo: "CMA19CS017", EST200: "B+", MCN201: "S", MAT203: "B+", CST201: "A+", CST203: "P", CST205: "C", CSL201: "B+", CSL203: "C+", SGPA: "0", noArrea: "0" },
    { registerNo: "CMA19CS018", EST200: "A+", MCN201: "S", MAT203: "F", CST201: "F", CST203: "F", CST205: "F", CSL201: "A", CSL203: "B+", SGPA: "0", noArrea: "4" },
    { registerNo: "CMA19CS019", EST200: "S", MCN201: "A", MAT203: "S", CST201: "S", CST203: "S", CST205: "A", CSL201: "A", CSL203: "A", SGPA: "0", noArrea: "0" },
    { registerNo: "CMA19CS020", EST200: "B+", MCN201: "S", MAT203: "A+", CST201: "B+", CST203: "B+", CST205: "A", CSL201: "S", CSL203: "A+", SGPA: "0", noArrea: "0" },
    { registerNo: "CMA19CS021", EST200: "C+", MCN201: "B+", MAT203: "B", CST201: "C+", CST203: "C", CST205: "C+", CSL201: "A", CSL203: "B", SGPA: "0", noArrea: "0" },
    { registerNo: "CMA19CS022", EST200: "B", MCN201: "B+", MAT203: "A+", CST201: "C", CST203: "C+", CST205: "C", CSL201: "A", CSL203: "A+", SGPA: "0", noArrea: "0" },
    { registerNo: "CMA19CS024", EST200: "C+", MCN201: "S", MAT203: "S", CST201: "C+", CST203: "C+", CST205: "A", CSL201: "S", CSL203: "A+", SGPA: "0", noArrea: "0" },
    { registerNo: "CMA19CS025", EST200: "C+", MCN201: "S", MAT203: "A", CST201: "C+", CST203: "C", CST205: "P", CSL201: "S", CSL203: "S", SGPA: "0", noArrea: "0" },
    { registerNo: "CMA19CS026", EST200: "F", MCN201: "Absent", MAT203: "F", CST201: "C+", CST203: "B", CST205: "P", CSL201: "A", CSL203: "B", SGPA: "0", noArrea: "3" },
    { registerNo: "CMA19CS027", EST200: "C", MCN201: "S", MAT203: "C+", CST201: "D", CST203: "D", CST205: "D", CSL201: "B+", CSL203: "D", SGPA: "0", noArrea: "0" },
    { registerNo: "CMA19CS028", EST200: "B+", MCN201: "A+", MAT203: "P", CST201: "F", CST203: "P", CST205: "F", CSL201: "A", CSL203: "B+", SGPA: "0", noArrea: "2" },
    { registerNo: "CMA19CS029", EST200: "D", MCN201: "A", MAT203: "F", CST201: "F", CST203: "F", CST205: "C", CSL201: "B+", CSL203: "B", SGPA: "0", noArrea: "3" },
    { registerNo: "CMA19CS030", EST200: "S", MCN201: "S", MAT203: "S", CST201: "S", CST203: "S", CST205: "S", CSL201: "S", CSL203: "S", SGPA: "0", noArrea: "0" },
    { registerNo: "CMA19CS031", EST200: "A+", MCN201: "S", MAT203: "S", CST201: "A", CST203: "B+", CST205: "A+", CSL201: "S", CSL203: "S", SGPA: "0", noArrea: "0" },
  ];

  // Function to get grade color based on color psychology
  const getGradeColor = (grade: string) => {
    switch (grade) {
      case "S":
        return "bg-emerald-500 text-white shadow-sm";
      case "A+":
        return "bg-green-500 text-white shadow-sm";
      case "A":
        return "bg-green-600 text-white shadow-sm";
      case "B+":
        return "bg-blue-400 text-white shadow-sm";
      case "B":
        return "bg-blue-500 text-white shadow-sm";
      case "C+":
        return "bg-amber-400 text-white shadow-sm";
      case "C":
        return "bg-amber-500 text-white shadow-sm";
      case "D":
        return "bg-orange-500 text-white shadow-sm";
      case "F":
        return "bg-red-600 text-white shadow-sm";
      case "P":
        return "bg-red-500 text-white shadow-sm";
      case "Absent":
        return "bg-gray-400 text-white shadow-sm";
      default:
        return "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100";
    }
  };

  const exportToPDF = () => {
    const doc = new jsPDF();
    doc.text("Analysis Results", 10, 10);
    doc.text(fileName, 10, 20);
    doc.text(`Department: ${departmentNames[department]}`, 10, 30);
    doc.text(`Total Students: ${stats.totalStudents}`, 10, 40);
    doc.text(`Average Score: ${stats.averageScore}%`, 10, 50);
    doc.text(`Pass Rate: ${stats.passRate}%`, 10, 60);
    doc.text(`Top Score: ${stats.topScore}%`, 10, 70);
    doc.save("analysis_results.pdf");
  };

  const exportToExcel = () => {
    const workbook = XLSX.utils.book_new();
    const worksheetData = [
      ["Analysis Results", fileName],
      ["Department", departmentNames[department]],
      ["Total Students", stats.totalStudents],
      ["Average Score", `${stats.averageScore}%`],
      ["Pass Rate", `${stats.passRate}%`],
      ["Top Score", `${stats.topScore}%`],
    ];
    const worksheet = XLSX.utils.aoa_to_sheet(worksheetData);
    XLSX.utils.book_append_sheet(workbook, worksheet, "Results");
    XLSX.writeFile(workbook, "analysis_results.xlsx");
  };

  return (
    <div className="max-w-7xl mx-auto space-y-4">
      {/* Header Info */}
      <Card className="p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border-gray-200 dark:border-gray-700 transition-colors shadow-lg">
        <div className="flex items-start justify-between gap-6">
          <div className="flex items-start gap-4 flex-1">
            {/* Large Document Icon with gradient background */}
            <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-teal-500 dark:from-blue-400 dark:to-teal-400 flex items-center justify-center shadow-md">
              <FileText className="w-8 h-8 text-white" strokeWidth={2.5} />
            </div>
            
            <div className="min-w-0 flex-1">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent mb-2">
                Analysis Results
              </h2>
              <div className="flex items-center gap-2 mb-2">
                <div className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300 truncate max-w-md">{fileName}</p>
                </div>
              </div>
              {onReset && (
                <button
                  onClick={onReset}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-blue-600 dark:text-teal-400 hover:text-white dark:hover:text-white bg-blue-50 dark:bg-teal-900/30 hover:bg-blue-600 dark:hover:bg-teal-500 border border-blue-200 dark:border-teal-600 hover:border-blue-600 dark:hover:border-teal-500 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Analyze another file
                </button>
              )}
            </div>
          </div>
          
          <div className="flex items-start gap-6">
            {/* Export Buttons */}
            <div className="flex items-center gap-2">
              <Button
                size="sm"
                className="bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 dark:from-indigo-400 dark:to-indigo-500 text-white shadow-md hover:shadow-lg transition-all"
                onClick={exportToPDF}
              >
                <FileDown className="w-3.5 h-3.5" />
                Export PDF
              </Button>
              <Button
                size="sm"
                className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 dark:from-emerald-400 dark:to-emerald-500 text-white shadow-md hover:shadow-lg transition-all"
                onClick={exportToExcel}
              >
                <FileSpreadsheet className="w-3.5 h-3.5" />
                Export Excel
              </Button>
            </div>

            {/* Department Info */}
            <div className="text-right border-l border-gray-200 dark:border-gray-700 pl-6">
              <p className="text-xs text-gray-600 dark:text-gray-400 mb-0.5">Department</p>
              <p className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-teal-600 dark:from-blue-400 dark:to-teal-400 bg-clip-text text-transparent whitespace-nowrap">{departmentNames[department]}</p>
              {onDepartmentChange && (
                <div className="mt-1.5 relative">
                  <p className={`text-xs mb-1 text-right ${!detailedAnalysis ? 'text-gray-400 dark:text-gray-600' : 'text-gray-500 dark:text-gray-400'}`}>
                    Wish to change?
                  </p>
                  <div className="relative">
                    <Select 
                      value={department} 
                      onValueChange={onDepartmentChange}
                      disabled={!detailedAnalysis}
                    >
                      <SelectTrigger 
                        className={`w-full min-w-[280px] h-8 text-xs transition-all ${
                          !detailedAnalysis 
                            ? 'opacity-40 cursor-not-allowed bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-700' 
                            : 'bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-600 hover:border-blue-400 dark:hover:border-teal-500'
                        }`}
                        disabled={!detailedAnalysis}
                      >
                        <SelectValue>
                          <span className="text-xs text-gray-700 dark:text-gray-300">
                            {departmentNames[department]}
                          </span>
                        </SelectValue>
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mechanical">Mechanical Engineering</SelectItem>
                        <SelectItem value="civil">Civil Engineering</SelectItem>
                        <SelectItem value="computer">Computer Science Engineering</SelectItem>
                        <SelectItem value="electrical">
                          Electrical and Electronics Engineering
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    
                    {/* Invisible overlay to capture clicks when disabled */}
                    {!detailedAnalysis && (
                      <div 
                        className="absolute inset-0 cursor-not-allowed z-10"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setShowDisabledWarning(true);
                          setTimeout(() => setShowDisabledWarning(false), 4000);
                        }}
                      />
                    )}
                  </div>
                  
                  {/* Warning Message */}
                  {showDisabledWarning && !detailedAnalysis && (
                    <div className="absolute top-full left-0 right-0 mt-3 z-50 p-3.5 bg-amber-50 dark:bg-amber-900/30 border-2 border-amber-400 dark:border-amber-600 rounded-lg shadow-xl animate-fade-in">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-500 dark:bg-amber-600 flex items-center justify-center">
                          <span className="text-white text-sm font-bold">!</span>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-semibold text-amber-800 dark:text-amber-300 mb-1">
                            Feature Disabled
                          </p>
                          <p className="text-xs text-amber-700 dark:text-amber-400 leading-relaxed">
                            You haven't selected "Detailed Analysis". This feature is only available with detailed analysis enabled.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </Card>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
        <Card className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 border-blue-200 dark:border-blue-800 transition-colors">
          <div className="flex items-center gap-3">
            <Users className="w-7 h-7 text-blue-600 dark:text-blue-400" />
            <div>
              <p className="text-xs text-blue-700 dark:text-blue-300">Total Students</p>
              <p className="text-xl font-bold text-blue-900 dark:text-blue-100">{stats.totalStudents}</p>
            </div>
          </div>
        </Card>

        <Card className="p-4 bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-950 dark:to-emerald-900 border-emerald-200 dark:border-emerald-800 transition-colors">
          <div className="flex items-center gap-3">
            <TrendingUp className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />
            <div>
              <p className="text-xs text-emerald-700 dark:text-emerald-300">Average Score</p>
              <p className="text-xl font-bold text-emerald-900 dark:text-emerald-100">{stats.averageScore}%</p>
            </div>
          </div>
        </Card>

        <Card className="p-4 bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-950 dark:to-teal-900 border-teal-200 dark:border-teal-800 transition-colors">
          <div className="flex items-center gap-3">
            <Award className="w-7 h-7 text-teal-600 dark:text-teal-400" />
            <div>
              <p className="text-xs text-teal-700 dark:text-teal-300">Pass Rate</p>
              <p className="text-xl font-bold text-teal-900 dark:text-teal-100">{stats.passRate}%</p>
            </div>
          </div>
        </Card>

        <Card className="p-4 bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-950 dark:to-amber-900 border-amber-200 dark:border-amber-800 transition-colors">
          <div className="flex items-center gap-3">
            <Trophy className="w-7 h-7 text-amber-600 dark:text-amber-400" />
            <div>
              <p className="text-xs text-amber-700 dark:text-amber-300">Toppers</p>
              <p className="text-xl font-bold text-amber-900 dark:text-amber-100">22</p>
            </div>
          </div>
        </Card>

        <Card className="p-4 bg-gradient-to-br from-red-50 to-rose-100 dark:from-red-950 dark:to-rose-900 border-red-200 dark:border-red-800 transition-colors">
          <div className="flex items-center gap-3">
            <UserX className="w-7 h-7 text-red-600 dark:text-red-400" />
            <div>
              <p className="text-xs text-red-700 dark:text-red-300">Students Failed</p>
              <p className="text-xl font-bold text-red-900 dark:text-red-100">{stats.failedStudents}</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Grade Distribution */}
      {detailedAnalysis && (
        <Card className="p-4 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 transition-colors overflow-x-auto shadow-lg">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Student Results</h3>
          <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700 mb-4">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-blue-600 to-teal-600 dark:from-blue-500 dark:to-teal-500">
                  <th className="px-4 py-3 text-left text-sm font-bold text-white border-r border-white/20">Register No</th>
                  <th className="px-3 py-3 text-center text-sm font-bold text-white border-r border-white/20">EST200</th>
                  <th className="px-3 py-3 text-center text-sm font-bold text-white border-r border-white/20">MCN201</th>
                  <th className="px-3 py-3 text-center text-sm font-bold text-white border-r border-white/20">MAT203</th>
                  <th className="px-3 py-3 text-center text-sm font-bold text-white border-r border-white/20">CST201</th>
                  <th className="px-3 py-3 text-center text-sm font-bold text-white border-r border-white/20">CST203</th>
                  <th className="px-3 py-3 text-center text-sm font-bold text-white border-r border-white/20">CST205</th>
                  <th className="px-3 py-3 text-center text-sm font-bold text-white border-r border-white/20">CSL201</th>
                  <th className="px-3 py-3 text-center text-sm font-bold text-white border-r border-white/20">CSL203</th>
                  <th className="px-3 py-3 text-center text-sm font-bold text-white border-r border-white/20">CGPA</th>
                  <th className="px-3 py-3 text-center text-sm font-bold text-white">No_Arrea</th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-900">
                {studentResults.map((student, index) => (
                  <tr
                    key={student.registerNo}
                    className={`${
                      index % 2 === 0
                        ? "bg-gray-50 dark:bg-gray-900"
                        : "bg-white dark:bg-gray-800"
                    } hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-200`}
                  >
                    <td className="px-4 py-3 text-sm font-bold text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">
                      {student.registerNo}
                    </td>
                    <td className="px-3 py-3 text-center border-b border-gray-200 dark:border-gray-700">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${getGradeColor(student.EST200)}`}>
                        {student.EST200}
                      </span>
                    </td>
                    <td className="px-3 py-3 text-center border-b border-gray-200 dark:border-gray-700">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${getGradeColor(student.MCN201)}`}>
                        {student.MCN201}
                      </span>
                    </td>
                    <td className="px-3 py-3 text-center border-b border-gray-200 dark:border-gray-700">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${getGradeColor(student.MAT203)}`}>
                        {student.MAT203}
                      </span>
                    </td>
                    <td className="px-3 py-3 text-center border-b border-gray-200 dark:border-gray-700">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${getGradeColor(student.CST201)}`}>
                        {student.CST201}
                      </span>
                    </td>
                    <td className="px-3 py-3 text-center border-b border-gray-200 dark:border-gray-700">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${getGradeColor(student.CST203)}`}>
                        {student.CST203}
                      </span>
                    </td>
                    <td className="px-3 py-3 text-center border-b border-gray-200 dark:border-gray-700">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${getGradeColor(student.CST205)}`}>
                        {student.CST205}
                      </span>
                    </td>
                    <td className="px-3 py-3 text-center border-b border-gray-200 dark:border-gray-700">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${getGradeColor(student.CSL201)}`}>
                        {student.CSL201}
                      </span>
                    </td>
                    <td className="px-3 py-3 text-center border-b border-gray-200 dark:border-gray-700">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${getGradeColor(student.CSL203)}`}>
                        {student.CSL203}
                      </span>
                    </td>
                    <td className="px-3 py-3 text-center text-sm font-bold text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">
                      {student.SGPA}
                    </td>
                    <td className="px-3 py-3 text-center border-b border-gray-200 dark:border-gray-700">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold shadow-sm ${
                        student.noArrea === "0" 
                          ? "bg-emerald-500 text-white" 
                          : "bg-red-600 text-white"
                      }`}>
                        {student.noArrea}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Performance Key - Now inside the same card */}
          <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
            <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2.5">Performance Key</h4>
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="flex items-center gap-1.5">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-emerald-500 text-white shadow-sm">S</span>
                <span className="text-xs text-gray-600 dark:text-gray-400">Outstanding</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-green-500 text-white shadow-sm">A</span>
                <span className="text-xs text-gray-600 dark:text-gray-400">Excellent</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-blue-500 text-white shadow-sm">B</span>
                <span className="text-xs text-gray-600 dark:text-gray-400">Good</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-amber-500 text-white shadow-sm">C</span>
                <span className="text-xs text-gray-600 dark:text-gray-400">Average</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-orange-500 text-white shadow-sm">D</span>
                <span className="text-xs text-gray-600 dark:text-gray-400">Below Avg</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-red-600 text-white shadow-sm">F</span>
                <span className="text-xs text-gray-600 dark:text-gray-400">Fail</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-gray-400 text-white shadow-sm">Ab</span>
                <span className="text-xs text-gray-600 dark:text-gray-400">Absent</span>
              </div>
            </div>
          </div>
        </Card>
      )}

      {/* Performance Insights */}
      {detailedAnalysis && (
        <div className="hidden"></div>
      )}

      {/* Performance Analysis of All Students */}
      {detailedAnalysis && (
        <Card className="p-4 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 transition-colors overflow-x-auto shadow-lg">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Performance Analysis of All Students</h3>
          
          {/* Main Performance Table */}
          <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700 mb-4">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-blue-600 to-teal-600 dark:from-blue-500 dark:to-teal-500">
                  <th className="px-4 py-2.5 text-left text-sm font-bold text-white border-r border-white/20">Metric</th>
                  <th className="px-3 py-2.5 text-center text-sm font-bold text-white border-r border-white/20">EST200</th>
                  <th className="px-3 py-2.5 text-center text-sm font-bold text-white border-r border-white/20">MCN201</th>
                  <th className="px-3 py-2.5 text-center text-sm font-bold text-white border-r border-white/20">MAT203</th>
                  <th className="px-3 py-2.5 text-center text-sm font-bold text-white border-r border-white/20">CST201</th>
                  <th className="px-3 py-2.5 text-center text-sm font-bold text-white border-r border-white/20">CST203</th>
                  <th className="px-3 py-2.5 text-center text-sm font-bold text-white border-r border-white/20">CST205</th>
                  <th className="px-3 py-2.5 text-center text-sm font-bold text-white border-r border-white/20">CSL201</th>
                  <th className="px-3 py-2.5 text-center text-sm font-bold text-white">CSL203</th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-900">
                {/* Pass Percentage */}
                <tr className="bg-emerald-50 dark:bg-emerald-950 hover:bg-emerald-100 dark:hover:bg-emerald-900 transition-all duration-200">
                  <td className="px-4 py-2.5 text-sm font-bold text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">
                    Pass Percentage
                  </td>
                  <td className="px-3 py-2.5 text-center text-sm font-semibold text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">86.84%</td>
                  <td className="px-3 py-2.5 text-center text-sm font-semibold text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">97.37%</td>
                  <td className="px-3 py-2.5 text-center text-sm font-semibold text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">71.05%</td>
                  <td className="px-3 py-2.5 text-center text-sm font-semibold text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">73.68%</td>
                  <td className="px-3 py-2.5 text-center text-sm font-semibold text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">76.32%</td>
                  <td className="px-3 py-2.5 text-center text-sm font-semibold text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">73.68%</td>
                  <td className="px-3 py-2.5 text-center text-sm font-semibold text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">100%</td>
                  <td className="px-3 py-2.5 text-center text-sm font-semibold text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">97.37%</td>
                </tr>
                {/* Pass Count */}
                <tr className="bg-gray-50 dark:bg-gray-900 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-200">
                  <td className="px-4 py-2.5 text-sm font-bold text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">Pass Count</td>
                  <td className="px-3 py-2.5 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">33</td>
                  <td className="px-3 py-2.5 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">37</td>
                  <td className="px-3 py-2.5 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">27</td>
                  <td className="px-3 py-2.5 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">28</td>
                  <td className="px-3 py-2.5 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">29</td>
                  <td className="px-3 py-2.5 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">28</td>
                  <td className="px-3 py-2.5 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">38</td>
                  <td className="px-3 py-2.5 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">37</td>
                </tr>
                {/* Fail Count */}
                <tr className="bg-white dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-200">
                  <td className="px-4 py-2.5 text-sm font-bold text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">Fail Count</td>
                  <td className="px-3 py-2.5 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">5</td>
                  <td className="px-3 py-2.5 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">1</td>
                  <td className="px-3 py-2.5 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">11</td>
                  <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">10</td>
                  <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">9</td>
                  <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">10</td>
                  <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">0</td>
                  <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">1</td>
                </tr>
                {/* No of S grades */}
                <tr className="bg-gray-50 dark:bg-gray-900 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-200">
                  <td className="px-6 py-3 text-sm font-bold text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">No of S grades</td>
                  <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">2</td>
                  <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">27</td>
                  <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">7</td>
                  <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">4</td>
                  <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">4</td>
                  <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">1</td>
                  <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">5</td>
                  <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">4</td>
                </tr>
                {/* No of A+ grades */}
                <tr className="bg-white dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-200">
                  <td className="px-6 py-3 text-sm font-bold text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">No of A+ grades</td>
                  <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">2</td>
                  <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">3</td>
                  <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">2</td>
                  <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">1</td>
                  <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">2</td>
                  <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">2</td>
                  <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">5</td>
                  <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">5</td>
                </tr>
                {/* No of A grades */}
                <tr className="bg-gray-50 dark:bg-gray-900 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-200">
                  <td className="px-6 py-3 text-sm font-bold text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">No of A grades</td>
                  <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">1</td>
                  <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">4</td>
                  <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">3</td>
                  <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">2</td>
                  <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">0</td>
                  <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">4</td>
                  <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">16</td>
                  <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">4</td>
                </tr>
                {/* No of B+ grades */}
                <tr className="bg-white dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-200">
                  <td className="px-6 py-3 text-sm font-bold text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">No of B+ grades</td>
                  <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">4</td>
                  <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">3</td>
                  <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">4</td>
                  <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">1</td>
                  <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">3</td>
                  <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">0</td>
                  <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">10</td>
                  <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">5</td>
                </tr>
                {/* No of B grades */}
                <tr className="bg-gray-50 dark:bg-gray-900 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-200">
                  <td className="px-6 py-3 text-sm font-bold text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">No of B grades</td>
                  <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">4</td>
                  <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">0</td>
                  <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">3</td>
                  <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">2</td>
                  <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">2</td>
                  <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">0</td>
                  <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">0</td>
                  <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">5</td>
                </tr>
                {/* No of C+ grades */}
                <tr className="bg-white dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-200">
                  <td className="px-6 py-3 text-sm font-bold text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">No of C+ grades</td>
                  <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">5</td>
                  <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">0</td>
                  <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">1</td>
                  <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">5</td>
                  <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">3</td>
                  <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">1</td>
                  <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">1</td>
                  <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">3</td>
                </tr>
                {/* No of C grades */}
                <tr className="bg-gray-50 dark:bg-gray-900 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-200">
                  <td className="px-6 py-3 text-sm font-bold text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">No of C grades</td>
                  <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">11</td>
                  <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">0</td>
                  <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">3</td>
                  <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">5</td>
                  <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">7</td>
                  <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">6</td>
                  <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">1</td>
                  <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">1</td>
                </tr>
                {/* No of D grades */}
                <tr className="bg-white dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-200">
                  <td className="px-6 py-3 text-sm font-bold text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">No of D grades</td>
                  <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">3</td>
                  <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">0</td>
                  <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">2</td>
                  <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">3</td>
                  <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">4</td>
                  <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">5</td>
                  <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">0</td>
                  <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">9</td>
                </tr>
                {/* No of P grades */}
                <tr className="bg-gray-50 dark:bg-gray-900 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-200">
                  <td className="px-6 py-3 text-sm font-bold text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">No of P grades</td>
                  <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">1</td>
                  <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">0</td>
                  <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">2</td>
                  <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">5</td>
                  <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">4</td>
                  <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">9</td>
                  <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">0</td>
                  <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">1</td>
                </tr>
                {/* No of F grades */}
                <tr className="bg-white dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-200">
                  <td className="px-6 py-3 text-sm font-bold text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">No of F grades</td>
                  <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">5</td>
                  <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">0</td>
                  <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">11</td>
                  <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">10</td>
                  <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">9</td>
                  <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">10</td>
                  <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">0</td>
                  <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">1</td>
                </tr>
                {/* No of FE grades */}
                <tr className="bg-gray-50 dark:bg-gray-900 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-200">
                  <td className="px-6 py-3 text-sm font-bold text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">No of FE grades</td>
                  <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">0</td>
                  <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">0</td>
                  <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">0</td>
                  <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">0</td>
                  <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">0</td>
                  <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">0</td>
                  <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">0</td>
                  <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">0</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Summary Statistics Table */}
          <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700 mb-8">
            <table className="min-w-full border-collapse">
              <tbody className="bg-white dark:bg-gray-900">
                <tr className="bg-blue-50 dark:bg-blue-950 hover:bg-blue-100 dark:hover:bg-blue-900 transition-all duration-200">
                  <td className="px-6 py-3 text-sm font-bold text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">
                    Total Students (REGULAR)
                  </td>
                  <td className="px-6 py-3 text-center text-sm font-bold text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">
                    38
                  </td>
                </tr>
                <tr className="bg-white dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-200">
                  <td className="px-6 py-3 text-sm font-bold text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">
                    Total Failed (REGULAR) (students having one or more arrears)
                  </td>
                  <td className="px-6 py-3 text-center text-sm font-bold text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">
                    16
                  </td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-900 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-200">
                  <td className="px-6 py-3 text-sm font-bold text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">
                    Total Passed (REGULAR) (students having no arrears)
                  </td>
                  <td className="px-6 py-3 text-center text-sm font-bold text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">
                    22
                  </td>
                </tr>
                <tr className="bg-emerald-50 dark:bg-emerald-950 hover:bg-emerald-100 dark:hover:bg-emerald-900 transition-all duration-200">
                  <td className="px-6 py-3 text-sm font-bold text-gray-900 dark:text-gray-100">
                    Pass Percentage (REGULAR)
                  </td>
                  <td className="px-6 py-3 text-center text-lg font-bold text-emerald-600 dark:text-emerald-400">
                    57.89%
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>
      )}

      {/* Subject wise analysis - Separate Card */}
      {detailedAnalysis && (
        <Card className="p-4 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 transition-colors overflow-x-auto shadow-lg">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Subject wise analysis</h3>
          <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-blue-600 to-teal-600 dark:from-blue-500 dark:to-teal-500">
                    <th className="px-3 py-2.5 text-center text-sm font-bold text-white border-r border-white/20">SubCode</th>
                    <th className="px-3 py-2.5 text-center text-sm font-bold text-white border-r border-white/20">Pass %</th>
                    <th className="px-3 py-2.5 text-center text-sm font-bold text-white border-r border-white/20">Pass</th>
                    <th className="px-3 py-2.5 text-center text-sm font-bold text-white border-r border-white/20">Fail</th>
                    <th className="px-3 py-2.5 text-center text-sm font-bold text-white border-r border-white/20">S</th>
                    <th className="px-3 py-2.5 text-center text-sm font-bold text-white border-r border-white/20">A+</th>
                    <th className="px-3 py-2.5 text-center text-sm font-bold text-white border-r border-white/20">A</th>
                    <th className="px-3 py-2.5 text-center text-sm font-bold text-white border-r border-white/20">B+</th>
                    <th className="px-3 py-2.5 text-center text-sm font-bold text-white border-r border-white/20">B</th>
                    <th className="px-3 py-2.5 text-center text-sm font-bold text-white border-r border-white/20">C+</th>
                    <th className="px-3 py-2.5 text-center text-sm font-bold text-white border-r border-white/20">C</th>
                    <th className="px-3 py-2.5 text-center text-sm font-bold text-white border-r border-white/20">D</th>
                    <th className="px-3 py-2.5 text-center text-sm font-bold text-white border-r border-white/20">P</th>
                    <th className="px-3 py-2.5 text-center text-sm font-bold text-white border-r border-white/20">F</th>
                    <th className="px-3 py-2.5 text-center text-sm font-bold text-white">FE/I</th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-900">
                  <tr className="bg-gray-50 dark:bg-gray-900 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-200">
                    <td className="px-3 py-2.5 text-center text-sm font-bold text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">EST200</td>
                    <td className="px-3 py-2.5 text-center text-sm font-semibold text-emerald-600 dark:text-emerald-400 border-b border-gray-200 dark:border-gray-700">86.84</td>
                    <td className="px-3 py-2.5 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">33</td>
                    <td className="px-3 py-2.5 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">5</td>
                    <td className="px-3 py-2.5 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">2</td>
                    <td className="px-3 py-2.5 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">2</td>
                    <td className="px-3 py-2.5 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">1</td>
                    <td className="px-3 py-2.5 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">4</td>
                    <td className="px-3 py-2.5 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">4</td>
                    <td className="px-3 py-2.5 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">5</td>
                    <td className="px-3 py-2.5 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">11</td>
                    <td className="px-3 py-2.5 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">3</td>
                    <td className="px-3 py-2.5 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">1</td>
                    <td className="px-3 py-2.5 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">5</td>
                    <td className="px-3 py-2.5 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">0</td>
                  </tr>
                  <tr className="bg-white dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-200">
                    <td className="px-3 py-2.5 text-center text-sm font-bold text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">MCN201</td>
                    <td className="px-3 py-2.5 text-center text-sm font-semibold text-emerald-600 dark:text-emerald-400 border-b border-gray-200 dark:border-gray-700">97.37</td>
                    <td className="px-3 py-2.5 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">37</td>
                    <td className="px-3 py-2.5 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">1</td>
                    <td className="px-3 py-2.5 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">27</td>
                    <td className="px-3 py-2.5 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">3</td>
                    <td className="px-3 py-2.5 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">4</td>
                    <td className="px-3 py-2.5 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">3</td>
                    <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">0</td>
                    <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">0</td>
                    <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">0</td>
                    <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">0</td>
                    <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">0</td>
                    <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">0</td>
                    <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">0</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-900 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-200">
                    <td className="px-4 py-3 text-center text-sm font-bold text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">MAT203</td>
                    <td className="px-4 py-3 text-center text-sm font-semibold text-emerald-600 dark:text-emerald-400 border-b border-gray-200 dark:border-gray-700">71.05</td>
                    <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">27</td>
                    <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">11</td>
                    <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">7</td>
                    <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">2</td>
                    <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">3</td>
                    <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">4</td>
                    <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">3</td>
                    <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">1</td>
                    <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">3</td>
                    <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">2</td>
                    <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">2</td>
                    <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">11</td>
                    <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">0</td>
                  </tr>
                  <tr className="bg-white dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-200">
                    <td className="px-4 py-3 text-center text-sm font-bold text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">CST201</td>
                    <td className="px-4 py-3 text-center text-sm font-semibold text-emerald-600 dark:text-emerald-400 border-b border-gray-200 dark:border-gray-700">73.68</td>
                    <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">28</td>
                    <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">10</td>
                    <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">4</td>
                    <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">1</td>
                    <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">2</td>
                    <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">1</td>
                    <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">2</td>
                    <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">5</td>
                    <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">5</td>
                    <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">3</td>
                    <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">5</td>
                    <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">10</td>
                    <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">0</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-900 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-200">
                    <td className="px-4 py-3 text-center text-sm font-bold text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">CST203</td>
                    <td className="px-4 py-3 text-center text-sm font-semibold text-emerald-600 dark:text-emerald-400 border-b border-gray-200 dark:border-gray-700">76.32</td>
                    <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">29</td>
                    <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">9</td>
                    <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">4</td>
                    <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">2</td>
                    <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">0</td>
                    <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">3</td>
                    <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">2</td>
                    <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">3</td>
                    <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">7</td>
                    <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">4</td>
                    <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">4</td>
                    <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">9</td>
                    <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">0</td>
                  </tr>
                  <tr className="bg-white dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-200">
                    <td className="px-4 py-3 text-center text-sm font-bold text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">CST205</td>
                    <td className="px-4 py-3 text-center text-sm font-semibold text-emerald-600 dark:text-emerald-400 border-b border-gray-200 dark:border-gray-700">73.68</td>
                    <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">28</td>
                    <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">10</td>
                    <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">1</td>
                    <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">2</td>
                    <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">4</td>
                    <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">0</td>
                    <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">0</td>
                    <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">1</td>
                    <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">6</td>
                    <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">5</td>
                    <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">9</td>
                    <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">10</td>
                    <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">0</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-900 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-200">
                    <td className="px-4 py-3 text-center text-sm font-bold text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">CSL201</td>
                    <td className="px-4 py-3 text-center text-sm font-semibold text-emerald-600 dark:text-emerald-400 border-b border-gray-200 dark:border-gray-700">100</td>
                    <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">38</td>
                    <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">0</td>
                    <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">5</td>
                    <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">5</td>
                    <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">16</td>
                    <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">10</td>
                    <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">0</td>
                    <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">1</td>
                    <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">1</td>
                    <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">0</td>
                    <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">0</td>
                    <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">0</td>
                    <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">0</td>
                  </tr>
                  <tr className="bg-white dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-200">
                    <td className="px-4 py-3 text-center text-sm font-bold text-gray-900 dark:text-gray-100">CSL203</td>
                    <td className="px-4 py-3 text-center text-sm font-semibold text-emerald-600 dark:text-emerald-400">97.37</td>
                    <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100">37</td>
                    <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100">1</td>
                    <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100">4</td>
                    <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100">5</td>
                    <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100">4</td>
                    <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100">5</td>
                    <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100">5</td>
                    <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100">3</td>
                    <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100">1</td>
                    <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100">9</td>
                    <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100">1</td>
                    <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100">1</td>
                    <td className="px-4 py-3 text-center text-sm text-gray-900 dark:text-gray-100">0</td>
                  </tr>
                </tbody>
              </table>
            </div>
        </Card>
      )}
    </div>
  );
}