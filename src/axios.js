import axios from 'axios';

const instance=axios.create({
    baseURL:"https://salty-lowlands-43957.herokuapp.com/"
})



//baseURL:"http://localhost:9000"


export default instance;