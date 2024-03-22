import { useEffect, useState } from 'react';
import { getStatistic } from '../services/getStatistic';

import { Valute } from '../services/type';
import { error } from 'console';
export const useGetStatistic = () => {
    const [valute, setValute] = useState<Valute>({});

    useEffect(() => {
        getStatistic()
            .then((res) => setValute(res.Valute))
            .catch((error) => console.log(error));
    }, []);

    return { valute };
};
