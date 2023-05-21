import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Main from "../Layout/Main";
import Blog from "../Pages/Blogs/Blog";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import PrivateRoutes from "./PrivateRoutes";
import Addtoy from "../Pages/Addtoy/Addtoy";
import Mytoys from "../Pages/Mytoys/Mytoys";
import Alltoys from "../Pages/Alltoys/Alltoys";
import ViewDetails from "../Pages/Home/ShopByCategory/ViewDetails";

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
                element: <PrivateRoutes><Blog></Blog></PrivateRoutes>,
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
                path: 'addtoy',
                element: <Addtoy></Addtoy>,
            },
            {
                path: 'mytoys',
                element: <Mytoys></Mytoys>,
            },
            {
                path: 'alltoys',
                element: <Alltoys></Alltoys>,
            },
            {
                path: '/viewDetails/:id',
                element: <PrivateRoutes><ViewDetails></ViewDetails></PrivateRoutes>,
                loader: ({ params }) => fetch(`http://localhost:5000/toys/${params.id}`)
            }
        ]
    },
]);

export default router;