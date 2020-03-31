import React from 'react';

import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { Box } from '../../Box/Box';

import { IconResumeSvg } from './IconResumeSvg';

export type IconResumeProps = UseIconProps;

export const IconResume = (props: IconResumeProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconResumeSvg} {...iconProps} />;
};