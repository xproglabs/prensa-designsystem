import React from 'react'
import {map} from 'lodash'
import PropTypes from 'prop-types'

import Block from '../Block'
import Teaser from '../Teasers'

const Related = ({items, domain, ReadMore, status}) => {
  const propsContainer = {custom: 'templates-related-news', align: 'col left', w: '100p', md: {align: 'row between'}}
  return (
    <Block {...propsContainer}>
      <Block custom="related-news">
        {map(items, (item, key) => 
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
  )
}

Related.propTypes = {
  items: PropTypes.array,
  ReadMore: PropTypes.func,
  status: PropTypes.shape({
    error: PropTypes.bool,
    loading: PropTypes.bool
  })
}

export default Related