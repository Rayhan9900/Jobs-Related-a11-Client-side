import React from 'react'

function JobsCard({ job }) {
    const { jobTitle, deadline, priceRange, description } = job;

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
                        <button className="btn btn-accent">Bid Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobsCard