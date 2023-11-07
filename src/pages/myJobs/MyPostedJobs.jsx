
import { Link } from 'react-router-dom'
import useMyPostedJob from '../../hooks/useMyPostedJob'



function MyPostedJobs() {
    const [posted, refetch] = useMyPostedJob()

    console.log(posted)

    return (
        <div className='grid grid-cols-3 gap-4 mt-5'>
            {
                posted.map(myPost =>
                    <div key={myPost._id} className="card w-96 bg-neutral text-neutral-content">
                        <div className="card-body items-center text-center">
                            <h2 className="card-title"> {posted.email}</h2>
                            <p>{myPost.Jobtitle}</p>
                            <p>{myPost.deadline}</p>
                            <p>{myPost.description}</p>
                            <p>{myPost.category}</p>
                            <p>Minimum Price ${myPost.minimumPrice}</p>
                            <p>MaximumPrice ${myPost.maximumPrice}</p>
                            <div className="card-actions justify-end">
                                <Link to={`/update/${myPost._id}`}>
                                    <button className="btn btn-primary">Update</button>
                                </Link>
                                <button className="btn btn-ghost">Delete</button>
                            </div>
                        </div>
                    </div>

                )
            }

        </div>
    )
}

export default MyPostedJobs