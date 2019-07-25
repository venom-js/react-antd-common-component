import { SelectProps } from 'antd/lib/select';

export interface DataSourceType {
  label: string;
  value: number | string;
}

export interface CommonSelectProps extends Partial<SelectProps> {
  dataSource?: DataSourceType[] | Object | any;
  onRender?: (item: any, index: number) => React.ReactNode;
}
