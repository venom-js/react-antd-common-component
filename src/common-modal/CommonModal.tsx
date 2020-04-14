import React, { Fragment } from 'react';
import Modal from 'antd/lib/modal';
import Button from 'antd/lib/button';
import { Spin } from 'antd';
import _ from 'lodash';
import { useStateReducer } from 'src/common-utils';
import { CommonModalProps } from './type';

const getInitState = () => ({
  visible: false,
  confirmLoading: false,
  loading: true
});

type State = ReturnType<typeof getInitState>;

const CommonModal: React.FC<CommonModalProps> = props => {
  const defaultProps: CommonModalProps = {
    btnText: '点我弹窗',
    modalProps: {
      maskClosable: true,
      destroyOnClose: true
    }
  };
  const handleCancel = () => {
    const { afterCancel } = props;
    setState(getInitState());
    if (afterCancel) {
      afterCancel();
    }
  };
  const handleOk = async () => {
    if (!props.beforeOk) {
      handleCancel();
      return;
    }
    setState({ confirmLoading: true });
    const isCancel = await props.beforeOk();
    if (isCancel) {
      handleCancel();
      return;
    }
    setState({ confirmLoading: false });
  };
  const handleClick = async () => {
    if (props.onClick) {
      await props.onClick();
    }
    toggleVisible(true);
  };
  const toggleVisible = (value: boolean) => {
    setState({ visible: value, loading: !value });
  };
  const [state, setState] = useStateReducer<State>(getInitState());
  const { btnProps, btnText } = _.merge(defaultProps, props);
  const modalProps = _.merge(defaultProps.modalProps, props.modalProps);
  const { visible, confirmLoading, loading } = state;
  return (
    <Fragment>
      <Button type="primary" {...btnProps} onClick={handleClick}>
        {btnText}
      </Button>
      {props.extra}
      <Modal
        {...modalProps}
        onCancel={handleCancel}
        onOk={handleOk}
        visible={visible}
        confirmLoading={confirmLoading}
      >
        {visible ? <Spin spinning={loading}>{props.children}</Spin> : null}
      </Modal>
    </Fragment>
  );
};
export default CommonModal;
