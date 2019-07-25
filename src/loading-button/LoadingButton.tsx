/**
 * @name 通用loading按钮
 * @author MingShined
 */
import React, { useState } from 'react';
import Button from 'antd/lib/button';
import { LoadingButtonProps } from './type';
import { string, any } from 'prop-types';

const LoadingButton: React.FC<LoadingButtonProps> = props => {
  const [loading, setLoading] = useState<boolean>(false);
  const handleClick = async () => {
    setLoading(true);
    await props.onClick();
    setLoading(false);
  };
  const { btnProps } = props;
  return (
    <Button {...btnProps} loading={loading} onClick={handleClick}>
      {props.children}
    </Button>
  );
};

LoadingButton.propTypes = {
  btnProps: any
};

export default LoadingButton;
