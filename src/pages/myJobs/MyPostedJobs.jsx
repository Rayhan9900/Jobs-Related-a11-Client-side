import { useQuery } from '@tanstack/react-query'
import React, { useContext } from 'react'
import { AuthContext } from '../../provider/AuthProvider'



function MyPostedJobs() {
    const { user } = useContext(AuthContext)

    const { data: posted = [], refetch } = useQuery({
        queryKey: [user?.email],
        queryFn: () => {
            const res = fetch(`http://localhost:5000/jobs/posted?email=${user?.email}`,)
            return res.data
        }

        // const { data: posted = [], refetch } = useQuery({
        //     queryKey: [user?.email],
        //     queryFn: () => {
        //         const res = fetch(`http://localhost:5000/jobs/posted?email=${user?.email}`);
        //         return res.data;
        //     }
        // });

    })

    return (
        <div>

        </div>
    )
}

export default MyPostedJobs