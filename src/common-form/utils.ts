import { CommonFormButtonProps } from './type';
import { ColProps } from 'antd/lib/col';

/**
 * ----------------------- *
 * @name 默认操作按钮属性
 */
export function initBtnProps(): CommonFormButtonProps {
  return {
    place: 'center',
    isSubmitBtn: true,
    isResetBtn: true,
    submitText: '搜索',
    resetText: '重置',
    submitBtnProps: {
      type: 'primary'
    },
    resetBtnProps: {
      type: 'default'
    }
  };
}

/**
 * ----------------------- *
 * @name 响应式props
 */
export const MediaColProps: ColProps = {
  md: 24,
  xs: 24,
  sm: 24
};
