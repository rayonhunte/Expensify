import moment from 'moment';

export const filters = {
  test: '',
  soarBy: 'date',
  startDate: undefined,
  endDate: undefined
};



export const altFilters = {
  test: 'bills',
  soarBy: 'amount',
  startDate: moment(0),
  endDate: moment(0).add(3, 'days')
};