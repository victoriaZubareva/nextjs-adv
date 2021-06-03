/* Styles */
import Styles from './styles.module.scss';

import { useMessage } from './useMessage';

export const Message = () => {
    const message = useMessage();

    return message && (
        <section className={Styles.container}>
            <h1>{message}</h1>
        </section>
    );
};
