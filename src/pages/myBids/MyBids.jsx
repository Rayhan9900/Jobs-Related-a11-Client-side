import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";


function MyBids() {

    const { user } = useContext(AuthContext)

    const { data: myBids = [], refetch } = useQuery({
        queryKey: ['bids', user?.email],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/bids?email=${user.email}`,);

            return res.data;
        }
    })

    console.log(myBids)
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Email</th>
                            <th>Job Title</th>
                            <th>Deadline</th>
                            <th>Status</th>
                            <th>Button</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            myBids.map((bids, index) =>
                                <tr key={bids._id} className="bg-base-200">
                                    <td>{index + 1}</td>
                                    <th>{bids.email}</th>
                                    <td>{bids.jobTitle}</td>
                                    <td>{bids.deadline}</td>
                                    <td>{bids.status}</td>
                                    <td>Complete</td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default MyBids