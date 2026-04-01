import React, { useState, useRef } from 'react';
import { Sidebar } from '../components/Sidebar';
import { ModernNavbar } from '../components/ModernNavbar';
import { useTheme } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'motion/react';
import { 
  User, Mail, Phone, MapPin, Calendar, Briefcase, Building2, 
  Camera, Edit2, Save, X, Shield, Bell, Lock, LogOut, 
  Upload, Check, AlertCircle, Eye, EyeOff
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';

export function Profile() {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [isEditing, setIsEditing] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  // Profile State
  const [profile, setProfile] = useState({
    avatar: '',
    fullName: 'Dr. Sarah Johnson',
    email: 'sarah.johnson@university.edu',
    phone: '+1 (555) 123-4567',
    location: 'New York, USA',
    role: 'Professor & Department Head',
    department: 'Computer Science Engineering',
    employeeId: 'EMP-2019-CS-001',
    joinDate: 'January 15, 2019',
    bio: 'Experienced educator with over 15 years in computer science and engineering education. Passionate about student success and innovative teaching methodologies.',
    institution: 'State University of Technology',
    office: 'Building A, Room 305',
    notifications: true,
    emailNotifications: true,
    analyticsReports: true,
  });

  const [editedProfile, setEditedProfile] = useState({ ...profile });
  const [avatarPreview, setAvatarPreview] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  // Password Change State
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setAvatarPreview(result);
        setEditedProfile({ ...editedProfile, avatar: result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEditToggle = () => {
    if (isEditing) {
      // Cancel editing
      setEditedProfile({ ...profile });
      setAvatarPreview('');
      setIsEditing(false);
    } else {
      // Start editing
      setIsEditing(true);
    }
  };

  const handleSaveProfile = () => {
    setIsSaving(true);
    // Simulate API call
    setTimeout(() => {
      setProfile({ ...editedProfile });
      setIsSaving(false);
      setSaveSuccess(true);
      setIsEditing(false);
      setAvatarPreview('');
      
      setTimeout(() => {
        setSaveSuccess(false);
      }, 3000);
    }, 1500);
  };

  const handlePasswordChange = () => {
    // Validate passwords
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert('New passwords do not match!');
      return;
    }
    if (passwordData.newPassword.length < 8) {
      alert('Password must be at least 8 characters long!');
      return;
    }
    
    // Simulate password change
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      setSaveSuccess(true);
      setShowPasswordModal(false);
      setPasswordData({
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
      });
      setTimeout(() => {
        setSaveSuccess(false);
      }, 3000);
    }, 1500);
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase();
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors">
      <Sidebar isDarkMode={isDarkMode} />
      
      <div className="ml-20">
        <ModernNavbar isDarkMode={isDarkMode} onToggleDarkMode={toggleDarkMode} />
        
        <main className="p-6 max-w-[1400px] mx-auto">
          {/* Success Toast */}
          <AnimatePresence>
            {saveSuccess && (
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                className="fixed top-24 right-6 z-50"
              >
                <div className="bg-green-500 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3">
                  <Check className="w-5 h-5" />
                  <span className="font-semibold">Changes saved successfully!</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/20 flex-shrink-0">
                  <User className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className={`text-3xl font-bold tracking-tight ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    My Profile
                  </h1>
                  <p className={`text-base mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Manage your account information and preferences
                  </p>
                </div>
              </div>
              
              <Button
                onClick={handleEditToggle}
                className={`flex items-center gap-2 ${
                  isEditing
                    ? 'bg-red-500 hover:bg-red-600'
                    : 'bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700'
                } text-white shadow-lg`}
              >
                {isEditing ? (
                  <>
                    <X className="w-4 h-4" />
                    Cancel
                  </>
                ) : (
                  <>
                    <Edit2 className="w-4 h-4" />
                    Edit Profile
                  </>
                )}
              </Button>
            </div>
          </motion.div>

          <div className="grid grid-cols-12 gap-6">
            {/* Left Column - Profile Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="col-span-4"
            >
              <Card className={`p-6 ${
                isDarkMode
                  ? 'bg-gray-900/50 border-gray-800'
                  : 'bg-white border-gray-200'
              } shadow-xl`}>
                {/* Avatar Section */}
                <div className="flex flex-col items-center mb-6">
                  <div className="relative group">
                    <div className={`w-40 h-40 rounded-full overflow-hidden border-4 ${
                      isDarkMode ? 'border-gray-800' : 'border-gray-200'
                    } shadow-lg`}>
                      {avatarPreview || profile.avatar ? (
                        <img 
                          src={avatarPreview || profile.avatar} 
                          alt={profile.fullName}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                          <span className="text-white text-4xl font-bold">
                            {getInitials(profile.fullName)}
                          </span>
                        </div>
                      )}
                    </div>
                    
                    {/* Camera Button - Always Visible */}
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      className="absolute bottom-2 right-2 w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110"
                      title="Change profile photo"
                    >
                      <Camera className="w-5 h-5 text-white" />
                    </button>
                    
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleAvatarChange}
                      className="hidden"
                      title="Upload profile photo"
                    />
                  </div>
                  
                  <h2 className={`text-2xl font-bold mt-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {profile.fullName}
                  </h2>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {profile.role}
                  </p>
                  <div className={`mt-3 px-4 py-2 rounded-full ${
                    isDarkMode ? 'bg-blue-500/10 text-blue-400' : 'bg-blue-50 text-blue-600'
                  }`}>
                    <span className="text-xs font-semibold">{profile.employeeId}</span>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className={`grid grid-cols-3 gap-3 p-4 rounded-xl mb-6 ${
                  isDarkMode ? 'bg-gray-800/50' : 'bg-gray-50'
                }`}>
                  <div className="text-center">
                    <div className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      156
                    </div>
                    <div className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Students
                    </div>
                  </div>
                  <div className="text-center border-x border-gray-300 dark:border-gray-700">
                    <div className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      8
                    </div>
                    <div className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Courses
                    </div>
                  </div>
                  <div className="text-center">
                    <div className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      5+
                    </div>
                    <div className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Years
                    </div>
                  </div>
                </div>

                {/* Bio */}
                <div className="mb-6">
                  <h3 className={`text-sm font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    About
                  </h3>
                  <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {profile.bio}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="space-y-2">
                  <Button
                    onClick={() => setShowPasswordModal(true)}
                    variant="outline"
                    className={`w-full justify-start gap-3 ${
                      isDarkMode
                        ? 'border-gray-700 hover:bg-gray-800 text-gray-300'
                        : 'border-gray-300 hover:bg-gray-50 text-gray-700'
                    }`}
                  >
                    <Lock className="w-4 h-4" />
                    Change Password
                  </Button>
                  
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-3 text-red-600 border-red-200 hover:bg-red-50 dark:border-red-900 dark:hover:bg-red-950/20 dark:text-red-400"
                  >
                    <LogOut className="w-4 h-4" />
                    Logout
                  </Button>
                </div>
              </Card>
            </motion.div>

            {/* Right Column - Details */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="col-span-8 space-y-6"
            >
              {/* Personal Information */}
              <Card className={`p-6 ${
                isDarkMode
                  ? 'bg-gray-900/50 border-gray-800'
                  : 'bg-white border-gray-200'
              } shadow-xl`}>
                <div className="flex items-center justify-between mb-6">
                  <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Personal Information
                  </h3>
                  {isEditing && (
                    <div className="flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-blue-500" />
                      <span className="text-xs text-blue-500 font-medium">Editing mode active</span>
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div>
                    <label className={`flex items-center gap-2 text-sm font-semibold mb-2 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      <User className="w-4 h-4" />
                      Full Name
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={editedProfile.fullName}
                        onChange={(e) => setEditedProfile({ ...editedProfile, fullName: e.target.value })}
                        title="Full Name"
                        className={`w-full px-4 py-3 rounded-lg border-2 ${
                          isDarkMode
                            ? 'bg-gray-800 border-gray-700 text-white'
                            : 'bg-white border-gray-300 text-gray-900'
                        } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      />
                    ) : (
                      <div className={`px-4 py-3 rounded-lg ${
                        isDarkMode ? 'bg-gray-800/50 text-white' : 'bg-gray-50 text-gray-900'
                      }`}>
                        {profile.fullName}
                      </div>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className={`flex items-center gap-2 text-sm font-semibold mb-2 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      <Mail className="w-4 h-4" />
                      Email Address
                    </label>
                    {isEditing ? (
                      <input
                        type="email"
                        value={editedProfile.email}
                        onChange={(e) => setEditedProfile({ ...editedProfile, email: e.target.value })}
                        title="Email Address"
                        className={`w-full px-4 py-3 rounded-lg border-2 ${
                          isDarkMode
                            ? 'bg-gray-800 border-gray-700 text-white'
                            : 'bg-white border-gray-300 text-gray-900'
                        } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      />
                    ) : (
                      <div className={`px-4 py-3 rounded-lg ${
                        isDarkMode ? 'bg-gray-800/50 text-white' : 'bg-gray-50 text-gray-900'
                      }`}>
                        {profile.email}
                      </div>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className={`flex items-center gap-2 text-sm font-semibold mb-2 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      <Phone className="w-4 h-4" />
                      Phone Number
                    </label>
                    {isEditing ? (
                      <input
                        type="tel"
                        value={editedProfile.phone}
                        onChange={(e) => setEditedProfile({ ...editedProfile, phone: e.target.value })}
                        title="Phone Number"
                        className={`w-full px-4 py-3 rounded-lg border-2 ${
                          isDarkMode
                            ? 'bg-gray-800 border-gray-700 text-white'
                            : 'bg-white border-gray-300 text-gray-900'
                        } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      />
                    ) : (
                      <div className={`px-4 py-3 rounded-lg ${
                        isDarkMode ? 'bg-gray-800/50 text-white' : 'bg-gray-50 text-gray-900'
                      }`}>
                        {profile.phone}
                      </div>
                    )}
                  </div>

                  {/* Location */}
                  <div>
                    <label className={`flex items-center gap-2 text-sm font-semibold mb-2 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      <MapPin className="w-4 h-4" />
                      Location
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={editedProfile.location}
                        onChange={(e) => setEditedProfile({ ...editedProfile, location: e.target.value })}
                        title="Location"
                        className={`w-full px-4 py-3 rounded-lg border-2 ${
                          isDarkMode
                            ? 'bg-gray-800 border-gray-700 text-white'
                            : 'bg-white border-gray-300 text-gray-900'
                        } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      />
                    ) : (
                      <div className={`px-4 py-3 rounded-lg ${
                        isDarkMode ? 'bg-gray-800/50 text-white' : 'bg-gray-50 text-gray-900'
                      }`}>
                        {profile.location}
                      </div>
                    )}
                  </div>
                </div>
              </Card>

              {/* Professional Information */}
              <Card className={`p-6 ${
                isDarkMode
                  ? 'bg-gray-900/50 border-gray-800'
                  : 'bg-white border-gray-200'
              } shadow-xl`}>
                <h3 className={`text-xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Professional Information
                </h3>

                <div className="grid grid-cols-2 gap-6">
                  {/* Role */}
                  <div>
                    <label className={`flex items-center gap-2 text-sm font-semibold mb-2 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      <Briefcase className="w-4 h-4" />
                      Role/Position
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={editedProfile.role}
                        onChange={(e) => setEditedProfile({ ...editedProfile, role: e.target.value })}
                        title="Role/Position"
                        className={`w-full px-4 py-3 rounded-lg border-2 ${
                          isDarkMode
                            ? 'bg-gray-800 border-gray-700 text-white'
                            : 'bg-white border-gray-300 text-gray-900'
                        } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      />
                    ) : (
                      <div className={`px-4 py-3 rounded-lg ${
                        isDarkMode ? 'bg-gray-800/50 text-white' : 'bg-gray-50 text-gray-900'
                      }`}>
                        {profile.role}
                      </div>
                    )}
                  </div>

                  {/* Department */}
                  <div>
                    <label className={`flex items-center gap-2 text-sm font-semibold mb-2 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      <Building2 className="w-4 h-4" />
                      Department
                    </label>
                    {isEditing ? (
                      <select
                        value={editedProfile.department}
                        onChange={(e) => setEditedProfile({ ...editedProfile, department: e.target.value })}
                        title="Department"
                        className={`w-full px-4 py-3 rounded-lg border-2 ${
                          isDarkMode
                            ? 'bg-gray-800 border-gray-700 text-white'
                            : 'bg-white border-gray-300 text-gray-900'
                        } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      >
                        <option>Computer Science Engineering</option>
                        <option>Electrical Engineering</option>
                        <option>Mechanical Engineering</option>
                        <option>Civil Engineering</option>
                        <option>Electronics & Communication</option>
                        <option>Information Technology</option>
                      </select>
                    ) : (
                      <div className={`px-4 py-3 rounded-lg ${
                        isDarkMode ? 'bg-gray-800/50 text-white' : 'bg-gray-50 text-gray-900'
                      }`}>
                        {profile.department}
                      </div>
                    )}
                  </div>

                  {/* Institution */}
                  <div>
                    <label className={`flex items-center gap-2 text-sm font-semibold mb-2 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      <Building2 className="w-4 h-4" />
                      Institution
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={editedProfile.institution}
                        onChange={(e) => setEditedProfile({ ...editedProfile, institution: e.target.value })}
                        title="Institution"
                        className={`w-full px-4 py-3 rounded-lg border-2 ${
                          isDarkMode
                            ? 'bg-gray-800 border-gray-700 text-white'
                            : 'bg-white border-gray-300 text-gray-900'
                        } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      />
                    ) : (
                      <div className={`px-4 py-3 rounded-lg ${
                        isDarkMode ? 'bg-gray-800/50 text-white' : 'bg-gray-50 text-gray-900'
                      }`}>
                        {profile.institution}
                      </div>
                    )}
                  </div>

                  {/* Office */}
                  <div>
                    <label className={`flex items-center gap-2 text-sm font-semibold mb-2 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      <MapPin className="w-4 h-4" />
                      Office Location
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={editedProfile.office}
                        onChange={(e) => setEditedProfile({ ...editedProfile, office: e.target.value })}
                        title="Office Location"
                        className={`w-full px-4 py-3 rounded-lg border-2 ${
                          isDarkMode
                            ? 'bg-gray-800 border-gray-700 text-white'
                            : 'bg-white border-gray-300 text-gray-900'
                        } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      />
                    ) : (
                      <div className={`px-4 py-3 rounded-lg ${
                        isDarkMode ? 'bg-gray-800/50 text-white' : 'bg-gray-50 text-gray-900'
                      }`}>
                        {profile.office}
                      </div>
                    )}
                  </div>

                  {/* Join Date */}
                  <div>
                    <label className={`flex items-center gap-2 text-sm font-semibold mb-2 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      <Calendar className="w-4 h-4" />
                      Join Date
                    </label>
                    <div className={`px-4 py-3 rounded-lg ${
                      isDarkMode ? 'bg-gray-800/50 text-white' : 'bg-gray-50 text-gray-900'
                    }`}>
                      {profile.joinDate}
                    </div>
                  </div>

                  {/* Employee ID */}
                  <div>
                    <label className={`flex items-center gap-2 text-sm font-semibold mb-2 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      <Shield className="w-4 h-4" />
                      Employee ID
                    </label>
                    <div className={`px-4 py-3 rounded-lg ${
                      isDarkMode ? 'bg-gray-800/50 text-white' : 'bg-gray-50 text-gray-900'
                    }`}>
                      {profile.employeeId}
                    </div>
                  </div>
                </div>
              </Card>

              {/* Bio Section */}
              <Card className={`p-6 ${
                isDarkMode
                  ? 'bg-gray-900/50 border-gray-800'
                  : 'bg-white border-gray-200'
              } shadow-xl`}>
                <h3 className={`text-xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Biography
                </h3>

                {isEditing ? (
                  <textarea
                    value={editedProfile.bio}
                    onChange={(e) => setEditedProfile({ ...editedProfile, bio: e.target.value })}
                    rows={4}
                    className={`w-full px-4 py-3 rounded-lg border-2 ${
                      isDarkMode
                        ? 'bg-gray-800 border-gray-700 text-white'
                        : 'bg-white border-gray-300 text-gray-900'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder="Write a brief description about yourself..."
                  />
                ) : (
                  <div className={`px-4 py-3 rounded-lg ${
                    isDarkMode ? 'bg-gray-800/50 text-gray-300' : 'bg-gray-50 text-gray-700'
                  }`}>
                    {profile.bio}
                  </div>
                )}
              </Card>

              {/* Preferences */}
              <Card className={`p-6 ${
                isDarkMode
                  ? 'bg-gray-900/50 border-gray-800'
                  : 'bg-white border-gray-200'
              } shadow-xl`}>
                <h3 className={`text-xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Notification Preferences
                </h3>

                <div className="space-y-4">
                  {/* Push Notifications */}
                  <div className={`flex items-center justify-between p-4 rounded-lg ${
                    isDarkMode ? 'bg-gray-800/50' : 'bg-gray-50'
                  }`}>
                    <div className="flex items-center gap-3">
                      <Bell className="w-5 h-5 text-blue-500" />
                      <div>
                        <div className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                          Push Notifications
                        </div>
                        <div className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          Receive push notifications for important updates
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => setEditedProfile({ 
                        ...editedProfile, 
                        notifications: !editedProfile.notifications 
                      })}
                      disabled={!isEditing}
                      title="Toggle push notifications"
                      className={`relative w-12 h-6 rounded-full transition-colors ${
                        editedProfile.notifications ? 'bg-blue-500' : isDarkMode ? 'bg-gray-700' : 'bg-gray-300'
                      } ${!isEditing && 'opacity-50 cursor-not-allowed'}`}
                    >
                      <div className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition-transform ${
                        editedProfile.notifications ? 'translate-x-6' : 'translate-x-0'
                      }`} />
                    </button>
                  </div>

                  {/* Email Notifications */}
                  <div className={`flex items-center justify-between p-4 rounded-lg ${
                    isDarkMode ? 'bg-gray-800/50' : 'bg-gray-50'
                  }`}>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-blue-500" />
                      <div>
                        <div className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                          Email Notifications
                        </div>
                        <div className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          Get notified about results and reports via email
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => setEditedProfile({ 
                        ...editedProfile, 
                        emailNotifications: !editedProfile.emailNotifications 
                      })}
                      disabled={!isEditing}
                      title="Toggle email notifications"
                      className={`relative w-12 h-6 rounded-full transition-colors ${
                        editedProfile.emailNotifications ? 'bg-blue-500' : isDarkMode ? 'bg-gray-700' : 'bg-gray-300'
                      } ${!isEditing && 'opacity-50 cursor-not-allowed'}`}
                    >
                      <div className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition-transform ${
                        editedProfile.emailNotifications ? 'translate-x-6' : 'translate-x-0'
                      }`} />
                    </button>
                  </div>

                  {/* Analytics Reports */}
                  <div className={`flex items-center justify-between p-4 rounded-lg ${
                    isDarkMode ? 'bg-gray-800/50' : 'bg-gray-50'
                  }`}>
                    <div className="flex items-center gap-3">
                      <Upload className="w-5 h-5 text-blue-500" />
                      <div>
                        <div className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                          Weekly Analytics Reports
                        </div>
                        <div className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          Receive weekly summary of student performance
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => setEditedProfile({ 
                        ...editedProfile, 
                        analyticsReports: !editedProfile.analyticsReports 
                      })}
                      disabled={!isEditing}
                      title="Toggle weekly analytics reports"
                      className={`relative w-12 h-6 rounded-full transition-colors ${
                        editedProfile.analyticsReports ? 'bg-blue-500' : isDarkMode ? 'bg-gray-700' : 'bg-gray-300'
                      } ${!isEditing && 'opacity-50 cursor-not-allowed'}`}
                    >
                      <div className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition-transform ${
                        editedProfile.analyticsReports ? 'translate-x-6' : 'translate-x-0'
                      }`} />
                    </button>
                  </div>
                </div>
              </Card>

              {/* Save Button (shown when editing) */}
              {isEditing && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <Button
                    onClick={handleSaveProfile}
                    disabled={isSaving}
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold py-4 rounded-xl shadow-lg text-lg"
                  >
                    {isSaving ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                        Saving Changes...
                      </>
                    ) : (
                      <>
                        <Save className="w-5 h-5 mr-2" />
                        Save All Changes
                      </>
                    )}
                  </Button>
                </motion.div>
              )}
            </motion.div>
          </div>
        </main>
      </div>

      {/* Change Password Modal */}
      <AnimatePresence>
        {showPasswordModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowPasswordModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className={`max-w-md w-full rounded-2xl shadow-2xl p-8 ${
                isDarkMode ? 'bg-gray-900 border-2 border-gray-800' : 'bg-white border-2 border-gray-200'
              }`}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Change Password
                </h3>
                <button
                  onClick={() => setShowPasswordModal(false)}
                  title="Close"
                  className={`p-2 rounded-lg transition-colors ${
                    isDarkMode ? 'hover:bg-gray-800 text-gray-400' : 'hover:bg-gray-100 text-gray-600'
                  }`}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4">
                {/* Current Password */}
                <div>
                  <label className={`text-sm font-semibold mb-2 block ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Current Password
                  </label>
                  <div className="relative">
                    <input
                      type={showCurrentPassword ? 'text' : 'password'}
                      value={passwordData.currentPassword}
                      onChange={(e) => setPasswordData({ ...passwordData, currentPassword: e.target.value })}
                      className={`w-full px-4 py-3 rounded-lg border-2 pr-12 ${
                        isDarkMode
                          ? 'bg-gray-800 border-gray-700 text-white'
                          : 'bg-white border-gray-300 text-gray-900'
                      } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      placeholder="Enter current password"
                    />
                    <button
                      onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showCurrentPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                {/* New Password */}
                <div>
                  <label className={`text-sm font-semibold mb-2 block ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    New Password
                  </label>
                  <div className="relative">
                    <input
                      type={showNewPassword ? 'text' : 'password'}
                      value={passwordData.newPassword}
                      onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })}
                      className={`w-full px-4 py-3 rounded-lg border-2 pr-12 ${
                        isDarkMode
                          ? 'bg-gray-800 border-gray-700 text-white'
                          : 'bg-white border-gray-300 text-gray-900'
                      } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      placeholder="Enter new password"
                    />
                    <button
                      onClick={() => setShowNewPassword(!showNewPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showNewPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                {/* Confirm Password */}
                <div>
                  <label className={`text-sm font-semibold mb-2 block ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Confirm New Password
                  </label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      value={passwordData.confirmPassword}
                      onChange={(e) => setPasswordData({ ...passwordData, confirmPassword: e.target.value })}
                      className={`w-full px-4 py-3 rounded-lg border-2 pr-12 ${
                        isDarkMode
                          ? 'bg-gray-800 border-gray-700 text-white'
                          : 'bg-white border-gray-300 text-gray-900'
                      } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      placeholder="Confirm new password"
                    />
                    <button
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                {/* Password Requirements */}
                <div className={`p-3 rounded-lg ${
                  isDarkMode ? 'bg-blue-500/10 border border-blue-500/30' : 'bg-blue-50 border border-blue-200'
                }`}>
                  <p className={`text-xs ${isDarkMode ? 'text-blue-300' : 'text-blue-700'}`}>
                    Password must be at least 8 characters long and include uppercase, lowercase, numbers, and special characters.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <Button
                  onClick={() => setShowPasswordModal(false)}
                  variant="outline"
                  className={`flex-1 ${
                    isDarkMode
                      ? 'border-gray-700 hover:bg-gray-800 text-gray-300'
                      : 'border-gray-300 hover:bg-gray-50 text-gray-700'
                  }`}
                >
                  Cancel
                </Button>
                <Button
                  onClick={handlePasswordChange}
                  disabled={isSaving || !passwordData.currentPassword || !passwordData.newPassword || !passwordData.confirmPassword}
                  className="flex-1 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white"
                >
                  {isSaving ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      Changing...
                    </>
                  ) : (
                    <>
                      <Lock className="w-4 h-4 mr-2" />
                      Change Password
                    </>
                  )}
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}