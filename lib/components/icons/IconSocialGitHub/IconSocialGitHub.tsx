import React from 'react';

import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { Box } from '../../Box/Box';

import { IconSocialGitHubSvg } from './IconSocialGitHubSvg';

export type IconSocialGitHubProps = UseIconProps;

export const IconSocialGitHub = (props: IconSocialGitHubProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconSocialGitHubSvg} {...iconProps} />;
};