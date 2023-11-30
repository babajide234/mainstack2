import axios from 'axios';

const BASEURL="https://fe-task-api.mainstack.io"


const instance  = axios.create({
    baseURL: BASEURL,
    headers:{
        'Content-Type': 'application/json'
    }
})

export default instance;
