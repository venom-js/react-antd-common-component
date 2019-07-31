export interface PropsTableType {
  key: string;
  desc: string | React.ReactNode;
  type?:
    | 'string'
    | 'number'
    | 'Object'
    | ' string[]'
    | 'number[]'
    | 'Object[]'
    | 'any'
    | '() => void'
    | any;
  defaultValue?: any;
  version?: string;
  required?: 'true' | 'false';
}

export enum PropsTableEnum {
  参数 = 'key',
  说明 = 'desc',
  类型 = 'type',
  默认值 = 'defaultValue',
  必填 = 'required',
  版本 = 'version'
}
