/* Core */
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { string, node, bool } from 'prop-types';

/* Instruments */
import { getUserTypeWeight } from '../../helpers/getUserTypeWeight';
import { selectUserType } from '../../bus/user/selectors';

export const Guardian = (props) => {
    const router = useRouter();
    const currentRole = useSelector(selectUserType);
    const { minRole, children } = props;
    const userMinRoleIndex = getUserTypeWeight(minRole);
    const userCurrentRoleIndex = getUserTypeWeight(currentRole);
    const isAllowed = userMinRoleIndex <= userCurrentRoleIndex;

    useEffect(() => {
        if (!isAllowed && props.redirect) {
            router.replace('/');
        }
    }, []);

    return isAllowed ? children : null;
};

Guardian.propTypes = {
    minRole: string.isRequired,
    children: node.isRequired,
    redirect: bool,
};
