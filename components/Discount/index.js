/* Core */
import Link from 'next/link';

/* Components */
import { Back } from '../Back';

/* Styles */
import Styles from './styles.module.scss';

/* Hooks */
import { useDiscount } from './useDiscount';

export const Discount = ({ single, discountId }) => {
    const {
        id, content, dateOfReceiving, isDiscountNotFound,
    } = useDiscount(discountId);

    return isDiscountNotFound ? (
        <div className={Styles.container}>
            <p className={Styles.error}>
                Скидка с идентификатором {id} не найдено.
            </p>
            {single && <Back />}
        </div>
    ) : (
        <div className={Styles.container}>
            <Link href={`/discounts/${id}`}>
                <p>
                    <a>{content}</a>
                </p>
            </Link>
            <p>Опубликовано: {dateOfReceiving}</p>
            {single && <Back />}
        </div>
    );
};
