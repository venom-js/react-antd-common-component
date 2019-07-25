import { TextAlignProperty } from 'csstype';
import { DrawerProps } from 'antd/lib/drawer';
import { ButtonProps } from 'antd/lib/button';
import { CommonDrawerState } from './reducer';

export interface DrawerFooterProps {
  style?: React.CSSProperties;
  place?: 'left' | 'center' | 'right';
  okText?: string | React.ReactNode;
  okButtonProps?: ButtonProps;
  cancelText?: string | React.ReactNode;
  cancelButtonProps?: ButtonProps;
}

export interface CommonDrawerProps {
  btnText?: string | React.ReactNode;
  afterCancel?: () => any;
  beforeOk?: () => Promise<any> | boolean;
  btnProps?: ButtonProps;
  onClick?: () => void;
  drawerFooterProps?: DrawerFooterProps;
  footer?: boolean;
  drawerProps?: DrawerProps;
}

export interface CommonDrawerContextProps {
  state: CommonDrawerState;
  props: CommonDrawerProps;
  setState: (state: CommonDrawerState) => any;
}
