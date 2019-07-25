import { notification } from 'antd';
import { CheckFileOption } from './type';

export function checkFile({
  length,
  width,
  height,
  file,
  accept,
  size
}: CheckFileOption) {
  if (!file) {
    notification.error({
      message: '通知',
      description: '文件不存在!'
    });
    return new Promise((resolve, reject) => {
      reject();
    });
  }
  if (size && file.size > size * size) {
    notification.warning({
      message: '通知',
      description: '文件超出大小!'
    });
    return new Promise((resolve, reject) => {
      reject();
    });
  }
  /** 验证文件类型 */
  if (
    accept &&
    !(accept instanceof Array) &&
    file.type.indexOf(accept) === -1
  ) {
    notification.error({
      message: '通知',
      description: `文件类型错误，请选择${accept}格式的文件!`
    });
    return new Promise((resolve, reject) => {
      reject();
    });
    // tslint:disable-next-line:no-else-after-return
  } else if (accept && accept instanceof Array) {
    const str = file.name;
    const i = str.lastIndexOf('.');
    const len = str.length;
    const hz = str.substring(i + 1, len);
    const flag = false;
    if (accept.filter(type => type === hz).length === 0) {
      notification.error({
        message: '通知',
        description: `文件类型错误，请选择${accept.join('/')}格式的文件!`
      });
      return new Promise((resolve, reject) => {
        reject();
      });
    }
  }
  const _w = width;
  const _h = height;
  /** 上传图片 */
  if (file.type.indexOf('image') !== -1) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        /** 验证宽度 */
        if (_w && img.width !== _w && !_h) {
          notification.error({
            message: '通知',
            description: `图片宽度为 ${_w} 高度不做限制`
          });
          reject();
        } else if (_h && img.height !== _h && !_w) {
          /** 验证高度 */
          notification.error({
            message: '通知',
            description: `图片高度为 ${_h} 宽度不做限制`
          });
          reject();
        } else if (_w && img.width !== _w && _h && img.height !== _h) {
          notification.error({
            message: '通知',
            description: `图片尺寸为 ${_w} * ${_h}`
          });
          reject();
        } else {
          resolve({
            src: img.src,
            width: img.width,
            height: img.height
          });
        }
      };
      img.onerror = () => {
        reject();
      };
      img.src = window.URL.createObjectURL(file);
    });
  }
  return new Promise((resolve, reject) => {
    resolve();
  });
}
