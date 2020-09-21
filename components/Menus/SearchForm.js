import PropTypes from 'prop-types';
import React from 'react';

import Block from '../Block';
import Button from '../Button';

const SearchForm = ({functions, state}) => {
  const {fieldValue, setFieldValue} = state;
  const handleSubmit = () => {
    let string = fieldValue;
    string = string.normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z\s])/g, '');
    functions.onSubmit(string);
  };
  const fieldController = {
    type: 'text',
    className: 'search-field',
    placeholder: 'O que você está procurando?',
    onChange: (event) => setFieldValue(event.target.value),
    onKeyPress: (event) => (event.key === 'Enter') && handleSubmit(fieldValue),
  };
  return (
    <Block align='right' custom={'search-form'}>
      <input {...fieldController}  />
      <Button disabled={false} onClick={() => handleSubmit()}>Buscar</Button>
    </Block>
  );
};
SearchForm.propTypes = {
  content: PropTypes.object.isRequired,
  functions: PropTypes.shape({
    onSubmit: PropTypes.func
  }),
  state: PropTypes.shape({
    fieldValue: PropTypes.string,
    setFieldValue: PropTypes.func
  })
};
SearchForm.defaultProps = {
  content: {},
  functions: {
    onSubmit: () => null
  },
  state: {
    fieldValue: '',
    setFieldValue: () => null
  }
};
export default SearchForm;