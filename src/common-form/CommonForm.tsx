/**
 * @name 通用Form表单组件
 * @author MingShined
 */
import React, { Component } from 'react';
import { Form } from 'antd';
import _ from 'lodash';
import styles from './index.less';
import CommonFormProps, { CommonFormButtonProps, FormDataType } from './type';
import { renderFormItem, renderFormItemOptions, initBtnProps } from './utils';

@((Form.create as any)())
export default class CommonForm extends Component<CommonFormProps> {
  static defaultProps = {
    rowNum: 4,
    formProps: {
      layout: 'inline'
    }
  };
  btnProps: CommonFormButtonProps = initBtnProps();
  componentDidMount() {
    const { getForm, form } = this.props;
    if (getForm) {
      getForm(form);
    }
  }
  handleSubmit = e => {
    e.preventDefault();
    e.stopPropagation();
    const { form, onSubmit } = this.props;
    form.validateFields((err, values) => {
      if (onSubmit) {
        onSubmit(err, values);
      }
    });
  };
  handleReset = () => {
    const { form, onReset } = this.props;
    form.resetFields();
    if (onReset) {
      onReset();
    }
  };
  handleChunkFormData = (formData: FormDataType[]) => {
    const rowNum = this.props.rowNum;
    let result = null;
    if (rowNum instanceof Array) {
      const getFromKey = index => {
        let value = 0;
        rowNum.forEach((item2, index2) => {
          if (index2 < index && index) {
            value += item2;
          }
        });
        return value;
      };
      result = rowNum.map((item, index) =>
        formData.slice(getFromKey(index), getFromKey(index) + item)
      );
      return result;
    }
    return _.chunk(formData, rowNum);
  };
  render() {
    const {
      form: { getFieldDecorator },
      formData,
      formItemProps,
      rowProps,
      formProps,
      btnProps,
      rowNum
    } = this.props;
    const {
      place,
      isSubmitBtn,
      isResetBtn,
      submitText,
      resetText,
      submitBtnProps,
      resetBtnProps,
      submitLoading
    } = { ...this.btnProps, ...btnProps };
    const chunkFormData: FormDataType[][] = this.handleChunkFormData(formData);
    return (
      <Form
        onSubmit={this.handleSubmit}
        className={styles.commonForm}
        {...formProps}
      >
        {renderFormItem(
          chunkFormData,
          rowProps,
          formItemProps,
          getFieldDecorator,
          rowNum
        )}
        {renderFormItemOptions(
          isSubmitBtn,
          isResetBtn,
          submitLoading,
          place,
          submitText,
          resetText,
          submitBtnProps,
          resetBtnProps,
          this
        )}
      </Form>
    );
  }
}
