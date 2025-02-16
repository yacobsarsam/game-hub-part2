import axios, {AxiosRequestConfig} from "axios";

export interface FetchResponse<T> {
    count: number;
    next:string|null;
    results: T[];
}

const axiosInstanse = axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'9e7e2c42e6a445658f7671288987185c'
    }
})

class APIClient<T>{
    endpoint:string;

    constructor(endpoint:string){
        this.endpoint = endpoint;
    }
    getAll = (config: AxiosRequestConfig) => {
            return axiosInstanse
                .get<FetchResponse<T>>(this.endpoint,config)
                .then(res=>res.data);
        }
}
export default APIClient;