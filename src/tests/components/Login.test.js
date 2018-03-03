import React from 'react';
import { shallow } from 'enzyme';
import Login from '../../components/Login';

test('should correctly render LoginPage', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper).toMatchSnapshot();
});