import React from 'react'
import { Link } from 'react-router-dom';

function JobsCard({ job }) {
    const { _id, jobTitle, deadline, priceRange, description } = job;

    const date = new Date();

    return (
        <div>

            <div className="card w-96 bg-emerald-400 shadow-xl shadow-purple-300">
                <div className="card-body">
                    <h2 className="card-title text-purple-600">{jobTitle}</h2>
                    <p className='text-pink-500'>Date:{deadline}</p>
                    <p className='text-fuchsia-500'>{priceRange}</p>
                    <p className='text-indigo-500'>{description}</p>
                    <div className="card-actions justify-center">
                        <Link to={`/jobDetails/${_id}`}> <button className="btn btn-accent hover:bg-yellow-400">Bid Now</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobsCard