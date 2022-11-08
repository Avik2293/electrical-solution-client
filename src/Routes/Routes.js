import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Components/ErrorPage";
import Home from "../Pages/Home";
import Blog from "../Pages/Blog";
import Services from "../Pages/Services";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                loader: () => fetch('http://localhost:5000'),
                element: <Home></Home>
            },
            {
                path: '/services',
                loader: () => fetch('http://localhost:5000/services'),
                element: <Services></Services>
            },
            // {
            //     path: '/course/:id',
            //     element: <Course></Course>,
            //     loader: ({params}) => fetch(`https://electro-man-server.vercel.app/course/${params.id}`)
            // },
            // {
            //     path: '/faq',
            //     element: <Faq></Faq>
            // },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            // {
            //     path: '/login',
            //     element: <Login></Login>
            // },
            // {
            //     path: '/register',
            //     element: <Register></Register>
            // },
            // {
            //     path: '/checkout/:id',
            //     element: <PrivateRoute><CheckOutPage></CheckOutPage></PrivateRoute>,
            //     loader: ({params}) => fetch(`https://electro-man-server.vercel.app/course/${params.id}`)
            // }
        ]
    }
]);