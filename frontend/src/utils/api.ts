// src/utils/api.ts

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:8000";

// Get JWT from localStorage
function getAuthToken(): string | null {
  return localStorage.getItem("jwt_token");
}

// Main API request function with JWT support and error handling
export async function apiFetch<T>(
  endpoint: string,
  options: RequestInit = {},
  protectedRoute: boolean = true // disables JWT if set to false
): Promise<T> {
  // Convert any header type to plain object
  const originalHeaders: Record<string, string> = options.headers
    ? options.headers instanceof Headers
      ? Object.fromEntries(options.headers.entries())
      : { ...options.headers as Record<string, string> }
    : {};

  const headers: Record<string, string> = {
    ...originalHeaders,
    "Content-Type": "application/json",
  };

  // Attach JWT if needed
  if (protectedRoute) {
    const token = getAuthToken();
    if (token) headers["Authorization"] = `Bearer ${token}`;
  }

  const res = await fetch(`${API_BASE}${endpoint}`, {
    ...options,
    headers,
  });

  // Handle auth errors (redirect to login if unauthorized)
  if (res.status === 401 || res.status === 403) {
    window.location.href = "/auth"; // Or however you want to handle logout
    throw new Error("Unauthorized. Redirecting to login.");
  }

  // Only parse as JSON if response type is JSON
  const contentType = res.headers.get("content-type");
  if (contentType && contentType.includes("application/json")) {
    return res.json();
  } else {
    const text = await res.text();
    // Show a safe/truncated error
    throw new Error("Non-JSON response (likely a server error):\n" + text.slice(0, 120));
  }
}

// Example usage elsewhere in your frontend:
// import { apiFetch } from "../utils/api";
// const data = await apiFetch("/protected"); // Attaches JWT automatically