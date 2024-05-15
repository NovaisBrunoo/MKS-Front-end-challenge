import axios from 'axios';

export default axios.create({
    baseURL: 'https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1',
    timeout: 100000,
    headers: { 'Content-Type': 'application/json' }
});