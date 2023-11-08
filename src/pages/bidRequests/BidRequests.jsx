import React, { useContext, useState } from 'react'
import { AuthContext } from '../../provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { ProgressBar } from 'react-step-progress-bar';


function BidRequests() {



    const { user } = useContext(AuthContext)

    const { data: bidRequests = [], refetch } = useQuery({
        queryKey: ['bids'],
        queryFn: async () => {
            const res = await axios.get(`https://jobs-related-server-ass-11-6s93zgp7p.vercel.app/bids/${user?.email}`);
            return res.data;
        }
    })

    const handleAccept = (id) => {
        axios.patch(`https://jobs-related-server-ass-11-6s93zgp7p.vercel.app/bid-requests/accept/${id}`)
        .then(res => {
            refetch()
        })
    };
    const handleReject = (id) => {
        axios.patch(`https://jobs-related-server-ass-11-6s93zgp7p.vercel.app/bid-requests/reject/${id}`)
        .then(res => {
            refetch()
        })
    };



    return ( 
        <div className="overflow-x-auto bg-teal-300">
            
      
        <table className='table'>
      <thead>
             <tr>
                   <th className="text-green-600 text-xl">Job title</th>
                   <th className="text-red-500 text-xl">Email</th>
                   <th  className="text-fuchsia-600 text-xl">Deadline</th>
                   <th className="text-violet-500 text-xl">Price</th>
                   <th className="text-cyan-600 text-xl">Status</th>
                   <th>Action</th>
                   <th>Action</th>
            </tr>
     </thead>
                    <tbody>
                        {
                        bidRequests.map((request, index) => (
                            <tr key={index}>
                               <td>{request.jobTitle}</td>
                               <td>{request.email}</td>
                                <td>{request.deadline}</td>
                                <td>{request.priceRange}</td>
                         <td>
                         {request.status === 'in-progress' ? (
                  <ProgressBar percent={50} filledBackground="linear-gradient(to right, #fefb72, #f0bb31)" />
                ) : (
                  request.status
                )}
                         </td>
                            <td>
                            <button 
                            className='gap-4' onClick={()=>handleAccept(request._id)}
                            >Accept</button>
                                  </td>   
                                  <td>
                                  <button onClick={() =>handleReject(request._id)}>Reject</button>
                                  </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                </div>
    )
}

 export default BidRequests







    

   

//     return (
      
//     );
// };

// export default BidRequestsTable;
