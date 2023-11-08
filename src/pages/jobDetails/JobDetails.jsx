
import { Link, useLoaderData } from "react-router-dom"
import { AuthContext } from "../../provider/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";
import React, { useContext } from 'react';

function JobDetails() {

    const { user } = useContext(AuthContext)

    const job = useLoaderData();
    const { _id, jobTitle, deadline, priceRange, description, email } = job;

    const handleBid = () => {
        const myJobs = { email: user.email, jobTitle, deadline, status: 'pending', priceRange, description }
        console.log(jobTitle)
        axios.post('http://localhost:5000/mybids', myJobs)
            .then(res => {
                if (res.data.insertedId) {
                    toast.success('My Bid Added Successfully')
                }
            })

    }




    return (
        <div>
            <div className="hero min-h-screen bg-cyan-400">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <p>{priceRange}</p>
                        <p>{deadline}</p>
                        <p>{user.email}</p>
                        <p>{email}</p>
                        <Link to="/myBids">
                            <button onClick={() => handleBid(job)} className="btn btn-primary hover:bg-yellow-400">Add myBid</button>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobDetails