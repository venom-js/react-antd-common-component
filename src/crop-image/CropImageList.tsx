import React, { useContext, Fragment } from 'react';
import { Row, Col, Icon } from 'antd';
import style from './index.less';
import PreviewImageModal from './PreviewImageModal';
import { CropImageProps } from './type';
import { useStateReducer } from 'src/common-utils';
import { CropImageContext } from './CropImage';

const getInitState = () => ({
  previewVisible: false,
  activityKey: null as number
});
export type CropImageListState = ReturnType<typeof getInitState>;

interface Props extends CropImageProps {}
const CropImageList: React.FC<Props> = props => {
  const { rootState, setRootState } = useContext(CropImageContext);
  const [state, setState] = useStateReducer<CropImageListState>(getInitState());
  const handleDelete = (index: number) => {
    const cropImgList = [...rootState.cropImgList];
    cropImgList.splice(index, 1);
    setRootState({
      cropImgList
    });
    if (props.onChange) {
      props.onChange(cropImgList);
    }
  };
  const handlePreview = (index: number) => {
    setState({ activityKey: index, previewVisible: true });
  };
  return (
    <Fragment>
      <Row type="flex">
        {rootState.cropImgList.map((item, index) => (
          <Col key={index} style={{ margin: '0 0 0 24px' }}>
            <div className={style.imgBox} style={props.imgBoxStyle}>
              <img src={item} alt="" />
              <div className={style.mask}>
                <Icon
                  type="eye"
                  className={style.eyeIcon}
                  {...props.preViewIconProps}
                  onClick={() => handlePreview(index)}
                />
                <Icon
                  type="delete"
                  className={style.deleteIcon}
                  {...props.nextIconProps}
                  onClick={() => handleDelete(index)}
                />
              </div>
            </div>
          </Col>
        ))}
      </Row>
      <PreviewImageModal
        {...props}
        previewVisible={state.previewVisible}
        activityKey={state.activityKey}
        setState={setState}
      />
    </Fragment>
  );
};
export default CropImageList;
