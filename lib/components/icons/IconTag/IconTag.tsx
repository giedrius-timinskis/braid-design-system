import React from 'react';

import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { Box } from '../../Box/Box';

import { IconTagSvg } from './IconTagSvg';

export type IconTagProps = UseIconProps;

export const IconTag = (props: IconTagProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconTagSvg} {...iconProps} />;
};