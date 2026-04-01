import React from 'react';
import { Monitor, Smartphone } from 'lucide-react';

interface MobileBlockerProps {
  children: React.ReactNode;
}

export function MobileBlocker({ children }: MobileBlockerProps) {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkDevice = () => {
      // Check screen width
      const isMobileWidth = window.innerWidth < 1024;
      
      // Check user agent for mobile devices
      const userAgent = navigator.userAgent.toLowerCase();
      const mobileKeywords = ['android', 'webos', 'iphone', 'ipad', 'ipod', 'blackberry', 'windows phone'];
      const isMobileDevice = mobileKeywords.some(keyword => userAgent.includes(keyword));
      
      // Check for touch screen
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      
      // Consider it mobile if width is small OR it's a mobile device OR it's touch-only
      setIsMobile(isMobileWidth || isMobileDevice);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);
    
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  if (isMobile) {
    return (
      <div className="min-h-screen max-h-screen overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 flex items-center justify-center p-6">
        <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-8 text-center">
          {/* Icon Section */}
          <div className="relative mb-6">
            <div className="w-24 h-24 mx-auto bg-gradient-to-br from-red-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
              <Smartphone className="w-12 h-12 text-white" />
            </div>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-white">
              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">✕</span>
              </div>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-2xl font-bold text-gray-900 mb-3">
            Desktop Only Application
          </h1>

          {/* Message */}
          <p className="text-gray-600 mb-6 leading-relaxed">
            <strong className="text-gray-900">ScoreSight AI Result Analyzer</strong> is optimized for desktop devices only. 
            The complex analytics and data management features require a larger screen for the best experience.
          </p>

          {/* Instruction Box */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 mb-6 border-2 border-blue-100">
            <Monitor className="w-10 h-10 text-blue-600 mx-auto mb-3" />
            <p className="text-sm font-semibold text-gray-900 mb-2">
              Please access this application from:
            </p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>💻 Desktop Computer</li>
              <li>🖥️ Laptop</li>
              <li>📺 Large Screen Device (1024px+)</li>
            </ul>
          </div>

          {/* Footer Note */}
          <p className="text-xs text-gray-500">
            Minimum screen width required: <strong>1024 pixels</strong>
          </p>

          {/* Branding */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-xs text-gray-400">
              ScoreSight © 2026 • Academic Performance Analytics
            </p>
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}