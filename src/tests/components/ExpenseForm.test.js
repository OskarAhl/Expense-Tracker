import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

test('should render ExpenseForm correctly', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});

test('should render expense form with data', () => {
    const wrapper = shallow(<ExpenseForm expense={ expenses[0] } />);
    expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid form', () => {
    const wrapper = shallow(<ExpenseForm />);
    // find the form and simulate submit
    wrapper.find('form').simulate('submit', {
        preventDefault: () => { }
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

test('should set description on input change', () => {
    const value = 'new description';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(0).simulate('change', {
        target: {
            value
        }
    });
    expect(wrapper.state('description')).toBe(value);
});

test('should set note on textarea change', () => {
    const value = 'note here';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('textarea').simulate('change', {
        target: {
            value
        }
    });
    expect(wrapper.state('note')).toBe(value);
});

test('should set amount on input change', () => {
    const value = '55.25';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {
        target: {
            value
        }
    });
    expect(wrapper.state('amount')).toBe(value);
});

test('should not set amount on invalid input change', () => {
    const value = '55.123';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {
        target: {
            value
        }
    });
    expect(wrapper.state('amount')).toBe('');
});

// setup spy (fake functions and check if the spies are called as expected)
test('should call onSubmit prop for valid form submission', () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy}/>);
    wrapper.find('form').simulate('submit', {
        preventDefault: () => { }
    });
    expect(wrapper.state('error')).toBe('');
    const expensesNoId = Object.assign({}, expenses[0]);
    delete expensesNoId.id;
    expect(onSubmitSpy).toHaveBeenLastCalledWith({ ...expensesNoId });
});

test('should set new date on date change', () => {
    const now = moment();
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('SingleDatePicker').prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now);
});

test('should set focused on focused change', () => {
    const focused = true;
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('SingleDatePicker').prop('onFocusChange')({focused});
    expect(wrapper.state('calendarFocused')).toBe(focused);
});