/* Core */
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

/* Selectors */
import { selectCarById } from '../../bus/cars/selectors';

export const useCar = (carId) => {
    const { query } = useRouter();
    const searchId = query.id || carId;
    const car = useSelector(
        selectCarById(searchId),
    );

    if (!car) {
        return {
            id: searchId,
            isCarNotFound: true,
        };
    }

    const { id, content, dateOfReceiving } = car;

    return {
        id,
        content,
        dateOfReceiving,
    };
};
