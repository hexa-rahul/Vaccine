import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './components/Auth/dashboard/Dashboard';
import Login from './components/Auth/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
const allRoutes = createBrowserRouter(
  [
    {path:'/', element:<Dashboard />},
    {path:'/login', element:<Login />},
    {path:'*', element:<Login />}
  ]
);

root.render(
  <React.StrictMode>
    <App />
    {/* <RouterProvider router={allRoutes} /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
