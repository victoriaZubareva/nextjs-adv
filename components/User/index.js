/* Core */
import { useSelector, useDispatch } from 'react-redux';

/* Styles */
import Styles from './styles.module.scss';

/* Instruments */
import { userActions } from '../../bus/user';
import {
    selectVisitCount,
    selectUserId,
    selectUserType,
} from '../../bus/user/selectors';
import { getUserNextLevel } from '../../helpers/getUserNextLevel';

export const User = () => {
    const userId = useSelector(selectUserId);
    const visitCount = useSelector(selectVisitCount);
    const userType = useSelector(selectUserType);
    const dispatch = useDispatch();

    const incrementVisitCounts = () => {
        const nextLevel = getUserNextLevel(userType);

        dispatch(userActions.setUserType(nextLevel));

        document.cookie = 'tempStatus=true;max-age=31556926';
    };

    return (
        <section className={Styles.container}>
            <h1>🤷🏼‍♂️ Профиль</h1>
            <p>
                🎯 Айди пользователя: <span>{userId}</span>
            </p>
            <p>
                👀 Количество визитов: <span>{visitCount}</span>
            </p>
            <p>
                🕵🏼‍♂️ Тип пользователя: <span>{userType}</span>
            </p>

            <button
                onClick={incrementVisitCounts}
                disabled={userType === 'FAMILY_MEMBER'}
            >
                Временно повысить свой статус
            </button>
        </section>
    );
};
