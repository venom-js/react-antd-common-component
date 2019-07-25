import { ColumnProps } from 'antd/lib/table';

/**
 * @name 通用表格默认属性
 */
export const defaultColumnProps: ColumnProps<any> = {
  align: 'center',
  render: text => (text || text === 0 ? text : '--')
};