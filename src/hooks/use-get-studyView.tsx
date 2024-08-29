import { Study } from "@/types/studyViewList";
import { useQuery } from "@tanstack/react-query"
import axios from "axios"



export const useGetStudyLists = () => {
    const query = useQuery<Study[], Error>({
        queryKey: ["study-lists"],
        queryFn: async () => {
           const response = await axios.get("api/study-view")

            if(response.status === 500) {
                throw new Error("Failed to fetch study list")
            }

            // console.log(response);
 
            return response.data;
        },
    });

    return query;
}