/* Styles */
import Styles from './styles.module.scss';

export const News = ({ title, data }) => {
    const isValidData = data && Array.isArray(data) && data.length;

    const itemsJSX = isValidData
        && data.map(({ id, content, dateOfReceiving }) => (
            <div key={id}>
                <p className={Styles.content}>{content}</p>
                <p>Опубликовано: {dateOfReceiving}</p>
            </div>
        ));

    return isValidData ? (
        <div className={Styles.container}>
            <h2>{title}</h2>
            {itemsJSX}
        </div>
    ) : null;
};
