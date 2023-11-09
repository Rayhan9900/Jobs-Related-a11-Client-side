import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";


function MyBids() {
    const [disabled, setDisabled] = useState(false);
    const { user } = useContext(AuthContext)

    const { data: myBids = [], refetch } = useQuery({
        queryKey: ['bids', user?.email],
        queryFn: async () => {
            const res = await axios.get(`https://jobs-related-server-ass-11.vercel.app/bids?email=${user.email}`,);

            return res.data;
        }
    })

    const handleComplet = (id) => {
        axios.patch(`https://jobs-related-server-ass-11.vercel.app/bids/complete/${id}`)
            .then((res) => {
                refetch();
            });
    }



    return (
        <div className="bg-fuchsia-500" >
            <div className=" overflow-x-auto bg-teal-300">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th className="text-red-500 md:text-3xl text-xs">Email</th>
                            <th className="text-green-600 md:text-3xl text-xs" >Job Title</th>
                            <th className="text-fuchsia-600 md:text-3xl text-xs">Deadline</th>
                            <th className="text-violet-500 md:text-3xl text-xs">Status</th>
                            <th className="text-cyan-600 md:text-3xl text-xs">Button</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            myBids.map((bids, index) =>
                                <tr key={bids._id} className="bg-base-20">
                                    <td>{index + 1}</td>
                                    <td>{bids.email}</td>
                                    <td>{bids.jobTitle}</td>
                                    <td>{bids.deadline}</td>
                                    <td>{bids.status}</td>
                                    <td>
                                        {
                                            bids.status === 'in progress' && (
                                                <button onClick={() => handleComplet(bids._id)} disabled={disabled}>Complete</button>
                                            )}

                                    </td>
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