import React, { useState } from 'react';
import { Sidebar } from '../components/Sidebar';
import { ModernNavbar } from '../components/ModernNavbar';
import { useTheme } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'motion/react';
import {
  Shield, Lock, Eye, EyeOff, Smartphone, Globe, Clock,
  LogOut, Sun, Moon, Monitor, Bell, Mail, AlertTriangle,
  Trash2, UserX, Check, X, ChevronRight, LayoutDashboard,
  Inbox, TrendingDown, Wrench, MessageSquare, Settings as SettingsIcon,
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
  disabled = false,
}: {
  checked: boolean;
  onChange: () => void;
  isDarkMode: boolean;
  disabled?: boolean;
}) {
  return (
    <label className={`relative inline-flex items-center ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`} title={checked ? "Enabled" : "Disabled"}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className="sr-only peer"
        title="Toggle switch"
      />
      <div
        className={`w-12 h-6 rounded-full transition-all duration-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 peer-focus:ring-offset-2 ${
          checked ? 'bg-blue-500' : isDarkMode ? 'bg-gray-700' : 'bg-gray-300'
        } ${disabled ? 'opacity-50' : ''}`}
      >
        <div
          className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white shadow-sm transition-transform duration-300 ${
            checked ? 'translate-x-6' : 'translate-x-0'
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
    <div className={`my-6 border-t ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`} />
  );
}

// ─── Password Input ───────────────────────────────────────────────────────────

function PasswordInput({
  label,
  value,
  onChange,
  isDarkMode,
  placeholder = '••••••••',
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  isDarkMode: boolean;
  placeholder?: string;
}) {
  const [show, setShow] = useState(false);
  return (
    <div>
      <label
        className={`block text-sm font-semibold mb-2 ${
          isDarkMode ? 'text-gray-300' : 'text-gray-700'
        }`}
      >
        {label}
      </label>
      <div className="relative">
        <input
          type={show ? 'text' : 'password'}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`w-full px-4 py-3 pr-12 rounded-lg border-2 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            isDarkMode
              ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500'
              : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'
          }`}
          placeholder={placeholder}
        />
        <button
          type="button"
          onClick={() => setShow(!show)}
          className={`absolute right-3 top-1/2 -translate-y-1/2 ${
            isDarkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-400 hover:text-gray-600'
          } transition-colors`}
        >
          {show ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
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
        className={`relative w-full max-w-md rounded-2xl shadow-2xl p-8 ${
          isDarkMode ? 'bg-gray-900 border-2 border-gray-800' : 'bg-white border-2 border-gray-200'
        }`}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-red-100 dark:bg-red-950/30 flex items-center justify-center">
            <Trash2 className="w-6 h-6 text-red-600 dark:text-red-400" />
          </div>
          <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Delete Account
          </h3>
        </div>
        <p className={`text-sm mb-4 leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          This action is <strong className="text-red-500">permanent and cannot be undone</strong>. All your data, reports, student records, and configurations will be permanently deleted.
        </p>
        <p className={`text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          Type <span className="font-bold text-red-500">DELETE</span> to confirm:
        </p>
        <input
          type="text"
          value={confirmText}
          onChange={(e) => setConfirmText(e.target.value)}
          className={`w-full px-4 py-3 rounded-lg border-2 mb-4 focus:outline-none focus:ring-2 focus:ring-red-500 ${
            isDarkMode
              ? 'bg-gray-800 border-gray-700 text-white'
              : 'bg-white border-gray-300 text-gray-900'
          }`}
          placeholder="Type DELETE"
        />
        <div className="flex gap-3">
          <Button
            onClick={onClose}
            variant="outline"
            className={`flex-1 ${
              isDarkMode ? 'border-gray-700 hover:bg-gray-800 text-gray-300' : ''
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
  const { isDarkMode, setDarkMode, toggleDarkMode, accentColor, setAccentColor } = useTheme();

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
      location: 'New York, USA',
      lastActive: 'Active now',
      isCurrent: true,
    },
    {
      id: '2',
      device: 'iPhone 14',
      browser: 'Safari 17',
      location: 'New York, USA',
      lastActive: '2 hours ago',
      isCurrent: false,
    },
    {
      id: '3',
      device: 'MacBook Pro',
      browser: 'Firefox 123',
      location: 'Boston, USA',
      lastActive: 'Yesterday, 3:45 PM',
      isCurrent: false,
    },
  ]);

  // Appearance — initialise from localStorage so the correct button stays
  // selected after a page refresh (including the 'system' choice)
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('themeMode') as 'light' | 'dark' | 'system' | null;
      if (saved === 'light' || saved === 'dark' || saved === 'system') return saved;
      // Fall back to the raw theme key to stay in sync with ThemeProvider
      const raw = localStorage.getItem('theme');
      if (raw === 'dark') return 'dark';
    }
    return 'light';
  });
  // accentColor is now managed globally via ThemeContext
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
      setToastMessage('Please fill in all password fields');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
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

  // Keep a ref to the active media-query listener so we can remove it later
  const systemMqRef = React.useRef<MediaQueryList | null>(null);
  const systemListenerRef = React.useRef<((e: MediaQueryListEvent) => void) | null>(null);

  // Attach / remove the OS media-query listener whenever theme changes
  React.useEffect(() => {
    // Always clean up any previous listener first
    if (systemMqRef.current && systemListenerRef.current) {
      systemMqRef.current.removeEventListener('change', systemListenerRef.current);
      systemMqRef.current = null;
      systemListenerRef.current = null;
    }

    if (theme === 'system') {
      const mq = window.matchMedia('(prefers-color-scheme: dark)');
      const listener = (e: MediaQueryListEvent) => setDarkMode(e.matches);
      mq.addEventListener('change', listener);
      systemMqRef.current = mq;
      systemListenerRef.current = listener;
    }

    return () => {
      if (systemMqRef.current && systemListenerRef.current) {
        systemMqRef.current.removeEventListener('change', systemListenerRef.current);
      }
    };
  }, [theme]);

  const handleThemeChange = (newTheme: 'light' | 'dark' | 'system') => {
    setTheme(newTheme);
    localStorage.setItem('themeMode', newTheme);

    if (newTheme === 'dark') {
      setDarkMode(true);
    } else if (newTheme === 'light') {
      setDarkMode(false);
    } else {
      // 'system' — immediately mirror the current OS preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDarkMode(prefersDark);
    }
  };

  const cardClass = `p-6 rounded-2xl shadow-xl border ${
    isDarkMode
      ? 'bg-gray-900/50 border-gray-800'
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
      className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors"
    >
      <Sidebar isDarkMode={isDarkMode} />

      <div className="ml-20">
        <ModernNavbar
          isDarkMode={isDarkMode}
          onToggleDarkMode={toggleDarkMode}
        />

        <main className="p-6 max-w-[1400px] mx-auto">

          {/* ── Success Toast ─────────────────────────────────────────────── */}
          <AnimatePresence>
            {showToast && (
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                className="fixed top-24 right-6 z-50"
              >
                <div className="bg-green-500 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3">
                  <Check className="w-5 h-5 flex-shrink-0" />
                  <span className="font-semibold">{toastMessage}</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* ── Page Header ───────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6"
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/20 flex-shrink-0">
                <SettingsIcon className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className={`text-3xl font-bold tracking-tight ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Account Settings
                </h1>
                <p className={`text-base mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Manage security, appearance, and notification preferences
                </p>
              </div>
            </div>
          </motion.div>

          <div className="space-y-6">

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
                  className={`text-sm font-semibold mb-4 ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
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
                <div className="flex justify-end mt-6">
                  <Button
                    onClick={handlePasswordUpdate}
                    className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white shadow-lg px-6"
                  >
                    Update Password
                  </Button>
                </div>
              </div>

              <Divider isDarkMode={isDarkMode} />

              {/* B. Two-Factor Authentication */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Smartphone className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <div className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      Two-Factor Authentication
                    </div>
                    <div className={`text-sm mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Add an extra layer of security to your account
                    </div>
                    {twoFAEnabled && (
                      <div className="flex items-center gap-2 mt-2">
                        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-green-700 bg-green-100 dark:bg-green-950/30 dark:text-green-400 px-3 py-1.5 rounded-full">
                          <Check className="w-3.5 h-3.5" />
                          Enabled
                        </span>
                        <button
                          className={`text-xs font-medium underline underline-offset-2 ${
                            isDarkMode
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
              <div>
                <h3
                  className={`text-sm font-semibold mb-4 ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  Active Sessions
                </h3>
                <div className="space-y-3">
                  {sessions.map((session) => (
                    <div
                      key={session.id}
                      className={`flex items-center justify-between p-4 rounded-xl border-2 ${
                        isDarkMode
                          ? 'border-gray-800 bg-gray-800/30'
                          : 'bg-gray-50 border-gray-200'
                      } ${session.isCurrent ? 'ring-2 ring-blue-500/30' : ''}`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                            isDarkMode ? 'bg-gray-700' : 'bg-white border-2 border-gray-200'
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
                              className={`font-semibold text-sm ${
                                isDarkMode ? 'text-white' : 'text-gray-900'
                              }`}
                            >
                              {session.browser} · {session.device}
                            </span>
                            {session.isCurrent && (
                              <span className="text-xs font-semibold bg-blue-100 text-blue-700 dark:bg-blue-950/30 dark:text-blue-400 px-2 py-1 rounded-full">
                                Current
                              </span>
                            )}
                          </div>
                          <div
                            className={`text-xs flex items-center gap-1.5 mt-1 ${
                              isDarkMode ? 'text-gray-400' : 'text-gray-600'
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
                          className="text-xs font-semibold border-2 border-red-500 text-red-500 bg-transparent hover:bg-red-50 dark:hover:bg-red-950/30"
                        >
                          <LogOut className="w-3.5 h-3.5 mr-1.5" />
                          Logout
                        </Button>
                      )}
                    </div>
                  ))}
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
                  className={`text-sm font-semibold mb-4 ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  Theme Mode
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  {(
                    [
                      { value: 'light', label: 'Light', icon: Sun },
                      { value: 'dark', label: 'Dark', icon: Moon },
                      { value: 'system', label: 'System', icon: Monitor },
                    ] as const
                  ).map(({ value, label, icon: Icon }) => (
                    <button
                      key={value}
                      onClick={() => handleThemeChange(value)}
                      className={`flex flex-col items-center gap-3 p-4 rounded-xl border-2 transition-all ${
                        theme === value
                          ? isDarkMode
                            ? 'border-blue-500 bg-blue-500/10'
                            : 'border-blue-500 bg-blue-50'
                          : isDarkMode
                            ? 'border-gray-800 hover:border-gray-700 bg-gray-800/40'
                            : 'border-gray-200 hover:border-gray-300 bg-gray-50'
                      }`}
                    >
                      {/* Mini UI preview */}
                      <div
                        className={`w-full h-20 rounded-lg overflow-hidden border-2 ${
                          isDarkMode ? 'border-gray-700' : 'border-gray-200'
                        } flex`}
                      >
                        {/* Mini sidebar */}
                        <div
                          className={`w-6 h-full flex flex-col items-center pt-2 gap-1 ${
                            value === 'dark'
                              ? 'bg-gray-800'
                              : value === 'system'
                                ? 'bg-gradient-to-b from-gray-100 to-gray-800'
                                : 'bg-gray-100'
                          }`}
                        >
                          {[0, 1, 2, 3].map((i) => (
                            <div
                              key={i}
                              className={`w-3 h-1 rounded-full ${
                                i === 0
                                  ? 'bg-blue-500'
                                  : value === 'dark'
                                    ? 'bg-gray-600'
                                    : value === 'system'
                                      ? 'bg-gray-400'
                                      : 'bg-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        {/* Mini content area */}
                        {value === 'system' ? (
                          /* System: left half light, right half dark — split preview */
                          <div className="flex-1 h-full flex overflow-hidden">
                            <div className="flex-1 h-full p-1.5 flex flex-col gap-1 bg-white">
                              <div className="w-full h-2 rounded bg-gray-100" />
                              <div className="flex gap-1">
                                <div className="flex-1 h-4 rounded bg-gray-100" />
                                <div className="flex-1 h-4 rounded bg-gray-100" />
                              </div>
                              <div className="w-2/3 h-2 rounded bg-gray-100" />
                            </div>
                            <div className="flex-1 h-full p-1.5 flex flex-col gap-1 bg-gray-900">
                              <div className="w-full h-2 rounded bg-gray-700" />
                              <div className="flex gap-1">
                                <div className="flex-1 h-4 rounded bg-gray-700" />
                                <div className="flex-1 h-4 rounded bg-gray-700" />
                              </div>
                              <div className="w-2/3 h-2 rounded bg-gray-700" />
                            </div>
                          </div>
                        ) : (
                          <div
                            className={`flex-1 h-full p-2 flex flex-col gap-1.5 ${
                              value === 'dark' ? 'bg-gray-900' : 'bg-white'
                            }`}
                          >
                            <div
                              className={`w-full h-2 rounded ${
                                value === 'dark' ? 'bg-gray-700' : 'bg-gray-100'
                              }`}
                            />
                            <div className="flex gap-1.5">
                              <div
                                className={`flex-1 h-5 rounded ${
                                  value === 'dark' ? 'bg-gray-700' : 'bg-gray-100'
                                }`}
                              />
                              <div
                                className={`flex-1 h-5 rounded ${
                                  value === 'dark' ? 'bg-gray-700' : 'bg-gray-100'
                                }`}
                              />
                            </div>
                            <div
                              className={`w-2/3 h-2 rounded ${
                                value === 'dark' ? 'bg-gray-700' : 'bg-gray-100'
                              }`}
                            />
                          </div>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon
                          className={`w-4 h-4 ${
                            theme === value
                              ? 'text-blue-500'
                              : isDarkMode
                                ? 'text-gray-400'
                                : 'text-gray-500'
                          }`}
                        />
                        <span
                          className={`text-sm font-semibold ${
                            theme === value
                              ? 'text-blue-600 dark:text-blue-400'
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
              <div>
                <h3
                  className={`text-sm font-semibold mb-4 ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
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
                      className={`w-12 h-12 rounded-full transition-all shadow-lg hover:scale-110 focus:outline-none ${
                        accentColor === key
                          ? `ring-4 ring-offset-2 ${
                              isDarkMode ? 'ring-offset-gray-900' : 'ring-offset-white'
                            } ring-gray-400 scale-110`
                          : ''
                      }`}
                    >
                      {accentColor === key && (
                        <Check className="w-6 h-6 mx-auto text-white" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              <Divider isDarkMode={isDarkMode} />

              {/* C. Dashboard Density */}
              <div>
                <h3
                  className={`text-sm font-semibold mb-4 ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  Dashboard Density
                </h3>
                <div className="space-y-3 max-w-md">
                  {(
                    [
                      { value: 'comfortable', label: 'Comfortable', desc: 'More spacing for easier reading' },
                      { value: 'compact', label: 'Compact', desc: 'Reduced spacing for more content' },
                    ] as const
                  ).map(({ value, label, desc }) => (
                    <button
                      key={value}
                      type="button"
                      onClick={() => setDensity(value)}
                      className={`w-full flex items-start gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all text-left ${
                        density === value
                          ? isDarkMode
                            ? 'border-blue-500 bg-blue-500/10'
                            : 'border-blue-500 bg-blue-50'
                          : isDarkMode
                            ? 'border-gray-800 hover:border-gray-700'
                            : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          density === value
                            ? 'border-blue-500'
                            : isDarkMode
                              ? 'border-gray-600'
                              : 'border-gray-400'
                        }`}
                      >
                        {density === value && (
                          <div className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                        )}
                      </div>
                      <div>
                        <span
                          className={`text-sm font-semibold block ${
                            isDarkMode ? 'text-gray-200' : 'text-gray-900'
                          }`}
                        >
                          {label}
                        </span>
                        <span
                          className={`text-xs mt-1 block ${
                            isDarkMode ? 'text-gray-400' : 'text-gray-600'
                          }`}
                        >
                          {desc}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
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
                        <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
                          <Icon className={`w-5 h-5 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`} />
                        </div>
                        <div>
                          <div
                            className={`font-semibold text-sm ${
                              isDarkMode ? 'text-white' : 'text-gray-900'
                            }`}
                          >
                            {title}
                          </div>
                          <div
                            className={`text-xs mt-1 ${
                              isDarkMode ? 'text-gray-400' : 'text-gray-600'
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
                        className={`border-t ${
                          isDarkMode ? 'border-gray-800' : 'border-gray-200'
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
              className={`p-6 rounded-2xl border-2 shadow-xl ${
                isDarkMode 
                  ? 'bg-red-950/20 border-red-900/50' 
                  : 'bg-red-50/60 border-red-300'
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
                {/* Deactivate Account */}
                <div
                  className={`flex items-center justify-between p-4 rounded-xl border-2 ${
                    isDarkMode 
                      ? 'bg-red-950/30 border-red-900/50' 
                      : 'bg-white border-red-200'
                  }`}
                >
                  <div>
                    <div className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      Deactivate Account
                    </div>
                    <div className={`text-sm mt-1 ${isDarkMode ? 'text-red-400' : 'text-gray-600'}`}>
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
                  className={`flex items-center justify-between p-4 rounded-xl border-2 ${
                    isDarkMode 
                      ? 'bg-red-950/30 border-red-900/50' 
                      : 'bg-white border-red-200'
                  }`}
                >
                  <div>
                    <div className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      Delete Account
                    </div>
                    <div className={`text-sm mt-1 ${isDarkMode ? 'text-red-400' : 'text-gray-600'}`}>
                      <span className={`font-semibold ${isDarkMode ? 'text-red-300' : 'text-gray-900'}`}>
                        This action is permanent and cannot be undone.
                      </span>{' '}
                      All your data will be deleted.
                    </div>
                  </div>
                  <Button
                    className="bg-red-600 hover:bg-red-700 text-white flex-shrink-0 ml-4 shadow-lg"
                    onClick={() => setShowDeleteModal(true)}
                  >
                    <Trash2 className="w-4 h-4 mr-2" />
                    Delete Account
                  </Button>
                </div>
              </div>
            </motion.div>

          </div>
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