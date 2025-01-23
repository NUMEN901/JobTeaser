import React from 'react';
import { Navigate } from 'react-router-dom';

interface PrivateRouteProps {
  children: React.ReactNode;
}

// Route privée vérifiant si l'utilisateur est authentifié
const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true'; // Vérifie l'authentification

  return isAuthenticated ? (
    <>{children}</>
  ) : (
    <Navigate to="/" /> // Redirection vers la page de connexion si non authentifié
  );
};

export default PrivateRoute;
