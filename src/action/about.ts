import axios from "axios";

export const getAbout = async () => {
    try { 

        const res = await axios.get(`https://algorithmxcomp.pythonanywhere.com/api/about`);
        
        return res.data;
        
    } catch (error) {
       return error;
    }
};
