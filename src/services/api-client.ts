import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'9e7e2c42e6a445658f7671288987185c'
    }
})