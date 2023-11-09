
import { Link } from 'react-router-dom'
import useMyPostedJob from '../../hooks/useMyPostedJob'
import toast from 'react-hot-toast'



function MyPostedJobs() {
    const [posted, refetch] = useMyPostedJob()


    const handleDelete = (_id) => {
        fetch(`https://jobs-related-server-ass-11.vercel.app/jobs/${_id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    refetch()
                    toast.success('delete successful')
                }

            })
    }

    return (
        <div className='grid md:grid-cols-3 gap-12 mt-5 '>
            {
                posted.map(myPost =>
                    <div key={myPost._id} className="card ml-2 md:ml-0 mr-2 md:mr-0 shadow-2xl shadow-orange-300 md:w-96 bg-emerald-200 text-base">
                        <div className="card-body items-center text-center">
                            <h2 className="card-title"> {posted.email}</h2>
                            <p>{myPost.Jobtitle}</p>
                            <p>{myPost.deadline}</p>
                            <p>{myPost.description}</p>
                            <p className='text-pink-600'>{myPost.category}</p>
                            <p>Minimum Price ${myPost.minimumPrice}</p>
                            <p>MaximumPrice ${myPost.maximumPrice}</p>
                            <div className="card-actions justify-end">
                                <Link to={`/update/${myPost._id}`}>
                                    <button className="btn btn-primary">Update</button>
                                </Link>
                                <button onClick={() => handleDelete(myPost._id)} className="btn btn-secondary">Delete</button>
                            </div>
                        </div>
                    </div>

                )
            }

        </div>
    )
}

export default MyPostedJobs