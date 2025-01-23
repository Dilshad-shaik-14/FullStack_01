import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AuthLayout, Login } from './components/index.js'

import AddPost from "./components/pages/AddPost";
import Signup from "./components/pages/Signup";
import EditPost from "./components/pages/EditPost";
import Post from './components/pages/Post.jsx';
//import AllPosts from './components/pages/AllPosts.jsx';
import Contactus from "./components/ContactUs/ContactUs.jsx";
import TermsAndCondition from './components/TermsAndConditions.jsx';
import Home from './components/pages/Home.jsx';
import UserProfile from './components/pages/userprofile.jsx';



const router = createBrowserRouter([{
  path : "/" ,
  element : <App/> ,
  children: [
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/login",
        element: (
            <AuthLayout authentication={false}>
                <Login />
            </AuthLayout>
        ),
    },
    {
        path: "/signup",
        element: (
            <AuthLayout authentication={false}>
                <Signup />
            </AuthLayout>
        ),
    },
    {
        path: "/profile",
        element: (
            
                <UserProfile />
          
        ),
    },
    {
        path: "/add-post",
        element: (
            <AuthLayout authentication>
                <AddPost />
            </AuthLayout>
                
        ),
    },
   
    {
        path: "/edit-post/:slug",
        element: (
            <AuthLayout authentication>
                {" "}
                <EditPost />
            </AuthLayout>
        ),
    },
    {
        path: "/post/:slug",
        element: <Post />,
    },
    {
        path: "/contact-us",
        element :<Contactus />,
    },
    {
        path: "/terms-and-conditions",
        element : <TermsAndCondition/>
    },
],
},
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
