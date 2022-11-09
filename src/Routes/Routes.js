import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Components/ErrorPage";
import Login from "../Components/Login";
import Register from "../Components/Register";
import Home from "../Pages/Home";
import Blog from "../Pages/Blog";
import Services from "../Pages/Services";
import ServiceDetails from "../Pages/ServiceDetails";
import MyReviews from "../Pages/MyReviews";
import AddService from "../Pages/AddService";

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
            {
                path: '/service/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/service/${params.id}`)
            },
            {
                path: '/myreviews',
                element: <MyReviews></MyReviews>
            },
            {
                path: '/addservice',
                element: <AddService></AddService>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            // {
            //     path: '/checkout/:id',
            //     element: <PrivateRoute><CheckOutPage></CheckOutPage></PrivateRoute>,
            //     loader: ({params}) => fetch(`https://electro-man-server.vercel.app/course/${params.id}`)
            // }
        ]
    }
]);