import address from './address';

/**
 * @name 城市列表
 * @param data 城市列表数据源
 */
export const transform = (data: any, count: number, total: number) => {
  let value = count;
  if (!data || data.length === 0) {
    return null;
  }
  value += 1;
  if (value > total) {
    return null;
  }
  return data.map((item) => ({
    ...item,
    children: transform(item.children, value, total)
  }));
};
const transformAddresslist = (data) => {
  return (
    data &&
    data.map((item) => ({
      ...item,
      children: transformAddresslist(item.children)
    }))
  );
};

export const addressList = transformAddresslist(address);
