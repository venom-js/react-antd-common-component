import React, { Fragment } from 'react';
import { Row, Col, Form, Button } from 'antd';
import { FormDataType, PlaceType, CommonFormButtonProps } from './type';
import { RowProps } from 'antd/lib/row';
import { FormItemProps } from 'antd/lib/form';
import { BaseButtonProps } from 'antd/lib/button/button';
import _ from 'lodash';
import CommonForm from '.';
const FormItem = Form.Item;

/**
 * ----------------------- *
 * @name 渲染FormItem
 */
export function renderFormItem(
  chunkFormData: FormDataType[][],
  rowProps: RowProps,
  formItemProps: FormItemProps,
  getFieldDecorator,
  rowNum: number | number[]
): React.ReactNode {
  return (
    <Fragment>
      {chunkFormData.map((item, index) => (
        <Row key={index} {...rowProps}>
          {item.map((item2, index2) => (
            <Col
              span={24 / (Array.isArray(rowNum) ? rowNum[index] : rowNum)}
              key={`${item2.key}-${index2}`}
              {...item2.colProps}
            >
              <FormItem
                style={{ marginBottom: 10 }}
                {...formItemProps}
                label={item2.label}
              >
                {getFieldDecorator(item2.key, item2.options)(item2.node)}
                {item2.extra}
              </FormItem>
            </Col>
          ))}
        </Row>
      ))}
    </Fragment>
  );
}

/**
 * ----------------------- *
 * @name 渲染操作按钮
 */
export function renderFormItemOptions(
  isSubmitBtn: boolean,
  isResetBtn: boolean,
  submitLoading: boolean,
  place: PlaceType,
  submitText: string | React.ReactNode,
  resetText: string | React.ReactNode,
  submitBtnProps: BaseButtonProps,
  resetBtnProps: BaseButtonProps,
  that: CommonForm
) {
  return (
    (isSubmitBtn || isResetBtn) && (
      <Row style={{ marginTop: 10 }} type="flex" justify={place}>
        <Col>
          {isResetBtn && (
            <Button onClick={that.handleReset} {...resetBtnProps}>
              {resetText}
            </Button>
          )}
          {isSubmitBtn && (
            <Button
              {...submitBtnProps}
              style={{ marginLeft: 16 }}
              htmlType="submit"
              loading={submitLoading}
            >
              {submitText}
            </Button>
          )}
        </Col>
      </Row>
    )
  );
}

/**
 * ----------------------- *
 * @name 默认操作按钮属性
 */
export function initBtnProps(): CommonFormButtonProps {
  return {
    place: 'end',
    isSubmitBtn: true,
    isResetBtn: true,
    submitLoading: false,
    submitText: '搜索',
    resetText: '重置',
    submitBtnProps: {
      type: 'primary',
    },
    resetBtnProps: {
      type: 'default'
    }
  };
}
