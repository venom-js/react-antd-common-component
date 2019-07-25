import React from 'react';
import { Tooltip } from 'antd';
import _ from 'lodash';

/**
 * ----------------------- *
 * @name 转换数组项为对象
 * @param values 数据源
 * @param list 转换列表
 */
interface ListProps {
  originKey: string;
  separateKey: string[];
}
export function separateArrayToKey(values: Object, list: ListProps[]) {
  const cloneValues = _.cloneDeep(values);
  list.forEach(item => {
    const curValue = cloneValues[item.originKey];
    const isExist = curValue && curValue.length > 0;
    item.separateKey.forEach(
      (item2, index) =>
        (cloneValues[item.separateKey[index]] = isExist
          ? curValue[index]
          : null)
    );
    delete cloneValues[item.originKey];
  });
  return cloneValues;
}

/**
 * @name 渲染toolTip列
 * @param value 数据源
 * @param length 字符截取的长度
 * @param separator 数据源为数组时
 */
export function renderToolTipItem(
  value: string | string[] | number[],
  length: number = 5,
  separator: string = ',',
  emptyNode: string | React.ReactNode = '--'
): React.ReactNode {
  const text: string = value instanceof Array ? value.join(separator) : value;
  return value ?  <Tooltip title={text}>{`${text.substr(0, length)}...`}</Tooltip> : emptyNode;
}
