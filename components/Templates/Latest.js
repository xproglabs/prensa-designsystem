import React from 'react'
import {map} from 'lodash'
import PropTypes from 'prop-types'

import Block from '../Block'
import {Teaser} from '../Teasers'
import SectionTitle from '../SectionTitle'
import MostRead from './MostRead'

const Latest = ({content, ReadMore, status}) => {
  const propsContainer = {custom: 'templates-latest-news', align: 'col left', mt: '2', w: '100p', md: {align: 'row between'}}
  const propsPageLeft = {custom: 'page-left', mb: '4'}
  const propsPageRight = {custom: 'page-right', mb: '4'}
  return (
    <Block {...propsContainer}>
      <Block {...propsPageLeft}>
        <SectionTitle name="ÚLTIMAS NOTÍCIAS" />
        <Block custom="latest-news">
          {map(content["items-latest"], (item, key) => 
            <Teaser 
              content={item} 
              hasSubjectFilled={true} 
              hasImageTop={true}
              status={status} 
              key={key} 
            />
          )}
        </Block>
        {ReadMore && <ReadMore />}
      </Block>
      <Block {...propsPageRight}>
        <SectionTitle name="MAIS LIDAS" />
        <MostRead content={content["items-mostread"]} status={status}/>
      </Block>
    </Block>
  )
}

Latest.propTypes = {
  content: PropTypes.object,
  ReadMore: PropTypes.function,
  status: PropTypes.shape({
    error: PropTypes.bool,
    loading: PropTypes.bool
  })
}

export default Latest