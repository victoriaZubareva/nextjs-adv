/* Core */
import nookies from 'nookies';

export const destroyTmpStatus = (context) => {
    const cookies = nookies.get(context);
    const { tempStatus } = cookies;

    if (tempStatus) {
        nookies.destroy(context, 'tempStatus');
    }
};
