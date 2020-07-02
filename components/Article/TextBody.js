import {html2json} from 'html2json';
import {filter, map} from 'lodash';
import PropTypes from 'prop-types';

const TextBody = ({content}) => {

  if(!content) return null;
  const switchNode = (item) => {
    // console.log(`switchnode`, item)
    switch(item.node) {
      case 'element':
        // console.log(`item.node.element`)
        return null;
    }
    return null;
  };
  // render
  const parsed = html2json(content);
  const elements = filter(parsed.child, ({node: 'element'}));
  return map(elements, (item) => switchNode(item));
};

TextBody.propTypes = {
  content: PropTypes.string.isRequired
};

TextBody.defaultProps = {
  content: {}
};

export default TextBody;
