/**
 * @name 裁剪图片组件
 * @author MingShined
 */
import React, { useMemo } from 'react';
import { CropImageProps, CropImageContextProps } from './type';
import CropImageModal from './CropImageModal';
import CropImageList from './CropImageList';
import { Row, Col } from 'antd';
import { useStateReducer } from 'src/common-utils';
import ImportFile from 'src/import-file';

const getInitState = () => ({
  originUrl: null,
  cropImgList: [],
  cropVisible: false
});
export type CropImageState = ReturnType<typeof getInitState>;

export const CropImageContext = React.createContext<CropImageContextProps>(
  null
);

const CropImage: React.FC<CropImageProps> = props => {
  const [state, setState] = useStateReducer<CropImageState>(getInitState());
  const disabled = state.cropImgList.length >= props.maxLength;
  const UploadProps =
    props.importFileProps && props.importFileProps.UploadProps;
  useMemo(() => setState({ cropImgList: props.value || [] }), [props.value]);
  return (
    <CropImageContext.Provider
      value={{ setRootState: setState, rootState: state }}
    >
      <Row type="flex">
        <Col style={{ cursor: disabled ? 'not-allowed' : 'pointer' }}>
          <ImportFile
            accept={['jpg', 'png', 'jpeg', 'JPG', 'PNG']}
            {...props.importFileProps}
            UploadProps={{ ...UploadProps, disabled }}
            onImport={originUrl => setState({ originUrl, cropVisible: true })}
            type="Image"
          >
            {props.children}
          </ImportFile>
        </Col>
        <Col>
          <CropImageList {...props} />
        </Col>
      </Row>
      <CropImageModal {...props} />
    </CropImageContext.Provider>
  );
};
export default CropImage;
