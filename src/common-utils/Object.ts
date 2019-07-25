/**
 * @name 渲染枚举
 * @param key
 * @param enumList 枚举或数组列表
 * @param emptyNode 空值替换节点
 * @param arrayKey 数据源为数组时，数组源key
 */
export function renderEnumItem(
  key: string | number,
  enumList: any[] | any,
  keys: string[] = [],
  emptyNode: string | React.ReactNode = '--',
): string | React.ReactNode {
  const isArray = enumList instanceof Array;
  if (isArray) {
    const findItem = enumList.find(item => item[keys[1]] === key);
    return key !== undefined ? findItem && findItem[keys[0]] : emptyNode;
  }
  return key === 0 || key ? enumList[key] : emptyNode;
}

/**
 * @name 转化枚举获取keys
 * @param enumValue 要转化的枚举对象
 */
export function transformEnumKeys(enumValue) {
  const keys = Object.keys(enumValue);
  const result = keys.slice(0, keys.length / 2);
  return result;
}
