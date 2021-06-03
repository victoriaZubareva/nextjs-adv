/* Core */
import { useSelector } from 'react-redux';
import { node, string } from 'prop-types';

/* Instruments */
import { getUserTypeWeight } from '../../helpers/getUserTypeWeight';
import { selectUserType } from '../../bus/user/selectors';

export const Guardian = (props) => {
    const currentRole = useSelector(selectUserType);
    const { minRole, children } = props;
    const userMinRoleIndex = getUserTypeWeight(minRole);
    const userCurrentRoleIndex = getUserTypeWeight(currentRole);

    return userMinRoleIndex <= userCurrentRoleIndex ? children : null;
};

Guardian.propTypes = {
    minRole: string.isRequired,
    children: node.isRequired,
};
