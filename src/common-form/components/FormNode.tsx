/**
 * @name
 * @author MingShined
 */
import React from 'react';
import { FormDataType, FormChildrenProps } from '../type';
import _ from 'lodash';
import { Row, Col } from 'antd';
import FormItem from 'antd/lib/form/FormItem';
import { MediaColProps } from '../utils';
import FormAction from './FormAction';

const FormNode: React.FC<FormChildrenProps> = props => {
  const { rowNum } = props;
  const handleChunkFormData = (formData: FormDataType[]) => {
    let result = null;
    if (Array.isArray(rowNum)) {
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
  const chunkFormData: FormDataType[][] = handleChunkFormData(props.formData);
  const isBeyond = props.formData.length > (Array.isArray(rowNum) ? rowNum[0] - 1 : rowNum - 1);
  const renderFormData =
    props.mode === 'shrink' && props.shrink && isBeyond
      ? [chunkFormData[0].slice(0, chunkFormData[0].length - 1)]
      : chunkFormData;
  return (
    <Row gutter={24} {...props.rowProps}>
      {renderFormData.map((item, index) => (
        <span key={index}>
          {item.map((item2, index2) => (
            <Col
              xl={
                24 /
                (Array.isArray(props.rowNum)
                  ? props.rowNum[index]
                  : props.rowNum)
              }
              {...MediaColProps}
              {...item2.colProps}
              key={`${item2.key}-${index2}`}
            >
              <FormItem
                style={{ marginBottom: 8 }}
                {...props.formItemProps}
                label={item2.label}
              >
                {props.form.getFieldDecorator(item2.key, item2.options)(
                  item2.node
                )}
                {item2.extra}
              </FormItem>
            </Col>
          ))}
        </span>
      ))}
      <Col xl={24 / +props.rowNum} {...MediaColProps}>
        <FormAction isBeyond={isBeyond} {...props} setState={props.setState} />
      </Col>
    </Row>
  );
};
export default FormNode;
