import React, { useContext, useState } from 'react'
import { AuthContext } from '../../provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { ProgressBar } from 'react-step-progress-bar';


function BidRequests() {

    const [currentStatus, setCurrentStatus] = useState('initial');


    const { user } = useContext(AuthContext)

    const { data: bidRequests = [], refetch } = useQuery({
        queryKey: ['bids'],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/bids/${user?.email}`);
            console.log(res)
            return res.data;
        }
    })
    console.log(bidRequests)

    const handleAccept = () => {
        setCurrentStatus('inProgress');
        axios.patch()
    };
    const handleReject = () => {
        setCurrentStatus('rejected');
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
                                <td>{request.price}</td>
                         <td>{currentStatus}</td>
                            <td>
                                    {currentStatus === 'initial' && (
                                        <>
                                        <button className='gap-4' onClick={handleAccept}>Accept</button>
                                            <button onClick={handleReject}>Reject</button>
                                     </>
                                 )}
                                     {currentStatus === 'inProgress' && (
                                     <ProgressBar percent={50}>
                                             <Step transition="scale">
                                                 {({ accomplished }) => (
                                                  <div
                                                        style={{
                                                             display: 'block',
                                                             width: '100%',
                                                         textAlign: 'center',
                                                        }}
                                                    >
                                                         {accomplished ? 'In Progress' : 'Pending'}
                                                    </div>
                                                )}
                                            </Step>
                                           <Step transition="scale">
                                          {({ accomplished }) => (
                                                    <div
                                                        style={{
                                                           display: 'block',
                                                           width: '100%',
                                                           textAlign: 'center',
                                                        }}
                                                    >
                                                 {accomplished ? 'Completed' : 'Pending'}
                                                 </div>
                                                )}
                                            </Step>
                                        </ProgressBar>
                                    )}
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
