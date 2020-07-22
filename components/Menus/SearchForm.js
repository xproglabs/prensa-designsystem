import PropTypes from 'prop-types';
import React from 'react';

import Block from '../Block';
import Button from '../Button';

const SearchForm = ({functions}) => {
  const handleSubmit = () => {
    return functions.onSubmit();
  };
  return (
    <Block custom={'search-form'}>
      <input className="search-field" type="text" placeholder="O que você está procurando?" />
      <Button disabled={false} onClick={() => handleSubmit()} style="primary">Buscar</Button>
    </Block>
  );
};
SearchForm.propTypes = {
  content: PropTypes.object.isRequired,
  functions: PropTypes.shape({
    onSubmit: PropTypes.func
  })
};
SearchForm.defaultProps = {
  content: {},
  functions: {
    onSubmit: () => null
  }
};
export default SearchForm;