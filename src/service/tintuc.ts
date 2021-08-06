import axios from 'axios'

export const  getDataFromAPI = async () => {
    try{
        const response = await axios.get('https://610c0e6366dd8f0017b76c3f.mockapi.io/post')
        return response.data
    }catch(err){
        console.log(err);
    }
}