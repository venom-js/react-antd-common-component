import { FormItemProps } from 'antd/lib/form';
import { RowProps } from 'antd/lib/row';
import { BaseButtonProps } from 'antd/lib/button/button';
import {
  GetFieldDecoratorOptions,
  FormProps,
  WrappedFormUtils
} from 'antd/lib/form/Form';
import { ColProps } from 'antd/lib/col';

export declare type PlaceType =
  | 'start'
  | 'end'
  | 'center'
  | 'space-around'
  | 'space-between';
export interface FormDataType {
  key: string;
  options?: GetFieldDecoratorOptions;
  node: React.ReactNode;
  label?: string | React.ReactNode;
  extra?: string | React.ReactNode;
  colProps?: ColProps;
}

export interface CommonFormButtonProps {
  place?: PlaceType;
  isSubmitBtn?: boolean;
  isResetBtn?: boolean;
  submitText?: string;
  resetText?: string;
  submitBtnProps?: BaseButtonProps;
  resetBtnProps?: BaseButtonProps;
  submitLoading?: boolean;
}

export default interface CommonFormProps {
  formData: FormDataType[];
  rowNum?: number | number[];
  formProps?: FormProps;
  formItemProps?: FormItemProps;
  rowProps?: RowProps;
  btnProps?: CommonFormButtonProps;
  onSubmit?: (err: any, value: any) => any;
  onReset?: () => any;
  getForm?: (form: WrappedFormUtils) => any;
  form?: WrappedFormUtils;
}
