/* Core */
import Link from 'next/link';
import { useSelector } from 'react-redux';

/* Components */
import { Discount } from '../Discount';

/* Selectors */
import { selectDiscounts } from '../../bus/discounts/selectors';


export const Discounts = ({ title }) => {
    const data = useSelector(selectDiscounts);
    const isValidData = data && Array.isArray(data) && data.length;

    const itemsJSX = isValidData
    && data.map(({ id }) => <Discount key={id} discountId={id} />);

    return isValidData ? (
        <div>
            <Link href='/discounts'>
                <h2>
                    <a>{title}</a>
                </h2>
            </Link>
            {itemsJSX}
        </div>
    ) : null;
};
