import PropTypes from 'prop-types';

const propTypes = {
    condition: PropTypes.bool,
    whenFalse: PropTypes.node,
    children: PropTypes.node,
};

const defaultProps = {
    condition: false,
    whenFalse: null,
    children: null,
};

const IfComponent = ({ condition, whenFalse, children }) => (condition ? children : whenFalse);

IfComponent.propTypes = propTypes;
IfComponent.defaultProps = defaultProps;

export default IfComponent;