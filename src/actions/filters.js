// ADD_FILTER_TEXT
export const setTextFilter = (text = '') => ({
    type:'ADD_FILTER_TEXT',
    text
});
// SET SORTBY AMOUNT
export const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT',
});
// SET SORTBY DATE
export const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});
// SET_START_DATE
export const setStartDate = (startDate = undefined) => ({
    type: 'SET_START_DATE',
    startDate
});
// SET_END_DATE
export const setEndDate = (endDate = undefined) => ({
    type: 'SET_END_DATE',
    endDate
});
