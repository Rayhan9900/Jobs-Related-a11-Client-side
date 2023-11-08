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
        <div className="bg-fuchsia-500" >
            <div className="overflow-x-auto bg-teal-300">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th className="text-red-500 text-3xl">Email</th>
                            <th className="text-green-600 text-3xl" >Job Title</th>
                            <th className="text-fuchsia-600 text-3xl">Deadline</th>
                            <th className="text-violet-500 text-3xl">Status</th>
                            <th className="text-cyan-600 text-3xl">Button</th>
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
                                    <td className="text-emerald-500 font-bold hover:text-sky-500">Complete</td>
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