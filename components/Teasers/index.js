import PropTypes from 'prop-types'
import React from 'react'

import Block from '../Block'
import Image from '../Image/Teaser'
import Subject from '../Subject'
import Typography from '../Typography'
import {convertDateFromPtBrToDistance} from '../Utils/dates'

const Teaser = ({content, domain, hasImageTop, hasSubjectFilled, hasSubtitle, hasDate, status}) => {
  const {image, name, path, subject, subtitle} = content
  const {loading, error} = status
  const propsTeaser = {align: hasImageTop ? 'col' : 'row left',custom: 'teaser-default',mb: '2'}
  const propsImage = {align: 'row',custom: `teaser-image ${hasImageTop ? 'image-top' : 'image-left'}`}
  const propsContent = {custom: 'teaser-content',align: 'col',mb: '3',ml: '2',mr: '2',mt: '3',w: '100p-4',}
  const propsSubTitle = {mb: '2',lg:{mb: '8'}} 
  const propsDateContainer = {h: '100p', align: 'bottom'}
  const propsDate = {custom: 'teaser-date',w: '100p'}
  const propsSubject = {custom: 'teaser-subject',mb: '1'}
  const propsTitle = {custom: 'teaser-title'}

  const TeaserImage = () => {
    if (loading || error || !image) 
      return <div className='image-box skeleton'/>

    if(!image['image-contentId'])
      return null 

    return (
      <Block {...propsImage}>
        <a className='teaser-aria' href={path} aria-label={`Imagem da matéria ${name}`}>
          <Image domain={domain} value={image} />
        </a>
      </Block>
    )
  }
  const dateDistance = content['time-published'] ? convertDateFromPtBrToDistance(content['time-published']) : ``
  return (
    <Block {...propsTeaser}>
      <TeaserImage />
      <Block {...propsContent}>
        <Block>
          {subject && 
            <Block {...propsSubject}>
              <Subject filled={hasSubjectFilled}>{subject}</Subject>
            </Block>
          }
        </Block>
        <Block>
          <Block {...propsTitle}>
            <a className='teaser-aria' href={path} aria-label={`Abrir matéria ${name}`}>
              <Typography custom='teaser-title'>{name}</Typography>
            </a>
          </Block >
          {subtitle && hasSubtitle &&
            <Block {...propsSubTitle}>
              <Typography custom='teaser-subtitle'>{subtitle}</Typography>
            </Block>  
          }
        </Block>
        <Block {...propsDateContainer}>  
          {dateDistance && hasDate &&
            <Block {...propsDate}>
              <Typography custom='teaser-datetime'>{dateDistance}</Typography>
            </Block>
          }
        </Block>  
      </Block>
    </Block>
  )
}

Teaser.propTypes = {
  content: PropTypes.shape({
    image: PropTypes.object,
    name: PropTypes.string,
    path: PropTypes.string,
    subtitle: PropTypes.string,
    subject: PropTypes.string,
    ['time-published']: PropTypes.string
  }),
  domain: PropTypes.string,
  hasImageTop: PropTypes.bool,
  hasSubtitle: PropTypes.bool,
  hasDate: PropTypes.bool,
  hasSubjectFilled: PropTypes.bool,
  status: PropTypes.shape({
    loading: PropTypes.bool,
    error: PropTypes.bool
  })
}
Teaser.defaultProps = {
  hasSubjectFilled: false,
  hasImageTop: false,
  hasSubtitle: false,
  hasDate: true
}

export default Teaser