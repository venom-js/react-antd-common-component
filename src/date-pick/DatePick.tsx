/**
 * @name 日期选择组件
 * @author MingShined
 */
import React, { useState, useMemo } from 'react';
import { getInitValue } from './utils';
import { DatePickProps, DatePickContextProps } from './type';
import _ from 'lodash';
import DateItem from './components/DateItem';
import RangeItem from './components/RangeItem';

export const DatePickContext = React.createContext<DatePickContextProps>(null);

const DatePick: React.FC<DatePickProps> = props => {
  const defaultProps: DatePickProps = { type: 'date' };
  const extendProps = _.extend(defaultProps, props);
  const [value, setValue] = useState(undefined);
  useMemo(() => setValue(props.value), [props.value]);
  const transmitTimeValue = date => {
    setValue(date);
    if (props.onChange) {
      props.onChange(date);
    }
  };
  let renderEl = null;
  const initValue = getInitValue(value, extendProps.type);
  switch (extendProps.type) {
    case 'date':
      renderEl = <DateItem />;
      break;
    case 'range':
      renderEl = <RangeItem />;
      break;
    default:
      break;
  }
  return (
    <DatePickContext.Provider
      value={{ initValue, transmitTimeValue, extendProps }}
    >
      {renderEl}
    </DatePickContext.Provider>
  );
};

export default DatePick;
