import React, { useState } from 'react';
import { Sidebar } from '../components/Sidebar';
import { ModernNavbar } from '../components/ModernNavbar';
import { useTheme } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'motion/react';
import {
  Shield, Lock, Eye, EyeOff, Smartphone, Globe, Clock,
  LogOut, Sun, Moon, Monitor, Bell, Mail, AlertTriangle,
  Trash2, UserX, Check, X, ChevronRight, Palette, Zap,
  Inbox, TrendingDown, Wrench, MessageSquare, LayoutDashboard,
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';

// ─── Types ───────────────────────────────────────────────────────────────────

interface Session {
  id: string;
  device: string;
  browser: string;
  location: string;
  lastActive: string;
  isCurrent: boolean;
}

// ─── Toggle Switch ────────────────────────────────────────────────────────────

function Toggle({
  checked,
  onChange,
  isDarkMode,
}: {
  checked: boolean;
  onChange: () => void;
  isDarkMode: boolean;
}) {
  return (
    <label className="relative inline-flex items-center cursor-pointer" title={checked ? "Enabled" : "Disabled"}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="sr-only peer"
        title="Toggle switch"
      />
      <div
        className={`w-12 h-6 rounded-full transition-all duration-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 peer-focus:ring-offset-2 ${checked ? 'bg-blue-500' : isDarkMode ? 'bg-gray-700' : 'bg-gray-300'
          }`}
      >
        <div
          className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white shadow-sm transition-transform duration-300 ${checked ? 'translate-x-6' : 'translate-x-0'
            }`}
        />
      </div>
    </label>
  );
}

// ─── Section Header ───────────────────────────────────────────────────────────

function SectionHeader({
  icon: Icon,
  title,
  subtitle,
  isDarkMode,
  iconColor = 'text-blue-500',
}: {
  icon: React.ElementType;
  title: string;
  subtitle: string;
  isDarkMode: boolean;
  iconColor?: string;
}) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <div className="w-11 h-11 flex items-center justify-center flex-shrink-0">
        <Icon className={`w-5 h-5 ${iconColor}`} />
      </div>
      <div>
        <h2 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          {title}
        </h2>
        <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          {subtitle}
        </p>
      </div>
    </div>
  );
}

// ─── Divider ─────────────────────────────────────────────────────────────────

function Divider({ isDarkMode }: { isDarkMode: boolean }) {
  return (
    <div className={`my-8 border-t-2 ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`} />
  );
}

// ─── Password Input ───────────────────────────────────────────────────────────

function PasswordInput({
  label,
  value,
  onChange,
  isDarkMode,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  isDarkMode: boolean;
}) {
  const [show, setShow] = useState(false);
  return (
    <div>
      <label
        className={`block text-sm font-semibold mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'
          }`}
      >
        {label}
      </label>
      <div className="relative">
        <input
          type={show ? 'text' : 'password'}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`w-full px-4 py-3 pr-12 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${isDarkMode
            ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500'
            : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'
            }`}
          placeholder="••••••••"
        />
        <button
          type="button"
          onClick={() => setShow(!show)}
          className={`absolute right-3 top-1/2 -translate-y-1/2 ${isDarkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-400 hover:text-gray-600'
            } transition-colors`}
        >
          {show ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
        </button>
      </div>
    </div>
  );
}

// ─── Delete Confirm Modal ─────────────────────────────────────────────────────

function DeleteModal({
  isDarkMode,
  onClose,
  onConfirm,
}: {
  isDarkMode: boolean;
  onClose: () => void;
  onConfirm: () => void;
}) {
  const [confirmText, setConfirmText] = useState('');
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <motion.div
        className={`relative w-full max-w-md rounded-2xl shadow-2xl p-6 ${isDarkMode ? 'bg-gray-900 border border-gray-800' : 'bg-white'
          }`}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
            <Trash2 className="w-5 h-5 text-red-600" />
          </div>
          <h3 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Delete Account
          </h3>
        </div>
        <p className={`text-sm mb-4 leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          This action is <strong>permanent and cannot be undone</strong>. All your data, reports, student records, and configurations will be permanently deleted.
        </p>
        <p className={`text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          Type <span className="font-bold text-red-500">DELETE</span> to confirm:
        </p>
        <input
          type="text"
          value={confirmText}
          onChange={(e) => setConfirmText(e.target.value)}
          className={`w-full px-4 py-2.5 rounded-lg border mb-4 focus:outline-none focus:ring-2 focus:ring-red-500 ${isDarkMode
            ? 'bg-gray-800 border-gray-700 text-white'
            : 'bg-white border-gray-300 text-gray-900'
            }`}
          placeholder="Type DELETE"
        />
        <div className="flex gap-3">
          <Button
            onClick={onClose}
            variant="outline"
            className={`flex-1 ${isDarkMode ? 'border-gray-700 hover:bg-gray-800 text-gray-300' : ''
              }`}
          >
            Cancel
          </Button>
          <Button
            onClick={onConfirm}
            disabled={confirmText !== 'DELETE'}
            className="flex-1 bg-red-600 hover:bg-red-700 text-white disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Delete Account
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── Main Settings Page ───────────────────────────────────────────────────────

export function Settings() {
  const { isDarkMode, toggleDarkMode, setDarkMode } = useTheme();

  // Security
  const [passwords, setPasswords] = useState({
    current: '',
    newPass: '',
    confirm: '',
  });
  const [twoFAEnabled, setTwoFAEnabled] = useState(true);
  const [sessions] = useState<Session[]>([
    {
      id: '1',
      device: 'Windows PC',
      browser: 'Chrome 122',
      location: 'Mumbai, India',
      lastActive: 'Active now',
      isCurrent: true,
    },
    {
      id: '2',
      device: 'iPhone 14',
      browser: 'Safari 17',
      location: 'Mumbai, India',
      lastActive: '2 hours ago',
      isCurrent: false,
    },
    {
      id: '3',
      device: 'MacBook Pro',
      browser: 'Firefox 123',
      location: 'Pune, India',
      lastActive: 'Yesterday, 3:45 PM',
      isCurrent: false,
    },
  ]);

  // Appearance — theme tracks the 3-way selector; syncs to global context
  const [theme, setThemeLocal] = useState<'light' | 'dark' | 'system'>(
    isDarkMode ? 'dark' : 'light'
  );
  const setTheme = (value: 'light' | 'dark' | 'system') => {
    setThemeLocal(value);
    setDarkMode(value === 'dark');
  };
  const [accentColor, setAccentColor] = useState<'blue' | 'indigo' | 'purple' | 'teal' | 'rose' | 'amber' | 'green'>('blue');
  const [density, setDensity] = useState<'comfortable' | 'compact'>('comfortable');

  // Notifications
  const [notifications, setNotifications] = useState({
    email: true,
    studentAlerts: true,
    maintenance: false,
    inApp: true,
  });

  // Modals / Toasts
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);

  const showSuccessToast = (msg: string) => {
    setToastMessage(msg);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handlePasswordUpdate = () => {
    if (!passwords.current || !passwords.newPass || !passwords.confirm) {
      return;
    }
    if (passwords.newPass !== passwords.confirm) {
      setToastMessage('New passwords do not match');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
      return;
    }
    if (passwords.newPass.length < 8) {
      setToastMessage('Password must be at least 8 characters');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
      return;
    }
    setPasswords({ current: '', newPass: '', confirm: '' });
    showSuccessToast('Password updated successfully');
  };

  const cardClass = `p-6 rounded-2xl shadow-sm border ${isDarkMode
    ? 'bg-gray-900/60 border-gray-800'
    : 'bg-white border-gray-200'
    }`;

  const accentColorOptions = [
    { key: 'blue', hex: '#3b82f6', label: 'Blue' },
    { key: 'indigo', hex: '#6366f1', label: 'Indigo' },
    { key: 'purple', hex: '#a855f7', label: 'Purple' },
    { key: 'teal', hex: '#14b8a6', label: 'Teal' },
    { key: 'rose', hex: '#f43f5e', label: 'Rose' },
    { key: 'amber', hex: '#f59e0b', label: 'Amber' },
    { key: 'green', hex: '#22c55e', label: 'Green' },
  ] as const;

  return (
    <div
      className={`min-h-screen transition-colors ${isDarkMode
        ? 'bg-gray-950'
        : 'bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/30'
        }`}
    >
      <Sidebar isDarkMode={isDarkMode} />

      <div className="ml-20">
        <ModernNavbar
          isDarkMode={isDarkMode}
          onToggleDarkMode={toggleDarkMode}
        />

        <main className="p-6 max-w-[1600px] mx-auto">

          {/* ── Success Toast ─────────────────────────────────────────────── */}
          <AnimatePresence>
            {showToast && (
              <motion.div
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                className="fixed top-24 right-6 z-50"
              >
                <div className="bg-green-500 text-white px-6 py-3.5 rounded-xl shadow-2xl flex items-center gap-3">
                  <Check className="w-4 h-4 flex-shrink-0" />
                  <span className="font-semibold text-sm">{toastMessage}</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* ── Page Header ───────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Account Settings
                </h1>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  Manage security, appearance, and notification preferences
                </p>
              </div>
            </div>
          </motion.div>

          <div className="space-y-8">

            {/* ══════════════════════════════════════════════════════════════
                SECTION 1 — SECURITY SETTINGS
            ══════════════════════════════════════════════════════════════ */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className={cardClass}
            >
              <SectionHeader
                icon={Lock}
                title="Security Settings"
                subtitle="Manage authentication and account protection"
                isDarkMode={isDarkMode}
                iconColor="text-blue-500"
              />

              {/* A. Change Password */}
              <div>
                <h3
                  className={`text-sm font-semibold uppercase tracking-wider mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}
                >
                  Change Password
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <PasswordInput
                      label="Current Password"
                      value={passwords.current}
                      onChange={(v) => setPasswords({ ...passwords, current: v })}
                      isDarkMode={isDarkMode}
                    />
                  </div>
                  <PasswordInput
                    label="New Password"
                    value={passwords.newPass}
                    onChange={(v) => setPasswords({ ...passwords, newPass: v })}
                    isDarkMode={isDarkMode}
                  />
                  <PasswordInput
                    label="Confirm New Password"
                    value={passwords.confirm}
                    onChange={(v) => setPasswords({ ...passwords, confirm: v })}
                    isDarkMode={isDarkMode}
                  />
                </div>
                <div className="flex justify-end mt-6 mb-2">
                  <Button
                    onClick={handlePasswordUpdate}
                    className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white shadow-md px-6"
                  >
                    Update Password
                  </Button>
                </div>
              </div>

              <Divider isDarkMode={isDarkMode} />

              {/* B. Two-Factor Authentication */}
              <div className="flex items-start justify-between gap-4 pt-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Smartphone className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <div className={`font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      Two-Factor Authentication
                    </div>
                    <div className={`text-sm mt-0.5 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      Add an extra layer of security to your account.
                    </div>
                    {twoFAEnabled && (
                      <div className="flex items-start gap-2 mt-2">
                        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-green-700 bg-green-100 px-3 py-1.5 rounded-full whitespace-nowrap min-h-[24px]">
                          <svg className="w-3.5 h-3.5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3.25-3.25a1 1 0 011.414-1.414l2.543 2.543 6.543-6.543a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          Enabled
                        </span>

                        <button
                          className={`text-xs font-medium leading-none px-1 py-1.5 underline underline-offset-2 ${isDarkMode
                            ? 'text-blue-400 hover:text-blue-300'
                            : 'text-blue-600 hover:text-blue-700'
                            }`}
                        >
                          View Recovery Codes
                        </button>
                      </div>
                    )}
                  </div>
                </div>
                <Toggle
                  checked={twoFAEnabled}
                  onChange={() => {
                    setTwoFAEnabled(!twoFAEnabled);
                    showSuccessToast(
                      twoFAEnabled ? '2FA disabled' : '2FA enabled successfully'
                    );
                  }}
                  isDarkMode={isDarkMode}
                />
              </div>

              <Divider isDarkMode={isDarkMode} />

              {/* C. Active Sessions */}
              <div className="mt-8">
                <h3
                  className={`text-sm font-semibold uppercase tracking-wider mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}
                >
                  Active Sessions
                </h3>
                <div className="space-y-3">
                  {sessions.map((session) => (
                    <div
                      key={session.id}
                      className={`flex items-center justify-between p-4 rounded-xl ${isDarkMode
                        ? 'border border-gray-700 bg-transparent'
                        : 'bg-gray-50'
                        } ${session.isCurrent ? 'ring-2 ring-blue-500/30' : ''}`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${isDarkMode ? 'bg-gray-700' : 'bg-white border border-gray-200'
                            }`}
                        >
                          {session.device.includes('iPhone') || session.device.includes('iPad') ? (
                            <Smartphone className="w-5 h-5 text-gray-500" />
                          ) : (
                            <Globe className="w-5 h-5 text-gray-500" />
                          )}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span
                              className={`font-semibold text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'
                                }`}
                            >
                              {session.browser} · {session.device}
                            </span>
                            {session.isCurrent && (
                              <span className="text-xs font-medium bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">
                                This device
                              </span>
                            )}
                          </div>
                          <div
                            className={`text-xs flex items-center gap-1.5 mt-0.5 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'
                              }`}
                          >
                            <Globe className="w-3 h-3" />
                            {session.location}
                            <span className="opacity-40">·</span>
                            <Clock className="w-3 h-3" />
                            {session.lastActive}
                          </div>
                        </div>
                      </div>
                      {!session.isCurrent && (
                        <Button
                          variant="outline"
                          size="sm"
                          className={`text-xs font-semibold border-2 border-red-500 text-red-500 bg-transparent hover:bg-red-50 dark:hover:bg-red-950/30 rounded-xl px-4 py-2 transition-all`}
                        >
                          <LogOut className="w-3.5 h-3.5 mr-1.5" />
                          Logout
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
                <div className="mt-5 flex justify-end">
                  <Button
                    className="text-sm font-semibold bg-red-600 hover:bg-red-700 text-white border-0 rounded-xl px-5 py-2.5 shadow-md transition-all"
                    onClick={() => showSuccessToast('Logged out from all other devices')}
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Logout from all devices
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* ══════════════════════════════════════════════════════════════
                SECTION 2 — APPEARANCE
            ══════════════════════════════════════════════════════════════ */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className={cardClass}
            >
              <SectionHeader
                icon={LayoutDashboard}
                title="Appearance"
                subtitle="Customize how the dashboard looks"
                isDarkMode={isDarkMode}
                iconColor="text-blue-500"
              />

              {/* A. Theme Mode */}
              <div>
                <h3
                  className={`text-sm font-semibold uppercase tracking-wider mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}
                >
                  Theme Mode
                </h3>
                <div className="grid grid-cols-3 gap-4 max-w-lg">
                  {(
                    [
                      { value: 'light', label: 'Light', icon: Sun },
                      { value: 'dark', label: 'Dark', icon: Moon },
                      { value: 'system', label: 'System', icon: Monitor },
                    ] as const
                  ).map(({ value, label, icon: Icon }) => (
                    <button
                      key={value}
                      onClick={() => setTheme(value)}
                      className={`flex flex-col items-center gap-3 p-4 rounded-xl border transition-all ${theme === value
                        ? isDarkMode
                          ? 'border-blue-500 bg-blue-500/10'
                          : 'border-blue-500 bg-blue-50'
                        : isDarkMode
                          ? 'border-gray-700 hover:border-gray-600 bg-gray-800/40'
                          : 'border-gray-200 hover:border-gray-300 bg-gray-50'
                        }`}
                    >
                      {/* Mini UI preview */}
                      <div
                        className={`w-full h-16 rounded-lg overflow-hidden border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'
                          } flex`}
                      >
                        {/* Mini sidebar */}
                        <div className={`w-5 h-full flex flex-col items-center pt-1.5 gap-1 ${value === 'dark' ? 'bg-gray-800'
                          : value === 'system' ? 'bg-gray-700'
                            : 'bg-gray-100'
                          }`}>
                          {[0, 1, 2, 3].map((i) => (
                            <div key={i} className={`w-2.5 h-0.5 rounded-full ${i === 0 ? 'bg-blue-500'
                              : (value === 'dark' || value === 'system') ? 'bg-gray-600'
                                : 'bg-gray-300'
                              }`} />
                          ))}
                        </div>
                        {/* Mini content area */}
                        <div className={`flex-1 h-full p-1.5 flex flex-col gap-1 ${value === 'dark' ? 'bg-gray-900'
                          : value === 'system' ? 'bg-gray-800'
                            : 'bg-white'
                          }`}>
                          <div className={`w-full h-1.5 rounded ${(value === 'dark' || value === 'system') ? 'bg-gray-700' : 'bg-gray-100'
                            }`} />
                          <div className="flex gap-1">
                            <div className={`flex-1 h-4 rounded ${(value === 'dark' || value === 'system') ? 'bg-gray-700' : 'bg-gray-100'
                              }`} />
                            <div className={`flex-1 h-4 rounded ${(value === 'dark' || value === 'system') ? 'bg-gray-700' : 'bg-gray-100'
                              }`} />
                          </div>
                          <div className={`w-2/3 h-1.5 rounded ${(value === 'dark' || value === 'system') ? 'bg-gray-700' : 'bg-gray-100'
                            }`} />
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Icon
                          className={`w-3.5 h-3.5 ${theme === value
                            ? 'text-blue-500'
                            : isDarkMode
                              ? 'text-gray-400'
                              : 'text-gray-500'
                            }`}
                        />
                        <span
                          className={`text-xs font-semibold ${theme === value
                            ? 'text-blue-600'
                            : isDarkMode
                              ? 'text-gray-300'
                              : 'text-gray-700'
                            }`}
                        >
                          {label}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <Divider isDarkMode={isDarkMode} />

              {/* B. Accent Color */}
              <div className="mt-8">
                <h3
                  className={`text-sm font-semibold uppercase tracking-wider mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}
                >
                  Accent Color
                </h3>
                <div className="flex items-center gap-3 flex-wrap">
                  {accentColorOptions.map(({ key, hex, label }) => (
                    <button
                      key={key}
                      onClick={() => setAccentColor(key)}
                      title={label}
                      style={{ backgroundColor: hex }}
                      className={`w-10 h-10 rounded-full transition-all shadow-md hover:scale-110 focus:outline-none ${accentColor === key
                        ? `ring-2 ring-offset-2 ${isDarkMode ? 'ring-offset-gray-900' : 'ring-offset-white'} ring-gray-400 scale-110`
                        : ''
                        }`}
                    />
                  ))}
                </div>
              </div>

              <Divider isDarkMode={isDarkMode} />

              {/* C. Dashboard Density */}
              <div className="mt-8">
                <h3
                  className={`text-sm font-semibold uppercase tracking-wider mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}
                >
                  Dashboard Density
                </h3>
                <div className="space-y-3 max-w-sm">
                  {(
                    [
                      { value: 'comfortable', label: 'Comfortable' },
                      { value: 'compact', label: 'Compact' },
                    ] as const
                  ).map(({ value, label }) => (
                    <button
                      key={value}
                      type="button"
                      onClick={() => setDensity(value)}
                      className={`w-full flex items-center gap-3 p-3.5 rounded-xl border-2 cursor-pointer transition-all text-left ${density === value
                        ? isDarkMode
                          ? 'border-blue-500 bg-blue-500/10'
                          : 'border-blue-500 bg-blue-50'
                        : isDarkMode
                          ? 'border-gray-700 hover:border-gray-600'
                          : 'border-gray-200 hover:border-gray-300'
                        }`}
                    >
                      <div
                        className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${density === value
                          ? 'border-blue-500'
                          : isDarkMode
                            ? 'border-gray-600'
                            : 'border-gray-400'
                          }`}
                      >
                        {density === value && (
                          <div className="w-2 h-2 rounded-full bg-blue-500" />
                        )}
                      </div>
                      <span
                        className={`text-sm font-semibold ${isDarkMode ? 'text-gray-200' : 'text-gray-800'
                          }`}
                      >
                        {label}
                      </span>
                    </button>
                  ))}
                </div>
                <p
                  className={`mt-3 text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-400'
                    }`}
                >
                  Compact mode reduces spacing for more content visibility.
                </p>
              </div>
            </motion.div>

            {/* ══════════════════════════════════════════════════════════════
                SECTION 3 — NOTIFICATION PREFERENCES
            ══════════════════════════════════════════════════════════════ */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className={cardClass}
            >
              <SectionHeader
                icon={Bell}
                title="Notifications"
                subtitle="Control how you receive updates"
                isDarkMode={isDarkMode}
                iconColor="text-orange-500"
              />

              <div className="space-y-1">
                {(
                  [
                    {
                      key: 'email' as const,
                      icon: Inbox,
                      title: 'Email Notifications',
                      desc: 'Receive report upload alerts and summaries via email',
                    },
                    {
                      key: 'studentAlerts' as const,
                      icon: TrendingDown,
                      title: 'Student Performance Alerts',
                      desc: 'Notify when a student drops below performance threshold',
                    },
                    {
                      key: 'maintenance' as const,
                      icon: Wrench,
                      title: 'System Maintenance Alerts',
                      desc: 'Notify about scheduled maintenance windows',
                    },
                    {
                      key: 'inApp' as const,
                      icon: MessageSquare,
                      title: 'In-App Notifications',
                      desc: 'Show real-time dashboard alerts and updates',
                    },
                  ]
                ).map(({ key, icon: Icon, title, desc }, idx, arr) => (
                  <div key={key}>
                    <div className="flex items-start justify-between gap-4 py-4">
                      <div className="flex items-start gap-3">
                        <div className="w-9 h-9 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-gray-600" />
                        </div>
                        <div>
                          <div
                            className={`font-semibold text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'
                              }`}
                          >
                            {title}
                          </div>
                          <div
                            className={`text-xs mt-0.5 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'
                              }`}
                          >
                            {desc}
                          </div>
                        </div>
                      </div>
                      <Toggle
                        checked={notifications[key]}
                        onChange={() =>
                          setNotifications({
                            ...notifications,
                            [key]: !notifications[key],
                          })
                        }
                        isDarkMode={isDarkMode}
                      />
                    </div>
                    {idx < arr.length - 1 && (
                      <div
                        className={`border-t ${isDarkMode ? 'border-gray-800' : 'border-gray-100'
                          }`}
                      />
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* ══════════════════════════════════════════════════════════════
                SECTION 4 — DANGER ZONE
            ══════════════════════════════════════════════════════════════ */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className={`p-6 rounded-2xl border-2 border-red-300 ${isDarkMode ? 'bg-red-950/20' : 'bg-red-50/60'
                }`}
            >
              <SectionHeader
                icon={AlertTriangle}
                title="Danger Zone"
                subtitle="Irreversible and destructive actions"
                isDarkMode={isDarkMode}
                iconColor="text-red-500"
              />

              <div className="space-y-4">
                {/* Logout All Devices */}
                <div
                  className={`flex items-center justify-between p-4 rounded-xl ${isDarkMode ? 'bg-red-950/30' : 'bg-white'
                    } border ${isDarkMode ? 'border-red-900/50' : 'border-red-200'}`}
                >
                  <div>
                    <div className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      Logout from All Devices
                    </div>
                    <div className={`text-sm mt-0.5 ${isDarkMode ? 'text-red-400' : 'text-gray-500'}`}>
                      You will be signed out from every active session immediately.
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="border-red-400 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/30 flex-shrink-0 ml-4"
                    onClick={() => showSuccessToast('Logged out from all devices')}
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Logout All
                  </Button>
                </div>

                {/* Deactivate Account */}
                <div
                  className={`flex items-center justify-between p-4 rounded-xl ${isDarkMode ? 'bg-red-950/30' : 'bg-white'
                    } border ${isDarkMode ? 'border-red-900/50' : 'border-red-200'}`}
                >
                  <div>
                    <div className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      Deactivate Account
                    </div>
                    <div className={`text-sm mt-0.5 ${isDarkMode ? 'text-red-400' : 'text-gray-500'}`}>
                      Your account will be disabled. You can reactivate it later by contacting admin.
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="border-red-500 text-red-600 hover:bg-red-100 dark:hover:bg-red-900/30 flex-shrink-0 ml-4"
                  >
                    <UserX className="w-4 h-4 mr-2" />
                    Deactivate
                  </Button>
                </div>

                {/* Delete Account */}
                <div
                  className={`flex items-center justify-between p-4 rounded-xl ${isDarkMode ? 'bg-red-950/30' : 'bg-white'
                    } border ${isDarkMode ? 'border-red-900/50' : 'border-red-200'}`}
                >
                  <div>
                    <div className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      Delete Account
                    </div>
                    <div className={`text-sm mt-0.5 ${isDarkMode ? 'text-red-400' : 'text-gray-500'}`}>
                      <span className={`font-semibold ${isDarkMode ? 'text-red-300' : 'text-gray-700'}`}>This action is permanent and cannot be undone.</span>{' '}
                      All your data will be deleted.
                    </div>
                  </div>
                  <Button
                    className="bg-red-600 hover:bg-red-700 text-white flex-shrink-0 ml-4 shadow-md"
                    onClick={() => setShowDeleteModal(true)}
                  >
                    <Trash2 className="w-4 h-4 mr-2" />
                    Delete Account
                  </Button>
                </div>
              </div>
            </motion.div>

          </div>
          {/* end space-y-8 */}
        </main>
      </div>

      {/* ── Delete Confirmation Modal ──────────────────────────────────────── */}
      <AnimatePresence>
        {showDeleteModal && (
          <DeleteModal
            isDarkMode={isDarkMode}
            onClose={() => setShowDeleteModal(false)}
            onConfirm={() => {
              setShowDeleteModal(false);
              showSuccessToast('Account deletion request submitted');
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
