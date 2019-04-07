// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';
import PropTypes from 'prop-types';

// return the Layout Component with its props and children (ie: Wrapped Component)
const InternalLayoutComponent = ({
  LayoutComponent,
  layoutComponentProps,
  children,
}) => <LayoutComponent {...layoutComponentProps}>{children}</LayoutComponent>;

const DefaultLayout = ({ children }) => <div>{children}</div>;

DefaultLayout.propTypes = {
  children: PropTypes.node,
};

DefaultLayout.defaultProps = {
  children: <div />,
};

InternalLayoutComponent.propTypes = {
  LayoutComponent: PropTypes.func,
  layoutComponentProps: PropTypes.shape(),
  children: PropTypes.node.isRequired,
};

InternalLayoutComponent.defaultProps = {
  LayoutComponent: DefaultLayout,
  layoutComponentProps: {},
};

export default InternalLayoutComponent;
