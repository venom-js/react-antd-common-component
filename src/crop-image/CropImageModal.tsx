import React, { useRef, useContext } from 'react';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';
import { Modal } from 'antd';
import { CropImageContext } from './CropImage';
import { CropImageProps } from './type';

interface Props extends CropImageProps {}
const CropImageModal: React.FC<Props> = props => {
  const cropperRef = useRef<any>(null);
  const { setRootState, rootState } = useContext(CropImageContext);
  const handleCrop = () => {
    if (!cropperRef) {
      return;
    }
    const cropUrl = cropperRef.current.cropper.getCroppedCanvas().toDataURL();
    const cropImgList = [...rootState.cropImgList, cropUrl];
    setRootState({
      cropImgList,
      cropVisible: false
    });
    if (props.onChange) {
      props.onChange(cropImgList);
    }
  };
  return (
    <Modal
      width={800}
      closable={false}
      destroyOnClose
      {...props.cropModalProps}
      bodyStyle={{
        maxHeight: 600,
        overflow: 'auto',
        ...(props.cropModalProps && props.cropModalProps.bodyStyle)
      }}
      visible={rootState.cropVisible}
      onOk={handleCrop}
      onCancel={() => setRootState({ cropVisible: false })}
    >
      <div style={{ marginTop: 16 }}>
        <Cropper
          style={{ width: '100%', height: '100%', background: '#fff' }}
          background={false}
          {...props.cropPorps}
          src={rootState.originUrl}
          ref={cropperRef}
        />
      </div>
    </Modal>
  );
};
export default CropImageModal;
