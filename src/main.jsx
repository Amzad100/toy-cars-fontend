import React from 'react'
import ReactDOM from 'react-dom/client'
import router from './Routes/Routes.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl mx-auto'>
    <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </React.StrictMode>,
  </div>
)