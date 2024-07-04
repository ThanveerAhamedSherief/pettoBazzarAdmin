import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import AdminHomePage from './pages/AdminHomePage.jsx'
import Posts from './pages/Posts.jsx'
import Login from './pages/Login.jsx';
import About from './pages/About.jsx'

const isAuthenticated = () => {
  return localStorage.getItem('isLoggedSuccess');
};

// ProtectedRoute component
const ProtectedRoute = ({ element }) => {
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
