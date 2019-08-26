/**
 * @name
 * @author MingShined
 */
import React, { Fragment, useState } from 'react';
import { FormDataType } from 'src/common-form/type';
import { Input, InputNumber, Button, Row, Col } from 'antd';
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
const RowNum: React.FC<Props> = props => {
  let value = null;
  const [rowNum, setRowNum] = useState<number | number[] | any>(2);
  return (
    <Fragment>
      <CommonForm
        formItemProps={{ labelCol: { span: 6 }, wrapperCol: { span: 18 } }}
        rowNum={JSON.parse(rowNum)}
        formData={getFormData()}
      />
      <Row
        style={{ marginTop: 16 }}
        type="flex"
        justify="center"
        gutter={24}
        align="middle"
      >
        <Col>
          <Input
            placeholder="输入rowNum"
            style={{ width: 200 }}
            onChange={e => (value = e.target.value)}
          />
        </Col>
        <Col>
          <Button onClick={() => setRowNum(value || rowNum)}>Try it</Button>
        </Col>
      </Row>
      <p style={{ color: 'rg(0. 0, 0 , 0)', textAlign: 'center', marginTop: 8 }}>
        例: 1、[1, 2, 2]、[2, 2, 2]、[2, 2, 1]
      </p>
    </Fragment>
  );
};
export default RowNum;
