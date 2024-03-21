import { apiGateway } from './axios';

export const getStatistic = async () => {
    const res = await apiGateway.get('');
    try {
        return res.data;
    } catch (error) {
        console.error(error);
    }
};
