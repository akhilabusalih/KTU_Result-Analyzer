import { createBrowserRouter, Outlet } from "react-router";
import { ThemeProvider } from "./context/ThemeContext";
import { NotificationProvider } from "./context/NotificationContext";
import { MobileBlocker } from "./components/MobileBlocker";
import { Dashboard } from "./pages/Dashboard";
import { Landing } from "./pages/Landing";
import { Auth } from "./pages/Auth";
import { Results } from "./pages/Results";
import { Analytics } from "./pages/Analytics";
import { Students } from "./pages/Students";
import { SubjectConfiguration } from "./pages/SubjectConfiguration";
import { ReportIssue } from "./pages/ReportIssue";
import { HelpAndSupport } from "./pages/HelpAndSupport";
import { Profile } from "./pages/Profile";
import { Settings } from "./pages/Settings";
import { ResultAnalyzer } from "./pages/ResultAnalyzer";
import { ProtectedRoute } from "./components/ProtectedRoute";

// ...other imports...


/**
 * Root layout — lives *inside* React Router's rendering tree so that
 * ThemeProvider context is available to every route component.
 * Placing providers above <RouterProvider> in App.tsx does NOT work with
 * createBrowserRouter because RouterProvider renders into its own context.
 */
function RootLayout() {
  return (
    <ThemeProvider>
      <NotificationProvider>
        <MobileBlocker>
          <Outlet />
        </MobileBlocker>
      </NotificationProvider>
    </ThemeProvider>
  );
}

export const router = createBrowserRouter([
  {
    Component: RootLayout,
    children: [
      { path: "/", Component: Landing },
      { path: "/analyze", Component: ResultAnalyzer },
      { path: "/auth", Component: Auth },

      // ↓↓↓↓ Protect these routes ↓↓↓↓
      {
        element: <ProtectedRoute />,
        children: [
          { path: "/dashboard", Component: Dashboard },
          { path: "/dashboard/results", Component: Results },
          { path: "/dashboard/analytics", Component: Analytics },
          { path: "/dashboard/students", Component: Students },
          { path: "/dashboard/subjects", Component: SubjectConfiguration },
          { path: "/dashboard/report-issue", Component: ReportIssue },
          { path: "/dashboard/help-support", Component: HelpAndSupport },
          { path: "/dashboard/profile", Component: Profile },
          { path: "/dashboard/settings", Component: Settings },
        ],
      },
    ],
  },
]);
