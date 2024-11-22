// import { createBrowserRouter } from "react-router-dom";
// import App from "../App";
// import Home from "../pages/home/Home";
// import ShopPage from "../pages/shop/ShopPage";
// import Login from "@/pages/Auth/Login";
// import Register from "@/pages/Auth/Register";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//       },

//       {
//         path: "/shop",
//         element: <ShopPage />,
//       },
//       {
//         path: "/categories/:categoryName",
//         element: <div>category page</div>,
//       },
//     ],
//   },
//   {
//     path: "/login",
//     element: <Login />,
//   },
//   {
//     path: "/register",
//     element: <Register />,
//   },
// ],{

//   future: {
//     v7_startTransition: true,
//     v7_relativeSplatPath: true,
//     v7_fetcherPersist: true,
//     v7_normalizeFormMethod: true,
//     v7_partialHydration: true,
//     v7_skipActionErrorRevalidation: true,
    
//   },

// }
// );

// export default router;


import { createBrowserRouter } from 'react-router-dom'

// import Skills from '../../Pages/Dashboard/Skills/Skills'
// import Experience from '../../Pages/Dashboard/Experience/Experience'
// import Projects from '../../Pages/Dashboard/Projects/Projects'
// import Blogs from '../../Pages/Dashboard/Blogs/Blogs'
// import Login from '../../Pages/login/Login'
// import ProtectedRoute from '../../layout/ProtectedRoute'
import App from '@/App'
import Details from '@/pages/home/Details/Details'
import Home from '@/pages/home/Home'
import BlogDetails from '@/pages/BlogDetails/BlogDetails'
// import AdminDashboard from '@/layout/AdminDashboard'
// import ProtectedRoute from '@/layout/ProtectedRoute'
import Projects from '@/pages/Dashboard/Projects/Projects'
import Skills from '@/pages/Dashboard/Skills/Skills'
import Experience from '@/pages/Dashboard/Experience/Experience'
import Blogs from '@/pages/Dashboard/Blogs/Blogs'
import Login from '@/pages/Auth/Login'
import AdminDashboard from '@/layout/AdminDashboard'
import ProtectedRoute from '@/layout/ProtectedRoute'

 const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/details/:id',
        element: <Details/>
      },
      {
        path: '/blogDetails/:id',
        element: <BlogDetails />
      }
    ]
  },
  {
    path: '/dashboard',
    element: <AdminDashboard />,
    children: [
      {
        index: true,
        element: (
          <ProtectedRoute>
            <Projects />
          </ProtectedRoute>
        )
      },
      {
        path: 'skills',
        element: (
          <ProtectedRoute>
            <Skills />
          </ProtectedRoute>
        )
      },
      {
        path: 'experience',
        element: (
          <ProtectedRoute>
            <Experience />
          </ProtectedRoute>
        )
      },
      {
        path: 'blogs',
        element: (
          <ProtectedRoute>
            <Blogs />
          </ProtectedRoute>
        )
      }
    ]
  },
  {
    path: '/login',
    element: <Login />
  }
])

export default router;