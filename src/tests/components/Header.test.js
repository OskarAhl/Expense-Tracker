import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
// import ReactShallowRenderer from 'react-test-renderer/shallow';
import Header from '../../components/Header';

test('should render Header correctly', () => {
    // ======== Test headersnapshot with Enzym
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
    // ======== Test headersnapshot with react-test-renderer
    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header />);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
});
