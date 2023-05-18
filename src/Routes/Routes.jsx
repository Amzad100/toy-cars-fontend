import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Main from "../Layout/Main";
import Blog from "../Pages/Blogs/Blog";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";

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
                path: 'blogs',
                element: <Blog></Blog>,
            },
            {
                path: 'signup',
                element: <SignUp></SignUp>
            },
            {
                path: 'login',
                element: <Login></Login>,
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