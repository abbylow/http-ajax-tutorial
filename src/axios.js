import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

export default instance;

// use this instance to overwrite some global config
// to use this instance, import axios from this file instead of package eg: Blog.js
// global interceptor will not be used for the instance