import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import AdminHomePage from './pages/AdminHomePage.jsx'
import Posts from './pages/Posts.jsx'
import Login from './pages/Login.jsx';
import About from './pages/About.jsx'

const isAuthenticated = () => {
  // Check if the user is authenticated (e.g., check localStorage or context)
  // For demonstration purposes, we'll assume the user is not authenticated.
  console.log("=====>", localStorage.getItem('isLoggedSuccess'))
  return localStorage.getItem('isLoggedSuccess');
};

// ProtectedRoute component
const ProtectedRoute = ({ element }) => {
  console.log("------->",isAuthenticated())
  return isAuthenticated() ? element : <Navigate to="/" />;
};

const router = createBrowserRouter(
  [
      {
          path:'/',
          element: <Login/>
      },
      {
        path:'/adminHomePage',
        element: <ProtectedRoute element={<AdminHomePage/>}/>,
        children:[ {
          path:"getPosts",
          element: <Posts/>
        },{
          path:"about",
          element: <About/>
        },
        {
          path:"",
          element: <About/>
        }
    ]
    }
  ]
);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
