import React from 'react'
import {map} from 'lodash'
import PropTypes from 'prop-types'

import Block from '../Block'
import Teaser from '../Teasers'
import SectionTitle from '../SectionTitle'
import MostRead from './MostRead'

const Latest = ({content, domain, ReadMore, Title, status}) => {
  const propsContainer = {custom: 'templates-latest-news', align: 'col left', w: '100p', md: {align: 'row between'}}
  const propsPageLeft = {custom: 'page-left', mb: '6'}
  const propsPageRight = {custom: 'page-right'}
  return (
    <Block {...propsContainer}>
      <Block {...propsPageLeft}>
        {Title && <Title />}
        <Block custom="latest-news">
          {map(content["items-latest"], (item, key) => 
            <Teaser 
              content={item} 
              domain={domain}
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
  ReadMore: PropTypes.func,
  Title: PropTypes.func,
  status: PropTypes.shape({
    error: PropTypes.bool,
    loading: PropTypes.bool
  })
}

export default Latest