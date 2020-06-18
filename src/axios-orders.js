import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-builder-adf18.firebaseio.com/',
});

export default instance;
