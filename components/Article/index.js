/* Core */
import Link from 'next/link';

/* Components */
import { Back } from '../Back';

/* Styles */
import Styles from './styles.module.scss';

/* Hooks */
import { useArticle } from './useArticle';

export const Article = ({ single, articleId }) => {
    const {
        isArticleNotFound, id, content, dateOfReceiving,
    } = useArticle(articleId);

    return isArticleNotFound ? (
        <div className={Styles.container}>
            <p className={Styles.error}>
                Новось с идентификатором {id} не найдена.
            </p>
            {single && <Back />}
        </div>
    ) : (
        <div className={Styles.container}>
            <Link href={`/news/${id}`}>
                <p>
                    <a>{content}</a>
                </p>
            </Link>
            <p>
                Опубликовано: {dateOfReceiving}
            </p>
            {single && <Back />}
        </div>
    );
};
