import { PropsTableType } from 'src/docz-components/type';
import React from 'react';
import ModalTable from 'src/docz-components/ModalTable';
import Link from 'src/docz-components/Link';

const FormDataTypeList: PropsTableType[] = [
  {
    key: 'key',
    desc: '键值',
    type: 'string',
    required: 'true'
  },
  {
    key: 'options',
    desc: '参考Antd Design form GetFieldDecoratorOptions',
    type: (
      <Link
        href="https://ant.design/components/form-cn/#Form"
        text="GetFieldDecoratorOptions"
      />
    )
  },
  {
    key: 'node',
    desc: '表单node节点',
    type: 'React.ReactNode',
    required: 'true'
  },
  {
    key: 'label',
    desc: '表单label',
    type: 'string | React.ReactNode'
  },
  {
    key: 'extra',
    desc: '表单extra拓展',
    type: 'string | React.ReactNode'
  },
  {
    key: 'colProps',
    desc: 'antd ColProps',
    type: 'ColProps'
  },
  {
    key: 'formItemProps',
    desc: 'antd FormItemProps',
    type: (
      <Link
        href="https://ant.design/components/form-cn/#Form"
        text="FormItemProps"
      />
    )
  }
];

const CommonFormButtonPropsList: PropsTableType[] = [
  {
    key: 'place',
    desc: '按钮位置',
    type: '"start" | "end" | "center" | "space-around" | "space-between"',
    defaultValue: 'end'
  },
  {
    key: 'isSubmitBtn',
    desc: '是否显示提交按钮',
    type: 'boolean',
    defaultValue: 'true'
  },
  {
    key: 'isResetBtn',
    desc: '是否显示重置按钮',
    type: 'boolean',
    defaultValue: 'true'
  },
  {
    key: 'submitText',
    desc: '提交按钮文案',
    type: 'string | React.ReactNode',
    defaultValue: '搜索'
  },
  {
    key: 'resetText',
    desc: '重置按钮文案',
    type: 'string | React.ReactNode',
    defaultValue: '重置'
  },
  {
    key: 'submitBtnProps',
    desc: '提交按钮Props',
    type: (
      <Link
        href="https://ant.design/components/button-cn/#API"
        text="ButtonProps"
      />
    ),
    defaultValue: '{ type: "primary" }'
  },
  {
    key: 'resetBtnProps',
    desc: '重置按钮Props',
    type: (
      <Link
        href="https://ant.design/components/button-cn/#API"
        text="ButtonProps"
      />
    ),
    defaultValue: '{ type: "default" }'
  },
  {
    key: 'shrinkNodes',
    desc: '展开 / 收缩按钮',
    type: 'React.ReactNode[]'
  }
];

export const PropsList: PropsTableType[] = [
  {
    key: 'formData',
    desc: '表单数据源',
    type: (
      <ModalTable
        title="FormDataType"
        dataSource={FormDataTypeList}
        btnText="FormDataType []"
      />
    ),
    required: 'true'
  },
  {
    key: 'rowNum',
    desc: '每行渲染节点个数',
    type: 'number | number[]',
    defaultValue: 4
  },
  {
    key: 'mode',
    desc: '每行渲染节点个数',
    type: '’shrink‘ | ’default‘',
    defaultValue: 'default'
  },
  {
    key: 'formProps',
    desc: ' 参考Antd Design formProps',
    type: (
      <Link
        href="https://ant.design/components/form-cn/#Form"
        text="FormProps"
      />
    ),
    defaultValue: '{ layout: "horizontal" }'
  },
  {
    key: 'formItemProps',
    desc: '参考Antd Design formItemProps',
    type: (
      <Link
        href="https://ant.design/components/form-cn/#Form"
        text="FormItemProps"
      />
    )
  },
  {
    key: 'rowProps',
    desc: '参考Antd Design Grid布局',
    type: (
      <Link href="https://ant.design/components/grid-cn/#Row" text="rowProps" />
    )
  },
  {
    key: 'btnProps',
    desc: '表单按钮设置',
    type: (
      <ModalTable
        dataSource={CommonFormButtonPropsList}
        btnText="CommonFormButtonProps"
        title="CommonFormButtonProps"
      />
    )
  },
  {
    key: 'onSubmit',
    desc: '数据验证成功后回调事件',
    type: '(err: any, value: any) => any'
  },
  {
    key: 'onReset',
    desc: '数据重置成功后回调事件',
    type: 'onReset?: () => any'
  },
  {
    key: 'getForm',
    desc: '获取当前表单form实例化对象',
    type: '(form: WrappedFormUtils) => any'
  }
];
