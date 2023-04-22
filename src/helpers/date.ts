import moment from 'moment';

export const getDayAndNumber = () => {
  return moment().format('LL').toString();
};
