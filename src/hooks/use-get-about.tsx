// import { AboutPage } from "../types/about";
// import { useQuery } from "@tanstack/react-query"
// import axios from "axios"



// export const useGetAbout = () => {
//     const query = useQuery<About[], Error>({
//         queryKey: ["about"],
//         queryFn: async () => {
//            const response = await axios.get("api/about")

//             if(response.status === 500) {
//                 throw new Error("Failed to fetch study list")
//             }

//             // console.log(response);
 
//             return response.data;
//         },
//     });

//     return query;
// }