/**
 * @name
 * @author MingShined
 */
import React, { Fragment } from 'react';
import CityPicker from 'src/city-picker';
interface Props {}
const Basic: React.FC<Props> = props => {
  return (
    <Fragment>
      <CityPicker />
    </Fragment>
  );
};
export default Basic;
