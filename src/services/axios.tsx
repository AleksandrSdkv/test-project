import axios from 'axios';
import { BASE_URL } from '../utils/constants';

export const apiGateway = axios.create({
    baseURL: BASE_URL,
});
