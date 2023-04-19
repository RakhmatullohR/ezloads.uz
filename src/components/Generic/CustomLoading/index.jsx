import { Spin } from 'antd';
import React from 'react';
import { CustomLoadingWrapper } from './styles';

export const CustomLoading = ({
  height,
  width,
  color,
  size,
  fontsize,
  position,
  bgcolor,
  minHeight,
}) => {
  return (
    <CustomLoadingWrapper
      color={color}
      bgcolor={bgcolor}
      height={height}
      width={width}
      fontsize={fontsize}
      position={position}
      minHeight={minHeight}
    >
      <Spin size={size || 'large'} />
    </CustomLoadingWrapper>
  );
};
