/**
 * @name 通用loading按钮
 * @author MingShined
 */
import React, { useState } from 'react';
import Button from 'antd/lib/button';
import { LoadingButtonProps } from './type';

const LoadingButton: React.FC<LoadingButtonProps> = props => {
  const [loading, setLoading] = useState<boolean>(false);
  const handleClick = async () => {
    setLoading(true);
    await props.onClick();
    setTimeout(() => setLoading(false), 1000);
  };
  const { btnProps } = props;
  return (
    <Button {...btnProps} loading={loading} onClick={handleClick}>
      {props.children}
    </Button>
  );
};

export default LoadingButton;
