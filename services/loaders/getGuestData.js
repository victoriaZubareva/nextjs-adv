/* Instruments */
import { NEWS_PATH } from '../../constants';
import { getDataWithTransform } from './loader';

export const getGuestData = async () => {
  const newsData = await getDataWithTransform(NEWS_PATH);

  return {
    newsData,
  };
};
