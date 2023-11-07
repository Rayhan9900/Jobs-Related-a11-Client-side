import React, { useContext } from 'react'
import { AuthContext } from '../../provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

function BidRequests() {

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


    return (
        <div>

        </div>
    )
}

export default BidRequests