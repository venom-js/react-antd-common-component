import {
  DatePickerProps,
  RangePickerProps
} from 'antd/lib/date-picker/interface';

export declare type DatePickeType = 'date' | 'range';
export interface DatePickProps {
  type?: DatePickeType;
  onChange?: (value: any) => void;
  value?: any;
  datePickerProps?: DatePickerProps;
  rangePickerProps?: RangePickerProps;
}

export interface DatePickContextProps {
  initValue?: any;
  transmitTimeValue?: (value) => any;
  extendProps?: DatePickProps;
}
