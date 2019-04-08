import React from 'react';
import { Helmet } from 'react-helmet';

import helmetPropsFunc from './helmetProps';
import { LayoutComponent, WrappedComponent } from './components';

const LayoutWithAHat = helmet => layout => component => (
  <React.Fragment>
    <Helmet {...helmetPropsFunc(helmet || {})} />
    <LayoutComponent {...layout}>
      <WrappedComponent {...component} />
    </LayoutComponent>
  </React.Fragment>
);

export default LayoutWithAHat;
