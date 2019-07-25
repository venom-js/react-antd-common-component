import moment from 'moment';

/**
 * @name 渲染日期
 * @param date 日期
 * @param format 日期格式
 * @param emptyNode 空值替换节点
 */
export function renderDateItem(
  date: string | number,
  format: string = 'YYYY-MM-DD HH:mm:ss',
  emptyNode: string | React.ReactNode = '--'
): string | React.ReactNode {
  return date ? moment(date).format(format) : emptyNode;
}

/**
 * @name moment工具，获取指定日期
 * @param type 指定类型 年 | 月 | 星期 | 天
 * @param isNext 指定日期类型之后 | 指定日期之前
 * @param value 指定的数量
 */
export function getAppointedDate(
  type: 'day' | 'week' | 'month' | 'year',
  isAfter: boolean,
  value: number,
  formatList: string[] = ['YYYY-MM-DDT00:00:00Z', 'YYYY-MM-DDT23:59:59Z']
) {
  const today = moment();
  const otherDay = isAfter
    ? moment().add(type, value)
    : moment().subtract(type, value);
  const finalDay = isAfter ? [today, otherDay] : [otherDay, today];
  return finalDay.map((item, index) => item.format(formatList[index]));
}

/**
 * @param date 时间值,字符串或者Date
 * @param needTime 是否需要带时分秒,否就采用默认时分秒
 * @param type 1:  起始时间, 2: 结束时间
 */
export function formatDate(
  date: string | number,
  needTime: boolean = true,
  type = null as number
) {
  if (!date) {
    return null;
  }
  if (needTime) {
    return moment(date).format('YYYY-MM-DDTHH:mm:ssZ');
  }
  if (type === 1) {
    return moment(date).format('YYYY-MM-DDT00:00:00Z');
  }
  if (type === 2) {
    return moment(date).format('YYYY-MM-DDT23:59:59Z');
  }
}
