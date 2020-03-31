import React from 'react';

import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { Box } from '../../Box/Box';

import { IconEducationSvg } from './IconEducationSvg';

export type IconEducationProps = UseIconProps;

export const IconEducation = (props: IconEducationProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconEducationSvg} {...iconProps} />;
};