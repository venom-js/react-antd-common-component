import { PropsTableType } from 'src/docz-components/type';
import React, { Fragment } from 'react';
import Link from 'src/docz-components/Link';

export const PropsList: PropsTableType[] = [
  {
    key: 'ButtonProps',
    desc: '参考Antd Design Button',
    type: (
      <Link
        href="https://ant.design/components/button-cn/#API"
        text="ButtonProps"
      />
    )
  },
  {
    key: 'onClick',
    desc: '点击事件',
    type: '() => void',
    required: 'true'
  }
];
