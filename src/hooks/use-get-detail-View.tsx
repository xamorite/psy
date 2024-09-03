import { getDetails } from "@/action/details";
import { Study } from "@/types/studyViewList";
import { useQuery } from "@tanstack/react-query"
import axios from "axios"



export const useGetStudyLists = (id: number) => {

    const query = useQuery<Study, Error>({
        queryKey: ["detail", id],
        queryFn: () => getDetails(id) ,
    });

    return query;
}