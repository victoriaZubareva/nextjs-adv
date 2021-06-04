/* Core */
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

/* Selectors */
import { selectArticleById } from '../../bus/news/selectors';

export const useArticle = (articleId) => {
    const { query } = useRouter();
    const searchId = query.id || articleId;
    const article = useSelector(
        selectArticleById(searchId),
    );

    if (!article) {
        return {
            id: searchId,
            isArticleNotFound: true,
        };
    }

    const { id, content, dateOfReceiving } = article;

    return {
        id,
        content,
        dateOfReceiving,
    };
};
