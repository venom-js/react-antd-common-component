import React, { useContext } from 'react';
import { DatePickContext } from './DatePick';
import { formatDate } from '../utils';
import { DatePicker } from 'antd';

const RangeItem: React.FC = () => {
  const { extendProps, initValue, transmitTimeValue } = useContext(
    DatePickContext
  );
  const { type, rangePickerProps } = extendProps;
  const handleRangeChange = async date => {
    const format = getFormat();
    const result = await formatDate(date, type, format);
    transmitTimeValue(result);
  };
  const getFormat = () => {
    if (!rangePickerProps || (!rangePickerProps.showTime && !rangePickerProps.format)) {
      return ['YYYY-MM-DD 00:00:00', 'YYYY-MM-DD 23:59:59'];
    }
    if (rangePickerProps.showTime && !rangePickerProps.format) {
      return ['YYYY-MM-DD HH:mm:ss', 'YYYY-MM-DD HH:mm:ss'];
    }
    return rangePickerProps.format;
  };
  return (
    <DatePicker.RangePicker
      {...rangePickerProps}
      value={initValue}
      onChange={handleRangeChange}
    />
  );
};

export default RangeItem;
