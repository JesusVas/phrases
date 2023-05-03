import axios from 'axios';
export const getQuotes=async()=>{
    return await axios.get('https://api.quotable.io/random')
};