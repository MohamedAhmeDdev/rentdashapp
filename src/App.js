import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes,Navigate } from "react-router-dom";
import { lazy } from 'react';
// import ProtectedRoute from './utils/ProtectedRoute';

const Tenant = lazy(() => import('./TenantRoutes/containers/Layout'))
const Landlord = lazy(() => import('./LandlordRoutes/containers/Layout'))




function App() { 

  return (
    <div>
      <BrowserRouter>
        <Routes>

       <Route path="/tenant/*" 
           element={
              // <ProtectedRoute 
              // requiredRole="tenant"
              // >
                <Tenant />
              // </ProtectedRoute>
            }
          />
          <Route path="/landlord/*"
            element={
              // <ProtectedRoute 
              // requiredRole="landlord"
              // >
                <Landlord />
              // </ProtectedRoute>
            }
          />
          <Route path="*" element={<Navigate to="/auth" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App; 