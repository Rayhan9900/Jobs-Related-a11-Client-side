import { useLoaderData } from "react-router-dom"


function JobDetails() {
    const job = useLoaderData();
    const { _id, jobTitle, deadline, priceRange, description } = job;



    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">{jobTitle}</h1>
                        <p>{deadline}</p>
                        <p>{priceRange}</p>
                        <p className="py-6">{description}</p>

                        <button className="btn btn-primary">Add myBid</button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobDetails