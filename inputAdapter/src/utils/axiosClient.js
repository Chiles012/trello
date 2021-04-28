import axios from 'axios';

axios.create({
    url: 'https://localhost:44308/api/s'
});

export default axios;