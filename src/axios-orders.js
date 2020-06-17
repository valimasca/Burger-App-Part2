import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-465dc.firebaseio.com/'
});

export default instance;