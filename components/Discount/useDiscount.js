/* Core */
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

/* Selectors */
import { selectDiscountById } from '../../bus/discounts/selectors';

export const useDiscount = (discountId) => {
    const { query } = useRouter();
    const searchId = query.id || discountId;
    const discount = useSelector(
        selectDiscountById(searchId),
    );

    if (!discount) {
        return {
            id: searchId,
            isDiscountNotFound: true,
        };
    }

    const { id, content, dateOfReceiving } = discount;

    return {
        id,
        content,
        dateOfReceiving,
    };
};
