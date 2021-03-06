/**
 * @name
 * @author MingShined
 */
import React from 'react';
import { FormDataType } from 'src/common-form/type';
import { Input, InputNumber } from 'antd';
import CommonForm from '../../components/CommonForm';
import TextArea from 'antd/lib/input/TextArea';

const getFormData = (): FormDataType[] => {
  return [
    { key: 'name', label: '姓名', node: <Input /> },
    { key: 'age', label: '年龄', node: <InputNumber min={0} /> },
    { key: 'email', label: '邮箱', node: <Input /> },
    { key: 'phone', label: '手机号', node: <InputNumber /> },
    { key: 'address', label: '地址', node: <TextArea /> }
  ];
};
interface Props {}
const Shrink: React.FC<Props> = props => {
  return (
    <CommonForm
      formItemProps={{ labelCol: { span: 6 }, wrapperCol: { span: 18 } }}
      mode="shrink"
      formData={getFormData()}
    />
  );
};
export default Shrink;
