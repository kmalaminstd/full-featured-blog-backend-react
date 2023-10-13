import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home"
import Overview from './pages/Overview'
import WritePosts from './pages/Writeposts'
import AllPosts from './pages/AllPosts'
import NotFound from "./pages/NotFound"



function App() {

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Home />,
            children:[
                {
                    path: '/',
                    element: <Overview />
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
                }
            ]
        }
    ])

    return(
        <>
            <RouterProvider router={router} />
        </>
    )
  
}

export default App
