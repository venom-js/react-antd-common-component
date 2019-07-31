/**
 * @name
 * @author MingShined
 */
import React from 'react';
import { ColumnProps } from 'antd/lib/table';
import { defaultColumnProps, CommonTable } from '..';
import { PropsTableEnum, PropsTableType } from './type';
interface PropsTableProps {
  dataSource: any[];
}
const getColumns = (): ColumnProps<any>[] => {
  return [
    {
      ...defaultColumnProps,
      title: '参数',
      dataIndex: PropsTableEnum.参数
    },
    { ...defaultColumnProps, title: '说明', dataIndex: PropsTableEnum.说明 },
    { ...defaultColumnProps, title: '类型', dataIndex: PropsTableEnum.类型 },
    {
      ...defaultColumnProps,
      title: '默认值',
      dataIndex: PropsTableEnum.默认值,
      width: 180
    },
    {
      ...defaultColumnProps,
      title: '必填',
      dataIndex: PropsTableEnum.必填
    },
    { ...defaultColumnProps, title: '版本', dataIndex: PropsTableEnum.版本 }
  ];
};
const PropsTable: React.FC<PropsTableProps> = props => {
  if (!props.dataSource) {
    return null;
  }
  const dataSource = props.dataSource.map(item => ({
    type: 'any',
    defaultValue: undefined,
    required: 'false',
    version: undefined,
    ...item
  }));
  return (
    <CommonTable
      columns={getColumns()}
      dataSource={dataSource}
      rowKey={(row, index) => index.toString()}
    />
  );
};
export default PropsTable;
