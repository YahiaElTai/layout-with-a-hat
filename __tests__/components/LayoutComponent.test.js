import React from 'react';
import { shallow } from 'enzyme';

import { LayoutComponent } from '../../src/components';

it('renders the layout component with its correct props', () => {
  const Component = ({ className, children }) => (
    <div className={className}>
      <header>
        <p>Header here</p>
      </header>
      <div>{children}</div>
      <footer>All rights reserved to this this</footer>
    </div>
  );

  const props = {
    LayoutComponent: Component,
    layoutComponentProps: { className: 'sidebar' },
  };

  const wrapper = shallow(
    <LayoutComponent {...props}>
      <div>Content here</div>
    </LayoutComponent>,
  );

  expect(
    wrapper.equals(
      <Component className="sidebar">
        <div>Content here</div>
      </Component>,
    ),
  ).toBeTruthy();
});
