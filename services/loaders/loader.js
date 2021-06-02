/* Core */
import { promises as fs } from 'fs';
import { format } from 'date-fns';

export const getDataWithTransform = async (path) => {
  const getDateOfReceiving = (item) => ({
    ...item,
    dateOfReceiving: format(new Date(), 'dd-MM-yyyy HH:mm'),
  });

  const source = await fs.readFile(path, 'utf-8');
  const parsedData = JSON.parse(source);
  const data = parsedData.map(getDateOfReceiving);

  return data;
};
