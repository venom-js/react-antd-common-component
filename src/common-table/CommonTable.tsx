/**
 * @name 通用表格
 * @author MingShined
 */
import React, { Component } from 'react';
import { Table } from 'antd';
import { PaginationProps } from 'antd/lib/pagination';
import {
  ColumnProps,
  TableProps,
  TableRowSelection
} from 'antd/lib/table/interface';
import _ from 'lodash';

export interface PageProps {
  total: number;
  current: number;
  pageSize?: number;
  style?: React.CSSProperties;
  showSizeChanger?: boolean;
}

export interface CommonTableProps<T= any> extends TableProps<T> {
  columns: ColumnProps<T>[];
  pageProps?: PageProps;
  onPageChange?: (page: number, pageSize?: number) => void;
  onPageSizeChange?: (page: number, pageSize?: number) => void;
  checkable?: boolean;
  rowSelectProps?: TableRowSelection<T>;
  onCheck?: (
    selectedRowKeys: string[] | number[],
    selectedRows: Object[]
  ) => void;
}

const getPageProps = (that: CommonTable): PaginationProps | false => {
  const { pageProps } = that.props;
  if (!pageProps) {
    return false;
  }
  const {
    pageProps: { total, current, pageSize, style, showSizeChanger },
    onPageChange,
    onPageSizeChange
  } = that.props;
  return {
    total,
    style,
    showSizeChanger,
    current: current + 1 || 1,
    defaultPageSize: pageSize || 10,
    showQuickJumper: true,
    showTotal: (t, range) =>
      `共${total}条数据 第${current + 1}页 / 共${Math.ceil(
        total / (pageSize || 10)
      )}页`,
    onChange: (page, size) => {
      onPageChange(page - 1, size);
    },
    onShowSizeChange: (page, size) => {
      onPageSizeChange(page - 1, size);
    }
  };
};

const getRowSelection = (that: CommonTable): TableRowSelection<any> => {
  const { onCheck, rowSelectProps } = that.props;
  return {
    ...rowSelectProps,
    onChange: (selectedRowKeys, selectedRows) => {
      onCheck(selectedRowKeys, selectedRows);
    }
  };
};

export default class CommonTable extends Component<CommonTableProps> {
  render() {
    return (
      <Table
        rowSelection={this.props.checkable && getRowSelection(this)}
        pagination={getPageProps(this)}
        {...this.props}
      />
    );
  }
}
