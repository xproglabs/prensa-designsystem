import { get, map } from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'
import { withTheme } from 'styled-components'

import Block from '../../Block'
import { ImageGallery } from '../../ImageGallery/index.tsx'
import Citation from '../Citation/Citation'
import { FacebookEmbed, InstagramEmbed, TwitterEmbed, YouTubeEmbed } from '../Embeds'
import Heading2 from '../Headings/Heading2'
import Heading3 from '../Headings/Heading3'
import Heading4 from '../Headings/Heading4'
import { ListComponent } from '../List/index.ts'
import Paragraph from '../Paragraph/Paragraph'
import SectionTitle from '../SectionTitle'
import Tags from '../Tags/Tags'
import TopImage from '../TopImage/TopImage'
import * as S from './TextBody.styled'
import { parse_content } from './TextBodyParser'

const TextBody = (props) => {
  const {
    ads,
    amp,
    bodyWidth,
    citation,
    content,
    fbappid,
    gallery,
    hasColumnRight,
    heading2,
    heading3,
    heading4,
    hyperlink,
    images,
    orderedList,
    paragraph,
    related_content_intervention,
    tags_section_title,
    tags,
    unorderedList
  } = props

  if (!content) return null

  const adsContent = get(ads, 'content', [])
  const adsRender = get(ads, 'render', null)

  let readmore = []
  let intervention_amount = get(ads, 'interventionAmount', 3)
  let intervention_readmore_inserted = false
  let intervention_status = false
  let paragraph_length = 0
  let ad_counter = 0
  // let intervention_readmore = false;
  const body_items = parse_content(content)

  const render_image = (value) => {
    if (!value) return null
    const image_items = get(images, 'items', [])
    let image_data = undefined
    map(image_items, (item) => {
      const item_value = get(item, 'contentId', '')
      if (item_value.indexOf(value.contentId) > -1) {
        image_data = item
      }
    })
    if (!image_data) return null
    return (
      <Block mb={3} maxWidth={bodyWidth} width="100%">
        <TopImage
          amp={amp}
          caption={{
            fontFamily: 'secondary',
            fontSize: ['14px', '14px'],
            lineHeight: ['130%', '130%'],
            show: true,
            value: image_data.caption
          }}
          featured={false}
          image={true}
          value={image_data.value}
        />
      </Block>
    )
  }

  const render_paragraph = (value) => {
    // intervention_readmore = false;
    intervention_status = false
    if (value.length > 50) {
      paragraph_length++
      if (paragraph_length === intervention_amount) {
        paragraph_length = 0
        if (!intervention_readmore_inserted && readmore.length > 0) {
          // intervention_readmore = true;
          intervention_readmore_inserted = true
        } else {
          ad_counter++
          if (ad_counter > adsContent.length) {
            intervention_status = false
          } else {
            intervention_status = true
          }
        }
      }
    }
    // {intervention_readmore && <ArticleReadMore config={config} item={readmore} cache={readmorecache} />}

    const ad_data_key = ad_counter - 1
    const ad_content = adsContent[ad_data_key]
    const has_ad_intervention = get(ads, 'enabled', false)
    const has_relatedc_intervention = get(related_content_intervention, 'enabled', false)
    const relatedc_component = get(related_content_intervention, 'component', null)

    const render_intervention = () => {
      if (has_relatedc_intervention && relatedc_component && ad_counter === 0) {
        return React.cloneElement(relatedc_component)
      }
      if (has_ad_intervention && intervention_status) {
        return React.cloneElement(adsRender, {
          amp: amp,
          content: ad_content
        })
      }
    }

    return (
      <React.Fragment>
        <Paragraph
          {...paragraph}
          maxWidth={bodyWidth}
          value={value}
        />
        {render_intervention()}
      </React.Fragment>
    )
  }

  const get_hyperlink_color = () => {
    let color = 'primary1'
    if (hyperlink) color = hyperlink
    return get(props, `theme.colors.${color}`)
  }

  const switch_component = (type, value) => {
    switch (type) {
      case 'Cite':
        return (
          <Citation
            maxWidth={bodyWidth}
            value={value}
            {...citation}
          />
        )
      case 'Facebook':
        return (
          <FacebookEmbed
            amp={amp}
            fbappid={fbappid}
            url={value}
          />
        )
      case 'Instagram':
        return (
          <InstagramEmbed
            amp={amp}
            url={value}
          />
        )
      case 'Tweet':
        return (
          <TwitterEmbed
            amp={amp}
            url={value}
          />
        )
      case 'Youtube':
        return (
          <YouTubeEmbed
            amp={amp}
            ampProps={{ height: '384px', width: '768px' }}
            height={amp ? ['max-content', '384px'] : ['384px', '384px']}
            url={value}
          />
        )
      case 'Image':
        return render_image(value)
      case 'Heading2':
        return <Heading2 {...heading2} maxWidth={bodyWidth} value={value} />
      case 'Heading3':
        return <Heading3 {...heading3} maxWidth={bodyWidth} value={value} />
      case 'Heading4':
        return <Heading4 {...heading4} maxWidth={bodyWidth} value={value} />
      case 'Paragraph':
        return render_paragraph(value)
      case 'OrderedList':
        return <ListComponent textProps={orderedList} items={value} maxWidth={bodyWidth} ordered />
      case 'UnorderedList':
        return <ListComponent textProps={unorderedList} items={value} maxWidth={bodyWidth} />
      default:
        return <pre>erro no parse do conteúdo</pre>
    }
  }

  const adSideBar = get(ads, 'sideBar', false)

  const RenderMainColumn = () => {
    const isGalleryVisible = gallery && gallery.items && gallery.items.length > 0
    const isTagSectionVisible = tags_section_title && tags_section_title.enabled
    return (
      <S.Body
        align='column'
        hyperlinkColor={get_hyperlink_color()}
      >
        {map(body_items, ({ type, value }, key) => {
          return (
            <React.Fragment key={key}>
              {switch_component(type, value)}
            </React.Fragment>
          )
        })}
        {isGalleryVisible && (
          <ImageGallery
            {...gallery}
            amp={amp}
          />
        )}
        {isTagSectionVisible && (
          <SectionTitle
            {...tags_section_title}
            maxWidth={bodyWidth}>
              Assuntos
          </SectionTitle>
        )}
        <Tags
          {...tags}
          maxWidth={bodyWidth}
        />
      </S.Body>
    )
  }

  if (hasColumnRight) {
    return (
      <S.Body
        align='row'
        hyperlinkColor={get_hyperlink_color()}
      >
        <S.TextBodyColumn
          width={bodyWidth}
        >
          <RenderMainColumn />
        </S.TextBodyColumn>
        <S.TextBodyColumn
          bgColor='primary'
          width={`calc(100% - ${bodyWidth})`}
        >
          <h1>Coluna2</h1>
          {/* {adSideBar && React.cloneElement(adSideBar)} */}
        </S.TextBodyColumn>
      </S.Body>
    )
  }

  return <RenderMainColumn />
}

TextBody.propTypes = {
  hasColumnRight: PropTypes.bool,
  ads: PropTypes.shape({
    content: PropTypes.array,
    enabled: PropTypes.bool,
    render: PropTypes.node,
    interventionAmount: PropTypes.number
  }),
  AdPlaceholder: PropTypes.func,
  amp: PropTypes.bool,
  bodyWidth: PropTypes.string,
  content: PropTypes.string,
  citation: PropTypes.object,
  gallery: PropTypes.shape({
    captionProps: PropTypes.object,
    items: PropTypes.array
  }),
  heading2: PropTypes.object,
  heading3: PropTypes.object,
  heading4: PropTypes.object,
  hyperlink: PropTypes.string,
  images: PropTypes.object,
  paragraph: PropTypes.object,
  related_content_insertion: PropTypes.shape({
    enabled: PropTypes.bool,
    component: PropTypes.node
  }),
  tags_section_title: PropTypes.object,
  tags: PropTypes.object
}

export default withTheme(TextBody)
