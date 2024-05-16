import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home"
import Overview from './pages/Overview'
import WritePosts from './pages/Writeposts'
import AllPosts from './pages/AllPosts'
import NotFound from "./pages/NotFound"
import { ToastContainer } from "react-toastify"
import AdminLogin from "./pages/AdminLogin"
import Public from "./routes/Public"
import Private from "./routes/Private"
import Profile from "./pages/Profile"



function App() {

    const router = createBrowserRouter([
        {
            path: '/',
            element: 
                <Private>
                    <Home />
                </Private>,
                
            children:[
                {
                    path: '/',
                    element: 
                            <Overview />
                },
                {
                    path: 'write-post',
                    element: <WritePosts />
                },
                {
                    path: 'all-posts',
                    element: <AllPosts />
                },
                {
                    path: '*',
                    element: <NotFound />
                },
                {
                    path: 'profile',
                    element: <Profile />
                },
                
            ]
        },
        {
            path: "admin-login",
            element: 
                <Public>
                    <AdminLogin />
                </Public>
        }
    ])

    return(
        <>
            <RouterProvider router={router} />

            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>
    )
  
}

export default App
