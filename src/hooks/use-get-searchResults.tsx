import { Study } from "@/types/studyViewList";
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import debounce from "lodash.debounce";



export const useGetSearchReasult = (searchTerm: string, debouncedSearchTerm: string) => {
    const query = useQuery<Study[], Error>({
        queryKey: ['searchResults', debouncedSearchTerm],
        queryFn: async () => {
            const response = await axios.get(`api/search-study?title=${searchTerm}`)

            if (response.status === 500) {
                throw new Error("Failed to fetch search results")
            }

            // console.log(response);

            return response.data;
        },
        // enabled: !!searchTerm,
    });

    return query;
}