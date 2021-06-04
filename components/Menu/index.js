/* Core */
import NextLink from 'next/link';
import { useRouter } from 'next/router';

/* Styles */
import Styles from './styles.module.scss';

/* Other */
import { links } from './links';

export const Menu = () => {
    const router = useRouter();
    const linksJSX = links.map(({ title, url }) => (
        <li key={url}>
            <NextLink href={url}>
                <a className={router.pathname === url ? Styles.active : ''}>
                    {title}
                </a>
            </NextLink>
        </li>
    ));

    return (
        <ul className={Styles.container}>
            {linksJSX}
        </ul>
    );
};
