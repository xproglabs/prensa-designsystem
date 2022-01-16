import TeaserProfile from 'components/AuthorProfile/Profile'
import { ContainerProps } from 'components/AuthorProfile/types'
import React from 'react'

export type RenderProfileProps = {
  amp: boolean;
  domain: string;
  content: {
    desc?: string;
    enabled: boolean;
    name: string;
    path: string;
    image?: {
      byline?: string;
      caption?: string;
      contentId?: string;
      subtitle?: string;
      height?: [string, string];
      width?: [string, string];
    };
  };
  className?: string;
  containerProps: ContainerProps;
  subtitleContainer?: any;
}

const RenderProfile = ({
  amp,
  domain,
  content,
  className,
  containerProps,
  subtitleContainer
}: RenderProfileProps) => {
  return (
    <TeaserProfile
      amp={amp}
      className={className}
      containerProps={containerProps}
      domain={domain}
      href={content?.path}
      image={{
        mobile_path: content?.image?.contentId,
        desktop_path: content?.image?.contentId,
        height: content?.image?.height,
        width: content?.image?.width,
        title: content.name
      }}
      subtitleContainer={subtitleContainer}
      title={content.name}
      titleProps={{
        fontSize: '14px'
      }}
    />
  )
}

export { RenderProfile }