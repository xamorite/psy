import axios from "axios";

export const getDetails = async (id: number) => {
    try {
        
        const res = await axios.get(`https://algorithmxcomp.pythonanywhere.com/api/studies/${id}`)
        console.log(res.data)
        return res.data;
       
    } catch (error) {
        console.error('Error fetching data:', error)
       return error;
    }
};