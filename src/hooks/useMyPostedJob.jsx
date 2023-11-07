

import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function useMyPostedJob() {

    const { user } = useContext(AuthContext)

    const { data: posted = [], refetch } = useQuery({
        queryKey: ['jobs', user?.email],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/jobs?email=${user.email}`,);

            return res.data;
        }

    })
    return [posted, refetch]

}

export default useMyPostedJob











