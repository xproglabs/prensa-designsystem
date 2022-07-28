import { html2json } from 'html2json'
import { find, filter, map } from 'lodash'

import { BlockquoteHTMLParser } from './BlockquoteHTMLParser'
import { EmHTMLParser } from './EmHTMLParser'
import { parseListChildren } from './ListHTMLParser'
import { StrongHTMLParser } from './StrongHTMLParser'

const parse_content = (content) => {

  let bodyItems = []
  let tagItems = []

  const renderChildValue = (child) => child && child.length > 0 && child[0].text ? child[0].text : ''

  const switchNode = (obj) => {

    const { attr, child, node, tag, text } = obj

    if (tag === 'p') {
      tagItems.push({ 'type': 'p', 'value': '' })
    }
    if (tag === 'br') {
      tagItems.push({ 'type': 'br', 'value': '' })
    }
    if (tag === 'strong') {
      tagItems.push({ 'type': 'text', 'value': StrongHTMLParser(child) })
      return true
    }
    if (tag === 'u') {
      tagItems.push({ 'type': 'text', 'value': `<u>${renderChildValue(child)}</u>` })
      return true
    }
    if (tag === 'em') {
      tagItems.push({ 'type': 'text', 'value': `${EmHTMLParser(child)}` })
      return true
    }
    if (tag === 'ul') {
      tagItems.push({ 'type': 'ul', 'value': parseListChildren(child) })
      return true
    }
    if (tag === 'ol') {
      tagItems.push({ 'type': 'ol', 'value': parseListChildren(child) })
      return true
    }
    if (tag === 'cite') {
      tagItems.push({ 'type': 'cite', 'value': `${BlockquoteHTMLParser(child)}` })
      return true
    }
    if (tag === 'blockquote') {
      tagItems.push({ 'type': 'blockquote', 'value': `${BlockquoteHTMLParser(child)}` })
      return true
    }
    if (tag === 'h2') {
      tagItems.push({ 'type': 'h2', 'value': `${renderChildValue(child)}` })
      return true
    }
    if (tag === 'h3') {
      tagItems.push({ 'type': 'h3', 'value': `${renderChildValue(child)}` })
      return true
    }
    if (tag === 'h4') {
      tagItems.push({ 'type': 'h4', 'value': `${renderChildValue(child)}` })
      return true
    }
    if (node === 'text') {
      if (text && text !== '') {
        tagItems.push({ 'type': 'text', 'value': text })
      }
    }

    // render image
    if (tag === 'a' && attr.class && attr.class === 'p-smartembed') {
      const childImage = find(child, { tag: 'img' })
      if (childImage) {
        let subtitle = ''
        if (childImage.attr && childImage.attr['alt']) {
          subtitle = childImage.attr['alt']
          if (Array.isArray(subtitle)) {
            subtitle = subtitle.join(' ')
          }
        }
        subtitle = subtitle && subtitle !== undefined && subtitle !== 'undefined' ? subtitle : ''
        const propsImage = {
          'contentId': attr['data-onecms-id'].replace('policy:', ''),
          'caption': subtitle,
          'byline': ''
        }
        if (attr['data-href'] && attr['data-href'] !== '' && attr['data-href'] !== 'undefined') {
          propsImage['customClick'] = attr['data-href']
        }
        tagItems.push({ type: 'Image', value: propsImage })
        return true
      }

      // embeds
    } else if (tag === 'img' && attr && attr.src && attr.src.startsWith('/legacy/image')) {
      // let source = attr.src.startsWith('/legacy/image')
      // if(source) {
      tagItems.push({ type: 'Image', value: { 'image-legacy': attr.src } })
      return true
      // }
    } else if (attr && attr['data-oembed-url']) {
      if (attr['data-oembed-url'].indexOf('youtu.be') > -1) {
        tagItems.push({ type: 'Youtube', value: attr['data-oembed-url'] })
        return true
      }
    } else if (tag === 'a') {
      if (!attr.href) {
        if (attr['name'].indexOf('facebook.com') > -1) {
          tagItems.push({ type: 'Facebook', value: attr['name'] })
          return true
        } else if (attr['name'].indexOf('instagram.com') > -1) {
          tagItems.push({ type: 'Instagram', value: attr['name'] })
          return true
        } else if (attr['name'].indexOf('twitter.com') > -1) {
          tagItems.push({ type: 'Tweet', value: attr['name'] })
          return true
        } else if (attr['name'].indexOf('tiktok.com') > -1) {
          tagItems.push({ type: 'TikTok', value: attr['name'] })
          return true
        } else if (attr['name'].indexOf('youtube.com') > -1 || attr['name'].indexOf('youtu.be') > -1) {
          tagItems.push({ type: 'Youtube', value: attr['name'] })
          return true
        }
      } else {
        let child_string = renderChildValue(child) || attr.href
        tagItems.push({ 'type': 'text', 'value': `<a href="${attr.href}" target="_blank" rel="noreferrer">${child_string}</a>` })
        return true
      }
    }
    let child_len = child && child.length
    if (child && child_len > 0) {
      map(child, item => {
        switchNode(item)
      })
    }
  }
  // convert html
  let parsed = content.replace(/(\r\n|\n|\r)/gm, '')
  parsed = html2json(parsed)

  let elements = filter(parsed.child, ({ node: 'element' }))
  elements = elements.size === 0 || { type: 'p', value: parsed }
  // parse elements
  map(elements, (item) => switchNode(item))

  // render
  let p_text = ''
  // discard text empty
  const discard_text = [' ', '&nbsp;']
  const add_text = (value) => {
    let invalid_text = discard_text.includes(value)
    let is_valid = value && value !== '' && value !== ' ' && !invalid_text
    if (is_valid) {
      bodyItems.push({ type: 'Paragraph', value })
      p_text = ''
    }
    return is_valid
  }

  map(tagItems, ({ type, value }) => {

    if (['text', 'br', 'a'].indexOf(type) == -1) {
      let added = add_text(p_text)
      if (added) {
        p_text = ''
      }
    }

    switch (type) {
      case 'ul':
        bodyItems.push({ type: 'UnorderedList', value })
        break
      case 'ol':
        bodyItems.push({ type: 'OrderedList', value })
        break
      case 'cite':
        if (value && value !== '') {
          bodyItems.push({ type: 'Cite', value })
        }
        break
      case 'blockquote':
        if (value && value !== '') {
          bodyItems.push({ type: 'Blockquote', value })
        }
        break
      case 'h2':
        if (value && value !== '') {
          bodyItems.push({ type: 'Heading2', value })
        }
        break
      case 'h3':
        if (value && value !== '') {
          bodyItems.push({ type: 'Heading3', value })
        }
        break
      case 'h4':
        if (value && value !== '') {
          bodyItems.push({ type: 'Heading4', value })
        }
        break
      case 'p':
        // insert if exist and clean
        break
      case 'br':
        p_text = `${p_text}<br />`
        break
      case 'text':
        p_text = `${p_text}${value}`
        break
      default:
        bodyItems.push({ type, value })
        break
    }
  })

  let added = add_text(p_text)

  if (added) {
    p_text = ''
  }

  return bodyItems
}

export { parse_content }