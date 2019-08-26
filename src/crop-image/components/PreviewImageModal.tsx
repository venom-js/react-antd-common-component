import React, { useContext } from 'react';
import { CropImageProps } from '../type';
import { CropImageListState } from './CropImageList';
import { CropImageContext } from './CropImage';
import { Modal, Icon } from 'antd';
import style from '../index.less';

interface Props extends CropImageProps, CropImageListState {
  setState: (state: Partial<CropImageListState>) => void;
}
const PreviewImageModal: React.FC<Props> = props => {
  const { rootState } = useContext(CropImageContext);
  const handlePrevious = () => {
    if (!props.activityKey) {
      return;
    }
    const activityKey = props.activityKey - 1;
    props.setState({
      activityKey
    });
  };
  const handleNext = () => {
    if (props.activityKey === rootState.cropImgList.length - 1) {
      return;
    }
    const activityKey = props.activityKey + 1;
    props.setState({
      activityKey
    });
  };
  return (
    <Modal
      closable={false}
      destroyOnClose
      footer={null}
      maskClosable={true}
      className={style.previewModal}
      {...props.previewModalProps}
      bodyStyle={{
        display: 'flex',
        alignItems: 'center',
        ...(props.previewModalProps && props.previewModalProps.bodyStyle)
      }}
      visible={props.previewVisible}
      onCancel={() => props.setState({ previewVisible: false })}
    >
      <img
        className={style.img}
        src={rootState.cropImgList[props.activityKey]}
        alt=""
      />
      <Icon
        type="left"
        className={`${style.icon} ${style.iconLeft}`}
        onClick={handlePrevious}
        style={{ cursor: !props.activityKey ? 'not-allowed' : 'pointer' }}
      />
      <Icon
        type="right"
        className={`${style.icon} ${style.iconRight}`}
        onClick={handleNext}
        style={{
          cursor:
            props.activityKey === rootState.cropImgList.length - 1
              ? 'not-allowed'
              : 'pointer'
        }}
      />
    </Modal>
  );
};
export default PreviewImageModal;
