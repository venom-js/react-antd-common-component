import { ButtonProps } from 'antd/lib/button';
import { ModalProps } from 'antd/lib/modal';

export interface CommonModalProps {
  btnText?: string | React.ReactNode;
  afterCancel?: () => any;
  beforeOk?: () => Promise<any> | boolean;
  btnProps?: ButtonProps;
  onClick?: () => void;
  modalProps?: ModalProps;
  extra?: React.ReactNode;
}
