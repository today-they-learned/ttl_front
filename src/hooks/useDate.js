import moment from 'moment';
import 'moment/locale/ko';

const useDate = (value) => {
  const today = moment().add(1, 'seconds');
  const date = moment(value);
  const diff = today.diff(date, 'days');
  return diff > 31 ? date.format('YYYY년 MM월 DD일') : date.from(today);
};

export default useDate;
