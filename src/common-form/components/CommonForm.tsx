/**
 * @name 通用Form表单组件
 * @author MingShined
 */
import React, { useEffect } from 'react';
import { Form } from 'antd';
import CommonFormProps, { CommonFormState } from '../type';
import styles from '../index.less';
import FormNode from './FormNode';
import { useStateReducer } from 'src/common-utils';

const CommonForm: React.FC<CommonFormProps> = props => {
  const [state, setState] = useStateReducer<CommonFormState>({
    loading: false,
    shrink: true
  });
  useEffect(() => {
    const { getForm, form } = props;
    if (getForm) {
      getForm(form);
    }
  }, []);
  const handleSubmit = e => {
    e.preventDefault();
    e.stopPropagation();
    const { form, onSubmit } = props;
    form.validateFields(async (err, values) => {
      if (onSubmit) {
        setState({ loading: true });
        await onSubmit(err, values);
        setTimeout(() => setState({ loading: false }), 500);
      }
    });
  };
  return (
    <div className={styles.commonForm}>
      <Form {...props.formProps} onSubmit={handleSubmit}>
        <FormNode rowNum={4} {...props} {...state} setState={setState} />
      </Form>
    </div>
  );
};

export default Form.create<CommonFormProps>()(CommonForm);
