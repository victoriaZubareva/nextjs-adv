/* Core */
import { useRouter } from 'next/router';

/* Styles */
import Styles from './styles.module.scss';

export const Back = () => {
    const router = useRouter();

    return (
        <ul className={Styles.container}>
            <li>
                <a onClick={router.back}>⬅ Назад</a>
            </li>
        </ul>
    );
};
