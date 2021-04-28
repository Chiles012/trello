import axios from 'axios';

axios.create({
    url: 'https://localhost:44308/api/'
});

export default axios;