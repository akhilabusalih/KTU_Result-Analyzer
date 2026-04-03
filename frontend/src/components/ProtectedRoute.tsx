// src/components/ProtectedRoute.tsx
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export function ProtectedRoute() {
  const token = localStorage.getItem("jwt_token");
  // Optionally: You could also add a utility here to validate token expiry
  return token ? <Outlet /> : <Navigate to="/auth" replace />;
}