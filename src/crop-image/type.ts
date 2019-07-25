import { ImportFileProps } from '../import-file/type';
import { ModalProps } from 'antd/lib/modal';
import { IconProps } from 'antd/lib/icon';
import { CropImageState } from './CropImage';

export interface CropImageProps {
  importFileProps?: Partial<ImportFileProps>;
  cropOptions?: CropOptionsProps;
  cropPorps?: CropPorps;
  cropModalProps?: ModalProps;
  previewModalProps?: ModalProps;
  maxLength?: number;
  imgBoxStyle?: React.CSSProperties;
  preViewIconProps?: IconProps;
  nextIconProps?: IconProps;
  onChange?: (cropImgList: ArrayBuffer[]) => void;
  value?: ArrayBuffer[] | string[];
}

export interface CropOptionsProps {
  width?: number;
  height?: number;
  minWidth?: number;
  minHeight?: number;
  maxWidth?: number;
  maxHeight?: number;
  fillColor?: 'transparent';
  imageSmoothingEnabled?: boolean;
  imageSmoothingQuality?: 'low' | 'medium' | 'high';
}

export interface CropPorps {
  viewMode?: number;
  dragMode?: 'crop' | 'move' | 'none';
  initialAspectRatio?: number;
  aspectRatio?: number;
  data?: any;
  preview?: React.ReactNode | string | React.ReactNode[];
  responsive?: boolean;
  restore?: boolean;
  checkCrossOrigin?: boolean;
  checkOrientation?: boolean;
  modal?: boolean;
  guides?: boolean;
  center?: boolean;
  highlight?: boolean;
  background?: boolean;
  autoCrop?: boolean;
  autoCropArea?: boolean;
  movable?: boolean;
  rotatable?: boolean;
  scalable?: boolean;
  zoomable?: boolean;
  zoomOnTouch?: boolean;
  zoomOnWheel?: boolean;
  wheelZoomRatio?: number;
  cropBoxMovable?: boolean;
  cropBoxResizable?: boolean;
  toggleDragModeOnDblclick?: boolean;
  minContainerWidth?: number;
  minContainerHeight?: number;
  minCanvasWidth?: number;
  minCanvasHeight?: number;
  minCropBoxWidth?: number;
  minCropBoxHeight?: number;
  ready?: () => any;
  cropstart?: () => any;
  cropmove?: () => any;
  cropend?: () => any;
  crop?: () => any;
  zoom?: () => any;
  src?: string | ArrayBuffer | null;
}

export interface CropImageContextProps {
  rootState?: CropImageState;
  setRootState?: (rootState: Partial<CropImageState>) => void;
}
