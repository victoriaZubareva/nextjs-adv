/* Core */
import Link from 'next/link';

/* Components */
import { Back } from '../Back';

/* Styles */
import Styles from './styles.module.scss';

/* Hooks */
import { useCar } from './useCar';

export const Car = ({ single, carId }) => {
    const {
        id, content, dateOfReceiving, isCarNotFound,
    } = useCar(carId);

    return isCarNotFound ? (
        <div className={Styles.container}>
            <p className={Styles.error}>
                Авто с идентификатором {id} не найдено.
            </p>
            {single && <Back />}
        </div>
    ) : (
        <div className={Styles.container}>
            <Link href={`/cars/${id}`}>
                <p>
                    <a>{content}</a>
                </p>
            </Link>
            <p>Опубликовано: {dateOfReceiving}</p>
            {single && <Back />}
        </div>
    );
};
