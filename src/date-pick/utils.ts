import moment from 'moment';
import { RangePickerValue } from 'antd/lib/date-picker/interface';
import { DatePickeType } from './type';

export const formatDate = (
  value: moment.Moment | RangePickerValue | any,
  type: DatePickeType,
  format: string | string[] | any
) => {
  let result = undefined;
  if (value === null || value === []) {
    return undefined;
  }
  switch (type) {
    case 'date':
      result = moment(value).format(format);
      break;
    case 'range':
      result = value.map((item, index) => moment(item).format(format[index]));
      break;
    default:
      break;
  }
  return result;
};

export const getInitValue = (
  value: moment.Moment | RangePickerValue | any,
  type: DatePickeType
) => {
  let result = undefined;
  switch (type) {
    case 'date':
      result = value ? moment(value) : undefined;
      break;
    case 'range':
      result =
        value && value.length && value.find(item => item)
          ? value.map(item => moment(item))
          : [];
      break;
    default:
      break;
  }
  return result;
};
