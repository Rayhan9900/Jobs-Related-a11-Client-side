import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom"
import { AuthContext } from "../../provider/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";


function JobDetails() {

    const { user } = useContext(AuthContext)
    console.log(user?.email);
    const job = useLoaderData();
    const { _id, jobTitle, deadline, priceRange, description } = job;

    const handleBid = () => {
        const myJobs = { email: user.email, jobTitle, deadline, status: 'pending', priceRange, description }
        axios.post('http://localhost:5000/mybids', myJobs)
            .then(res => {
                if (res.data.insertedId) {
                    toast.success('My Bid Added Successfully')
                }
            })

    }


    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">{jobTitle}</h1>
                        <p>{deadline}</p>
                        <p>{priceRange}</p>
                        <p className="py-6">{description}</p>

                        <Link to="/myBids">
                            <button onClick={() => handleBid(job)} className="btn btn-primary">Add myBid</button>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobDetails