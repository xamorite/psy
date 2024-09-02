import { ApiResponse } from "@/types/studyViewList";
import { useQuery } from "@tanstack/react-query"
import axios from "axios"



export const useGetStudyLists = (pageNum: number) => {

    const query = useQuery<ApiResponse, Error>({
        queryKey: ["study-lists", pageNum],
        queryFn: async () => {
            const response = await axios.get(`api/study-view?page=${pageNum}`)

            if (response.status === 500) {
                throw new Error("Failed to fetch study list")
            }

            return response.data;
        },
    });

    return query;
}