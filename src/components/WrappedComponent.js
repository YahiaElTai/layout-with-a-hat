// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';
import PropTypes from 'prop-types';

// return the Wrapped Component with its props
const InternalWrappedComponent = ({
  WrappedComponent,
  wrappedComponentProps,
}) => <WrappedComponent {...wrappedComponentProps} />;

const DefaultComponent = () => <div />;

InternalWrappedComponent.propTypes = {
  WrappedComponent: PropTypes.func,
  wrappedComponentProps: PropTypes.shape(),
};

InternalWrappedComponent.defaultProps = {
  WrappedComponent: DefaultComponent,
  wrappedComponentProps: {},
};

export default InternalWrappedComponent;
