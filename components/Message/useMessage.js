/* Core */
import { useSelector } from 'react-redux';

/* Selectors */
import { selectUserType } from '../../bus/user/selectors';

/* Constants */
import { USER_TYPES } from '../../constants';

export const useMessage = () => {
    const userType = useSelector(selectUserType);
    let message = null;

    switch (userType) {
        case USER_TYPES.GUEST:
            message = 'Приветствуем тебя странник!';
            break;
        case USER_TYPES.FRIEND:
            message = 'Приветствуем тебя друг!';
            break;
        case USER_TYPES.FAMILY_MEMBER:
            message = 'Добро пожаловать в семью!';
            break;
        default:
            throw new Error('can not find right message');
    }

    return message;
};
