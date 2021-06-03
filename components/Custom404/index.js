/* Core */
import NextLink from 'next/link';

/* Styles */
import Styles from './styles.module.scss';

export const Custom404 = () => (
    <section className={Styles.container}>
        <h1>Ошибка 404!</h1>
        <h2>
            🌲 Похоже, <span>Вы заблудились в ЛЕСУ</span>. 🌲
        </h2>
        <p>
            <NextLink href='/'>
                <a>🕊 ВЫХОД... 🪶</a>
            </NextLink>
        </p>
    </section>
);
