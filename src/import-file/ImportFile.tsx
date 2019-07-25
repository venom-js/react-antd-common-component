/**
 * @name 文件上传组件
 * @author MingShined
 */
import React from 'react';
import { Upload } from 'antd';
import { UploadFile, UploadProps } from 'antd/lib/upload/interface';
import { checkFile } from './utils';
import { ImportFileProps } from './type';

const ImportFile: React.FC<ImportFileProps> = props => {
  const defaultProps: Partial<ImportFileProps> = {
    type: 'FormData'
  };
  const defaultUploadProps: UploadProps = {
    showUploadList: false
  };
  const uploadProps = { ...defaultUploadProps, ...props.UploadProps };
  const handleUploadFile = (
    file: UploadFile & File,
    FileList: UploadFile[]
  ): boolean => {
    const { accept, size, width, height, length, type } = {
      ...defaultProps,
      ...props
    };
    checkFile({ file, accept, size, width, height, length })
      .then(() => {
        if (type === 'FormData') {
          const form = new FormData();
          form.append(`${props.fileName ? props.fileName : 'file'}`, file);
          props.onImport(form);
          return;
        }
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          props.onImport(reader.result);
        };
      })
      .catch(err => {
        throw err;
      });
    return false;
  };
  return (
    <Upload {...uploadProps} beforeUpload={handleUploadFile}>
      {props.children}
    </Upload>
  );
};

export default ImportFile;
