import styles from './index.less';
import React, { useContext } from 'react';
import { CommonDrawerContext } from './CommonDrawer';
import { Button } from 'antd';
import { commonDrawerState } from './reducer';
import { DrawerFooterProps } from './type';
import _ from 'lodash';

const CommonDrawerFooter: React.FC = () => {
  const defaultProps: DrawerFooterProps = {
    place: 'right',
    okText: '确定',
    cancelText: '取消'
  };
  const { props, state, setState } = useContext(CommonDrawerContext);
  const handleCancel = () => {
    const { afterCancel } = props;
    setState(commonDrawerState);
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
  const {
    place,
    style,
    cancelButtonProps,
    okButtonProps,
    cancelText,
    okText
  } = _.extend(defaultProps, props.drawerFooterProps);
  return (
    <div
      className={styles.drawerFooter}
      style={{
        textAlign: place,
        ...style
      }}
    >
      <Button
        style={{ marginRight: 16 }}
        type="default"
        {...cancelButtonProps}
        onClick={handleCancel}
      >
        {cancelText}
      </Button>
      <Button
        type="primary"
        {...okButtonProps}
        onClick={handleOk}
        loading={state.confirmLoading}
      >
        {okText}
      </Button>
    </div>
  );
};

export default CommonDrawerFooter;
