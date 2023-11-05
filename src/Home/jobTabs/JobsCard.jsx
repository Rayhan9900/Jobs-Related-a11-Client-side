import React from 'react'
import { Link } from 'react-router-dom';

function JobsCard({ job }) {
    const { _id, jobTitle, deadline, priceRange, description } = job;

    const date = new Date();

    return (
        <div>

            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{jobTitle}</h2>
                    <p>{deadline}</p>
                    <p>{priceRange}</p>
                    <p>{description}</p>
                    <div className="card-actions justify-center">
                        <Link to={`/jobDetails/${_id}`}> <button className="btn btn-accent">Bid Now</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobsCard