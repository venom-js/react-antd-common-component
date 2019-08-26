/**
 * @name
 * @author MingShined
 */
import React, { Fragment } from 'react';
import { FormDataType } from 'src/common-form/type';
import { Input, InputNumber } from 'antd';
import CommonForm from 'src/common-form/components/CommonForm';

const getFormData = (): FormDataType[] => {
  return [
    {
      key: 'name',
      label: '姓名',
      node: <Input />
    },
    { key: 'age', label: '年龄', node: <InputNumber min={0} /> },
    { key: 'email', label: '邮箱', node: <Input /> }
  ];
};

interface Props {}

const Basic: React.FC<Props> = props => {
  return (
    <Fragment>
      <CommonForm
        formItemProps={{ labelCol: { span: 6 }, wrapperCol: { span: 18 } }}
        formData={getFormData()}
      />
    </Fragment>
  );
};
export default Basic;
