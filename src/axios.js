import axios from 'axios';

const instance=axios.create({
    baseURL:"enter your end point"
})



//baseURL:"http://localhost:9000"


export default instance;
