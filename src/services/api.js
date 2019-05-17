import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3001/api/v1/',
  withCredentials: true,
});

instance.interceptors.response.use(function(response){
  return response;
}, function(error){
  const status = error.response.status;
  if(window.location.pathname !== '/login' && (status === 401 || status === 403)) {
    window.location = '/login';
  }
  
  throw error;
});

export default instance;