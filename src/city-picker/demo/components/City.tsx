/**
 * @name
 * @author MingShined
 */
import React, { Fragment } from 'react';
import CityPicker from 'src/city-picker';
interface Props {}
const City: React.FC<Props> = props => {
  return (
    <Fragment>
      <CityPicker showCity={false} showArea={false} />
    </Fragment>
  );
};
export default City;
