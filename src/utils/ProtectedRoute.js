import React from 'react';
import { Navigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode'; // Use named import

const ProtectedRoute = ({ children, requiredRole }) => {
    const getUser = localStorage.getItem('user');
    const user = getUser ? jwtDecode(getUser) : null;

    if (!user || user.role !== requiredRole) {
        return <Navigate to="/auth" replace />;
    }

    return children;
};

export default ProtectedRoute;
