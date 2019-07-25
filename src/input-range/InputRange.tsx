import React, { useState, useMemo } from 'react';
import { Input, InputNumber } from 'antd';
import _ from 'lodash';
import { InputRangeProps } from './type';

const InputRange: React.FC<InputRangeProps> = props => {
  const defaultProps: InputRangeProps = {
    onChange: () => {
      return;
    },
    min: 0,
    placeholders: ['请输入', '请输入'],
    separator: '~'
  };
  const { onChange, min, placeholders, style, separator } = { ...defaultProps, ...props };
  const [range, setRange] = useState([]);
  useMemo(() => setRange(props.value), [props.value]);
  const handleChange = (v: any, index: number) => {
    const result = [].concat(range);
    result[index] = v;
    if (index === 0 && !result[1]) {
      result[1] = v;
    }
    setRange(result);
    onChange(result[0] && result[1] ? result : null);
  };
  const [holder1, holder2] = placeholders;
  return (
    <Input.Group compact style={{ display: 'flex', ...style }}>
      <InputNumber
        min={min}
        onChange={v => handleChange(v, 0)}
        value={range && range[0]}
        placeholder={holder1}
        style={{ flex: 1 }}
      />
      <Input
        style={{ width: 40, textAlign: 'center' }}
        placeholder={separator}
        disabled
      />
      <InputNumber
        onChange={v => handleChange(v, 1)}
        value={range && range[1]}
        style={{ flex: 1 }}
        {...(range ? { min: range[0] } : {})}
        placeholder={holder2}
      />
    </Input.Group>
  );
};

export default InputRange;
