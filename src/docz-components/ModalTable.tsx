/**
 * @name
 * @author MingShined
 */
import React from 'react';
import { CommonModal } from '..';
import PropsTable from './PropsTable';
interface ModalTableProps {
  dataSource: any[];
  btnText: string | React.ReactNode;
  title?: string | React.ReactNode;
}
const ModalTable: React.FC<ModalTableProps> = props => {
  return (
    <CommonModal
      modalProps={{
        footer: null,
        width: 1100,
        title: props.title,
        bodyStyle: {
          maxHeight: '550px',
          overflow: 'auto'
        }
      }}
      btnText={props.btnText}
      btnProps={{ type: 'link' }}
    >
      <PropsTable dataSource={props.dataSource} />
    </CommonModal>
  );
};
export default ModalTable;
