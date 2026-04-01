import React, { createContext, useContext, useState } from 'react';

export interface Notification {
  id: number;
  title: string;
  message: string;
  time: string;
  unread: boolean;
}

interface NotificationContextType {
  notifications: Notification[];
  markAllAsRead: () => void;
  hasUnread: boolean;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

const initialNotifications: Notification[] = [
  { id: 1, title: 'New Result Upload', message: 'CSE Department results have been processed', time: '5 min ago', unread: true },
  { id: 2, title: 'Analysis Complete', message: 'Semester 3 analysis is ready to view', time: '1 hour ago', unread: true },
  { id: 3, title: 'System Update', message: 'New features added to Advanced Analytics', time: '2 hours ago', unread: false },
];

export function NotificationProvider({ children }: { children: React.ReactNode }) {
  const [notifications, setNotifications] = useState<Notification[]>(initialNotifications);

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, unread: false })));
  };

  const hasUnread = notifications.some(n => n.unread);

  return (
    <NotificationContext.Provider value={{ notifications, markAllAsRead, hasUnread }}>
      {children}
    </NotificationContext.Provider>
  );
}

export function useNotifications(): NotificationContextType {
  const context = useContext(NotificationContext);
  if (!context) {
    // Safe fallback for isolated renders (e.g. Figma preview) outside the provider tree
    return {
      notifications: [],
      markAllAsRead: () => {},
      hasUnread: false,
    };
  }
  return context;
}