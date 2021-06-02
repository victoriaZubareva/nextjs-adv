import { USER_TYPES } from '../../constants';
import { getUserType } from '../../helpers/getUserType';

export const Greeting = ({ visitCounts }) => {
    const userType = getUserType(visitCounts);

    switch (userType) {
        case USER_TYPES.GUEST:
            return <h1>Приветствуем тебя странник!</h1>;
        case USER_TYPES.FRIEND:
            return <h1>Приветствуем тебя друг!</h1>;
        case USER_TYPES.FAMILY_MEMBER:
            return <h1>Добро пожаловать в семью!</h1>;
        default:
            throw new Error('не удалось определить тип польователя');
    }
};
