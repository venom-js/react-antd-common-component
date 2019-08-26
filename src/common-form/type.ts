import { FormItemProps } from 'antd/lib/form';
import { RowProps } from 'antd/lib/row';
import { BaseButtonProps } from 'antd/lib/button/button';
import {
  GetFieldDecoratorOptions,
  FormProps,
  WrappedFormUtils,
  FormComponentProps
} from 'antd/lib/form/Form';
import { ColProps } from 'antd/lib/col';

export interface CommonFormState {
  loading: boolean;
  shrink: boolean;
}

export interface FormChildrenProps extends CommonFormProps, CommonFormState {
  setState: (state: Partial<CommonFormState>) => void;
  isBeyond?: boolean;
}

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
  formItemProps?: FormItemProps;
}

export interface CommonFormButtonProps {
  place?: PlaceType;
  isSubmitBtn?: boolean;
  isResetBtn?: boolean;
  submitText?: string | React.ReactNode;
  resetText?: string | React.ReactNode;
  submitBtnProps?: BaseButtonProps;
  resetBtnProps?: BaseButtonProps;
  shrinkNodes?: React.ReactNode[];
}

type ModeType = 'default' | 'shrink';

export default interface CommonFormProps extends FormComponentProps<any> {
  mode?: ModeType;
  formData: FormDataType[];
  rowNum?: number | number[];
  formProps?: FormProps;
  formItemProps?: FormItemProps;
  rowProps?: RowProps;
  btnProps?: CommonFormButtonProps;
  onSubmit?: (err: any, value: any) => any;
  onReset?: () => any;
  getForm?: (form: WrappedFormUtils) => any;
}
