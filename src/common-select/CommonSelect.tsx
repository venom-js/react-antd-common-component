/**
 * @name 全局信息下拉组件
 * @author MingShined
 */
import React, { Component } from 'react';
import { Select } from 'antd';
import { OptionProps } from 'antd/lib/select';
import { transformEnumKeys } from 'src/common-utils/Object';
import { CommonSelectProps } from './type';

export default class CommonSelect extends Component<CommonSelectProps> {
  static Option: React.ClassicComponentClass<OptionProps> = Select.Option;
  static defaultProps: Partial<CommonSelectProps> = {
    dataSource: [
      { label: '是', value: 1 },
      {
        label: '否',
        value: 0
      }
    ],
    onRender: item => (
      <Select.Option key={item.value.toString()} value={item.value.toString()}>
        {item.label}
      </Select.Option>
    )
  };
  render() {
    const { dataSource, onRender } = this.props;
    const data =
      dataSource instanceof Array ? dataSource : transformEnumKeys(dataSource);
    return (
      <Select allowClear placeholder="请选择" {...this.props}>
        {data.map((item, index) => onRender(item, index))}
      </Select>
    );
  }
}
