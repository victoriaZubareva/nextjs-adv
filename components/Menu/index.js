/* Core */
import NextLink from 'next/link';
import { useRouter } from 'next/router';

/* Styles */
import Styles from './styles.module.scss';

export const Menu = () => {
    const router = useRouter();

    return (
        <ul className={Styles.container}>
            <li>
                <NextLink href='/'>
                    <a className={router.pathname === '/' ? Styles.active : ''}>
                        🏡&nbsp;Домой
                    </a>
                </NextLink>
            </li>

            <li>
                <NextLink href='/dashboard'>
                    <a className={router.pathname === '/dashboard' ? Styles.active : ''}>
                        📜&nbsp;Дешборд
                    </a>
                </NextLink>
            </li>

            <li>
                <NextLink href='/user'>
                    <a className={router.pathname === '/user' ? Styles.active : ''}>
                        🤷🏼‍♂️&nbsp;Профиль
                    </a>
                </NextLink>
            </li>
        </ul>
    );
};
