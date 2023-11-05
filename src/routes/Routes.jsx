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
                path: "/addjob",
                element: <AddJob />
            },
            {
                path: "/myPostedJob",
                element: <MyPostedJobs />
            },
            {
                path: "/myBids",
                element: <MyBids />
            },
            {
                path: "/bidRequests",
                element: <BidRequests />
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