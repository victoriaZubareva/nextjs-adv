/* Core */
import Link from 'next/link';
import { useSelector } from 'react-redux';

/* Components */
import { Car } from '../Car';

/* Selectors */
import { selectCars } from '../../bus/cars/selectors';

export const Cars = ({ title }) => {
  const data = useSelector(selectCars);
  const isValidData = data && Array.isArray(data) && data.length;

  const itemsJSX =
    isValidData && data.map(({ id }) => <Car key={id} carId={id} />);

  return isValidData ? (
    <div>
      <Link href="/cars">
        <h2>
          <a>{title}</a>
        </h2>
      </Link>
      {itemsJSX}
    </div>
  ) : null;
};
