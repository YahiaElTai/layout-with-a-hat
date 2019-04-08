import React from 'react';
import { shallow } from 'enzyme';

import { WrappedComponent } from '../../lib/components';

it('renders the wrapped component with its correct props', () => {
  const Component = ({ name, className }) => (
    <div className={className}>
      <p>{`Hello ${name}, How are you today?`}</p>
    </div>
  );

  const props = {
    WrappedComponent: Component,
    wrappedComponentProps: { name: 'James', className: 'sidebar' },
  };

  const wrapper = shallow(<WrappedComponent {...props} />);

  expect(
    wrapper.equals(<Component name="James" className="sidebar" />),
  ).toBeTruthy();
});
