import { UploadProps } from 'antd/lib/upload';

export interface CheckFileOption {
  length?: number;
  width?: number;
  height?: number;
  file?: File;
  accept?: any;
  size?: number;
}

export interface ImportFileProps {
  onImport: (file: string | ArrayBuffer | null | FormData) => void;
  accept: string[];
  style?: React.CSSProperties;
  UploadProps?: UploadProps;
  size?: number;
  width?: number;
  height?: number;
  length?: number;
  fileName?: string;
  type?: 'FormData' | 'Image';
}
