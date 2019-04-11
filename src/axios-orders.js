import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://test-react-js-jb.firebaseio.com/'
});

export default instance;