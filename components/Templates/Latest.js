import React from 'react'
import {map} from 'lodash'
import PropTypes from 'prop-types'

import Block from '../Block'
import {Teaser} from '../Teasers'
import SectionTitle from '../SectionTitle'

const Latest = ({content, ReadMore, status}) => {

  
  const propsContainer = {custom: 'templates-latest-news', align: 'col left', w: '100p', lg: {align: 'row'}}
  const propsPageLeft = {custom: 'page-left', mb: '2', mt: '4', w: '100p', lg: {mr: '2', w: '70p-2'}}
  const propsPageRight = {custom: 'page-right', m: '2', mt: '4', w: '100p-4', lg: {w: '30p-4'}}
  return (
    <Block {...propsContainer}>
      <Block {...propsPageLeft}>
        <SectionTitle name="ÚLTIMAS NOTÍCIAS" />
        <Block custom="latest-news">
          {map(content["items-latest"], (item, key) => 
            <Teaser content={item} hasSubjectFilled={true} status={status} key={key} />)}
        </Block>
        {ReadMore && <ReadMore />}
      </Block>
      <Block {...propsPageRight}>
        <SectionTitle name="MAIS LIDAS" />
      </Block>
    </Block>
  )
}

Latest.propTypes = {
  content: PropTypes.object,
  ReadMore: PropTypes.object,
  status: PropTypes.shape({
    error: PropTypes.bool,
    loading: PropTypes.bool
  })
}

export default Latest