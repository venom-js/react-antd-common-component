import React, { useContext } from 'react';

import { DatePickContext } from '../DatePick';
import { formatDate } from '../utils';
import { DatePicker } from 'antd';

const DateItem: React.FC = () => {
  const { extendProps, initValue, transmitTimeValue } = useContext(
    DatePickContext
  );
  const { type, datePickerProps } = extendProps;
  const handleDateChange = async date => {
    const format =
      datePickerProps && datePickerProps.format
        ? datePickerProps.format
        : 'YYYY-MM-DD HH:mm:ss';
    const result = await formatDate(date, type, format);
    transmitTimeValue(result);
  };
  return (
    <DatePicker
      {...datePickerProps}
      value={initValue}
      onChange={handleDateChange}
    />
  );
};

export default DateItem;
