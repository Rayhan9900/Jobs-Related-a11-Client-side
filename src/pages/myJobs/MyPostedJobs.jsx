import { useQuery } from '@tanstack/react-query'
import React, { useContext } from 'react'
import { AuthContext } from '../../provider/AuthProvider'
import axios from 'axios'
import { Link } from 'react-router-dom'
import useMyPostedJob from '../../hooks/useMyPostedJob'



function MyPostedJobs() {
    // const { user } = useContext(AuthContext)

    // const { data: posted = [], refetch } = useQuery({
    //     queryKey: ['jobs', user?.email],
    //     queryFn: async () => {
    //         const res = await axios.get(`http://localhost:5000/jobs?email=${user.email}`,);

    //         return res.data;
    //     }
    // })

    const [posted, refetch] = useMyPostedJob()

    console.log(posted)

    return (
        <div className='grid grid-cols-3 gap-4 mt-5'>
            {
                posted.map(myPost =>
                    <div key={myPost._id} className="card w-96 bg-neutral text-neutral-content">
                        <div className="card-body items-center text-center">
                            <h2 className="card-title"> {posted.email}</h2>
                            <p>{myPost.jobTitle}</p>
                            <p>{myPost.deadline}</p>
                            <p>{myPost.description}</p>
                            <p>{myPost.category}</p>
                            <p>{myPost.minimumPrice}</p>
                            <p>{myPost.maximumPrice}</p>
                            <div className="card-actions justify-end">
                                <Link to="/update">
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