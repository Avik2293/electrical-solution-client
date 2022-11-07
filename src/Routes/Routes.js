import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Components/ErrorPage";
import Home from "../Pages/Home";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            // {
            //     path: '/courses',
            //     element: <Courses></Courses>
            // },
            // {
            //     path: '/course/:id',
            //     element: <Course></Course>,
            //     loader: ({params}) => fetch(`https://electro-man-server.vercel.app/course/${params.id}`)
            // },
            // {
            //     path: '/faq',
            //     element: <Faq></Faq>
            // },
            // {
            //     path: '/blog',
            //     element: <Blog></Blog>
            // },
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