import TeaserProfile from 'components/AuthorProfile/Teaser'
import { ContainerProps } from 'components/AuthorProfile/types'
import React from 'react'

export type RenderProfileProps = {
  amp: boolean;
  domain: string;
  content: {
    desc?: string;
    enabled: boolean;
    name: string;
    image?: {
      byline?: string;
      caption?: string;
      contentId?: string;
      subtitle?: string;
      height?: string;
      width?: string;
    };
  };
  className?: string;
  containerProps: ContainerProps;
}

const RenderProfile = ({
  amp,
  domain,
  content,
  className,
  containerProps
}: RenderProfileProps) => {
  return (
    <TeaserProfile
      amp={amp}
      className={className}
      containerProps={containerProps}
      domain={domain}
      image={{
        mobile_path: content?.image?.contentId,
        desktop_path: content?.image?.contentId,
        title: content.name
      }}
      date={content.desc}
      title={content.name}
    />
  )
}

export { RenderProfile }