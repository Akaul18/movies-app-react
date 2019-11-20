// import { axios } from 'axios';
import Axios from 'axios';
import { BASE_URL_MOVIE, BASE_URL_TV, API_KEY } from '../config/api_config';

export const getMovies = async (type) => {
    try{
        const response = await Axios.get(`${BASE_URL_MOVIE}${type}`,{
            params:{
                api_key: API_KEY
                // total_results: 25
            }
        })
        return response.data
    }catch(err){
        throw err;
    }
}

export const getTv = async (type) => {
    try{
        const response = await Axios.get(`${BASE_URL_TV}${type}`,{
            params:{
                api_key: API_KEY
                // total_results: 25
            }
        })
        return response.data
    }catch(err){
        throw err;
    }
}