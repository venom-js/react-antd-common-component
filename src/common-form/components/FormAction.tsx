/**
 * @name
 * @author MingShined
 */
import React from 'react';
import { CommonFormButtonProps, FormChildrenProps } from '../type';
import { Row, Button, Icon, Col } from 'antd';
import { initBtnProps } from '../utils';

const FormAction: React.FC<FormChildrenProps> = props => {
  const btnProps: CommonFormButtonProps = initBtnProps();
  const {
    place,
    isSubmitBtn,
    isResetBtn,
    submitText,
    resetText,
    submitBtnProps,
    resetBtnProps
  } = { ...btnProps, ...props.btnProps };
  const handleReset = () => {
    const { form, onReset } = props;
    form.resetFields();
    if (onReset) {
      onReset();
    }
  };
  return (
    props && (
      <Row
        gutter={16}
        style={{ marginTop: 3 }}
        type="flex"
        justify={place}
        align="middle"
      >
        {isSubmitBtn && (
          <Col>
            <Button
              {...submitBtnProps}
              htmlType="submit"
              loading={props.loading}
            >
              {submitText}
            </Button>
          </Col>
        )}
        {isResetBtn && (
          <Col>
            <Button {...resetBtnProps} onClick={handleReset}>
              {resetText}
            </Button>
          </Col>
        )}
        {props.mode === 'shrink' && props.isBeyond && (
          <Col>
            <Button
              type="link"
              onClick={() => props.setState({ shrink: !props.shrink })}
            >
              {props.shrink
                ? (props.btnProps && props.btnProps.expandNode) || (
                    <span>
                      展开
                      <Icon type="down" />
                    </span>
                  )
                : (props.btnProps && props.btnProps.shrinkNode) || (
                    <span>
                      收缩
                      <Icon type="up" />
                    </span>
                  )}
            </Button>
          </Col>
        )}
      </Row>
    )
  );
};
export default FormAction;
