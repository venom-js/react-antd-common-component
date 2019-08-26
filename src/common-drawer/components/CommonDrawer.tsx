/**
 * @name 通用弹框
 * @author MingShined
 */
import React, { Fragment, useReducer } from 'react';
import { Drawer, Button, Spin } from 'antd';
import { CommonDrawerProps, CommonDrawerContextProps } from '../type';
import { reducer, commonDrawerState, CommonDrawerState } from '../reducer';
import CommonDrawerFooter from './CommonDrawerFooter';
import _ from 'lodash';

export const CommonDrawerContext = React.createContext<
  Partial<CommonDrawerContextProps>
>({});

const CommonDrawer: React.FC<CommonDrawerProps> = props => {
  const defaultProps: CommonDrawerProps = {
    btnText: '点我弹窗',
    drawerProps: {
      maskClosable: true,
      destroyOnClose: true,
      maskStyle: {
        backgroundColor: '#000',
        opacity: 0.5
      },
      bodyStyle: {
        paddingBottom: 72
      }
    },
    footer: true
  };

  const [state, dispatch] = useReducer(reducer, commonDrawerState);
  const setState = (
    payload: Partial<CommonDrawerState>,
    callback?: () => any
  ) => {
    dispatch({ payload, type: 'setState' });
    if (callback) {
      callback();
    }
  };

  const handleCancel = () => {
    const { afterCancel } = props;
    setState(commonDrawerState);
    if (afterCancel) {
      afterCancel();
    }
  };

  const handleClick = async () => {
    if (props.onClick) {
      await props.onClick();
    }
    setState({ visible: true, loading: false });
  };
  const extendProps = _.merge(defaultProps, props);
  const drawerProps = _.merge(defaultProps.drawerProps, props.drawerProps);
  const { visible, loading } = state;
  return (
    <CommonDrawerContext.Provider value={{ props, state, setState }}>
      <Button type="primary" {...extendProps.btnProps} onClick={handleClick}>
        {extendProps.btnText}
      </Button>
      <Drawer
        onClose={handleCancel}
        {...drawerProps}
        visible={visible}
      >
        {visible && (
          <Fragment>
            <Spin spinning={loading}>{props.children}</Spin>
            {extendProps.footer && <CommonDrawerFooter />}
          </Fragment>
        )}
      </Drawer>
    </CommonDrawerContext.Provider>
  );
};

export default CommonDrawer;
