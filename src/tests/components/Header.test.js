import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
// import ReactShallowRenderer from 'react-test-renderer/shallow';
import {Header} from '../../components/Header';

test('should render Header correctly', () => {
    // ======== Test headersnapshot with Enzym
    const wrapper = shallow(<Header startLogout={() => {}} />);
    expect(wrapper).toMatchSnapshot();
    // ======== Test headersnapshot with react-test-renderer
    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header />);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
});

test('should call startLogout on button click`', () => {
    const startLogout = jest.fn();
    const wrapper = shallow(<Header startLogout={startLogout} />);
    wrapper.find('button').simulate('click');
    expect(startLogout).toHaveBeenCalled();
});
