import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/errorPage/ErrorPage";
import MainLayout from "../layout/MainLayout";
import Register from "../pages/register/Register";
import Home from "../Home/home/Home";
import Login from "../pages/login/Login";
import AddJob from "../pages/addJob/AddJob";
import MyPostedJobs from "../pages/myJobs/MyPostedJobs";
import MyBids from "../pages/myBids/MyBids";
import BidRequests from "../pages/bidRequests/BidRequests";
import JobDetails from "../pages/jobDetails/JobDetails";
import Update from "../pages/update/Update";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: '/jobDetails/:id',
                element: <PrivateRoute><JobDetails /></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/jobs/${params.id}`)
            },
            {
                path: "/addjob",
                element: <PrivateRoute><AddJob /></PrivateRoute>
            },
            {
                path: "/myPostedJob",
                element: <PrivateRoute><MyPostedJobs /></PrivateRoute>,
                loader: () => fetch('http://localhost:5000/jobs')
            },
            {
                path: "/myBids",
                element: <PrivateRoute><MyBids /></PrivateRoute>
            },
            {
                path: "/bidRequests",
                element: <BidRequests />
            },
            {
                path: "/update/:id",
                element: <Update />,
                loader: ({ params }) => fetch(`http://localhost:5000/jobs/${params.id}`)
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            }

        ]
    },
]);

export default router