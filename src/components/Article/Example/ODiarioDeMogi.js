import { map } from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'
import { ThemeProvider } from 'styled-components'

import { data } from '../../../mockup/template'
import { theme as MogiTheme } from '../../../styles/demo/odiariodemogi'
import Block from '../../Block'
import datePtBrFull from '../../Util/datePtBrFull'
import { pathToImage } from '../../Util/pathToImage'
import Article from '../Article'
import mockAds from '../TextBody/mockAds.json'
import article from './ODiarioDeMogi.json'

const dummyImage = (contentId) => `<p><a class="p-smartembed" data-attr-f="3x2" data-attr-q="0.3" data-attr-w="400" data-onecms-id="policy:${contentId}" data-onecms-type="image" href="javascript:window.parent.actionEventData({$contentId:'${contentId}', $action:'view', $target:'work'})" polopoly:contentid="policy:${contentId}"><img src="/image/policy:${contentId}/gui_3224.jpg?f=3x2&amp;w=400&amp;q=0.3" /></a></p>\r\n\r\n`
const dummyTweet = () => '<p><a id="https://twitter.com/UOL/status/1399821735231426566" name="https://twitter.com/UOL/status/1399821735231426566">https://twitter.com/UOL/status/1399821735231426566</a></p>'
const dummyYoutube = () => '<p><a id="https://www.youtube.com/watch?v=uj_K_S1Iqcg" name="https://www.youtube.com/watch?v=uj_K_S1Iqcg">https://www.youtube.com/watch?v=uj_K_S1Iqcg</a></p>'
const dummyYoutubeDesk = () => '<div data-oembed-url="https://youtu.be/3vYeQLJ2as4"><div style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 56.25%;"><iframe allow="encrypted-media; accelerometer; clipboard-write; gyroscope; picture-in-picture" allowfullscreen="" scrolling="no" src="https://www.youtube.com/embed/3vYeQLJ2as4?rel=0" style="border: 0; top: 0; left: 0; width: 100%; height: 100%; position: absolute;" tabindex="-1"></iframe></div></div>'

const ArticleOM = () => {
  const domain = 'http://localhost:8080'
  const {
    author,
    contentId,
    content,
    gallery,
    image: images,
    keymetas,
    keywords,
    metadata,
    multimidia,
    options,
    path,
    priority,
    template,
    texts,
    timestamps,
    title,
    subject,
    subtitle,
    subtitle_image,
    video_url
  } = article
  // configura o topimage
  const isAmp = false // useAmp();
  const isFeatured = false // config.article_is_featured;

  const config = {
    header_color: 'primary1'
  }

  const topimage = {
    featured: isFeatured,
    image: true,
    caption: {
      fontFamily: 'secondary',
      fontSize: ['14px', '14px'],
      lineHeight: ['130%', '130%'],
      px: ['3', '4'],
      py: ['3', '4'],
      show: true,
      value: ''
    },
    mb: isFeatured ? ['0px', '0px'] : ['5', '8'],
    value: ''
  }

  // verifica se tem imagem
  if (images && images.length > 0) {
    const image_one = images[0]
    const image_id = image_one.contentId
    topimage.value = pathToImage('2x1', domain, image_id, 1200)
    topimage.caption.value = `${subtitle_image || image_one.caption} ${image_one.byline && `(${image_one.byline})`}`
  } else {
    topimage.image = false
  }
  let images_parsed = []

  map(images, (img) => {
    let img_path = pathToImage('2x1', domain, img.contentId, 1200)
    let img_caption = `${img.caption} ${img.byline && `(${img.byline})`}`
    images_parsed.push({
      caption: img_caption,
      contentId: img.contentId,
      value: img_path
    })
  })

  let gallery_parsed = []
  map(gallery, (img) => {
    let img_path = pathToImage('2x1', domain, img.contentId, 1200)
    let img_caption = `${img.caption} ${img.byline && `(${img.byline})`}`
    gallery_parsed.push({
      caption: img_caption,
      contentId: img.contentId,
      value: img_path
    })
  })

  const time_modified = timestamps ? datePtBrFull(timestamps.time_modified) : ''
  const time_published = timestamps ? datePtBrFull(timestamps.time_published) : ''

  let content_body = content
  map(multimidia, (midia) => {
    if(midia.template == 'br.com.atex.plugins.youtube.it') {
      content_body = `${content_body}\n\n<p><a id="${midia.link}" name="${midia.link}">${midia.link}</a></p>`
    }
  })

  map(texts, (text) => {
    let text_images = ''
    map(text.image, (im) => {
      let img_path = pathToImage('2x1', domain, im.contentId, 1200)
      text_images = `${text_images}<p><a class="p-smartembed" data-attr-f="2x1" data-attr-q="1" data-attr-w="1000" data-onecms-id="policy:${im.contentId}" data-onecms-type="image" href="javascript:window.parent.actionEventData({$contentId:'${im.contentId}', $action:'view', $target:'work'})" polopoly:contentid="policy:${im.contentId}"><img src="/image/policy:${contentId}/image.jpg?f=2x1&amp;w=1000&amp;q=1" /></a></p>\r\n\r\n`
      images_parsed.push({
        caption: im.caption,
        contentId: im.contentId,
        value: img_path
      })
    })
    content_body = `
      ${content_body}\n\n
      ${text.title && (`<h3>${text.title}</h3>\n\n`)}
      ${text_images}\n\n
      ${text.content}`
  })

  const byline = {
    author: {
      color: 'neutral4',
      fontFamily: 'primary',
      fontSize: ['14px', '14px'],
      lineHeight: ['16px', '16px'],
      value: author
    },
    customContent: `
      border-left: 8px solid ${MogiTheme.colors['primary1']};
      padding-left: 8px;
    `,
    datetime: {
      color: 'neutral4',
      fontSize: ['12px', '12px'],
      lineHeight: ['14px', '14px'],
      time_modified,
      time_published
    }
  }

  const intertitle = {
    fontSize: ['38px', '30px'],
    fontWeight: 700,
    mb: ['3', '5'],
    value: 'Título'
  }
  const props_subject = {
    bgColor: config.header_color,
    color: 'white',
    mb: ['3', '3'],
    transform: 'uppercase',
    value: subject
  }
  const props_subtitle = {
    color: 'neutral3',
    mb: ['5', '5'],
    value: subtitle
  }
  const props_title = {
    color: 'neutral2',
    fontSize: ['38px', '62px'],
    lineHeight: ['42px', '64px'],
    mb: ['2', '2'],
    value: title
  }
  const props_paragraph = {
    fontFamily: 'secondary',
    fontSize: ['20px', '20px'],
    lineHeight: ['190%', '190%'],
  }
  const related_content = {
    bottom: {
      enabled: true,
      column_items: 1,
      column_padding: 0,
      layout: MogiTheme.teasers.image_large_left,
      slot: data.items_left
    }
  }

  const RenderArticle = ({ paywallNotSubscriber }) => 
    <Article
      ads={{
        body: {
          content: mockAds
        }
      }}
      amp={isAmp}
      byline={byline}
      featured={{ enabled: isFeatured }}
      gallery={gallery_parsed}
      images={{ items: images_parsed }}
      intertitle={intertitle}
      subject={props_subject}
      subtitle={props_subtitle}
      tags={{ items: metadata }}
      textbody={paywallNotSubscriber ? '' : content_body}
      title={props_title}
      paragraph={props_paragraph}
      topimage={topimage}
      relatedContent={related_content}
    />

  if(priority == '1') {
    return (
      <ThemeProvider theme={MogiTheme}>
        <Block alignx='center' width='100%'>
          <div amp-access="NOT subscriber" amp-access-hide="true">
            <RenderArticle paywallNotSubscriber={true} />
            {/* <PayBlock callback={path} /> */}
          </div>
          <div amp-access="loggedIn AND subscriber" amp-access-hide="true">
            <RenderArticle />
          </div>
        </Block>
      </ThemeProvider>
    )
  }
  return (
    <ThemeProvider theme={MogiTheme}>
      <Block alignx='center' width='100%'>
        <RenderArticle />
      </Block>
    </ThemeProvider>
  )
}

export default ArticleOM