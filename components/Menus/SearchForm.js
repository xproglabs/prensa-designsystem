import PropTypes from 'prop-types';
import React from 'react';

import colors from '../../styles/variables/colors.json';
import weight from '../../styles/variables/weight.json';
import Block from '../Block';
import Button from '../Button';

const SearchForm = ({functions, state, buttonSize, buttonWeight, buttonColor}) => {
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
      <Block mb={1} w='100p'>
        <input {...fieldController}  />
      </Block>
      <Button disabled={false} size={buttonSize} weight={buttonWeight} color={buttonColor} onClick={() => handleSubmit()}>Buscar</Button>
    </Block>
  );
};
SearchForm.propTypes = {
  buttonSize: PropTypes.oneOf([1, 2, 3, 4, 5]),
  buttonWeight: PropTypes.oneOf(weight),
  buttonColor: PropTypes.oneOf(colors),
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