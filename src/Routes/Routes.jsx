import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Main from "../Layout/Main";
import Blog from "../Pages/Blogs/Blog";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/',
                element: <Home></Home>,
            },
        ]
    },
]);

export default router;