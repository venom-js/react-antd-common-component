/**
 * @name 城市级联下拉
 * @author MingShined
 */
import { CascaderProps } from 'antd/lib/cascader';
import React from 'react';
import { transform } from './utils';
import address from './address';
import { Cascader } from 'antd';

export interface CityPickerProps {
  showCity?: boolean;
  showArea?: boolean;
  cascadeProps?: Partial<CascaderProps>;
}

const CityPicker: React.FC<CityPickerProps> = props => {
  const defaultProps: CityPickerProps = { showCity: true, showArea: true };
  const extendProps = { ...defaultProps, ...props };
  let options = transform(address, 0, 3);
  if (!extendProps.showCity && !extendProps.showArea) {
    options = transform(address, 0, 1);
  }
  if (extendProps.showCity && !extendProps.showArea) {
    options = transform(address, 0, 2);
  }
  return (
    <Cascader
      fieldNames={{ label: 'label', value: 'value', children: 'children' }}
      showSearch
      allowClear
      options={options}
      {...extendProps}
      {...extendProps.cascadeProps}
    />
  );
};

export default CityPicker;
