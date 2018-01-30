import { setStartDate, setEndDate, sortByAmount, sortByDate, setTextFilter } from '../../actions/filters';
import moment from 'moment';

test('should generate set start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
});

test('Should generate set end date action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
});

test('should set sort by amount action object', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    });
});

test('should set sort by date action object', () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    });
});

test('should setup set text filter action object with filter text', () => {
    const action = setTextFilter('Rent');
    expect(action).toEqual({
        type: 'ADD_FILTER_TEXT',
        text: 'Rent'
    })
});

test('should setup set text filter action object without parameters', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'ADD_FILTER_TEXT',
        text: ''
    })
});