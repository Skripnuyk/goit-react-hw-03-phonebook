import PropTypes from 'prop-types';
import { FilterLabel, FilterTitle, FilterInput } from './Filter.styled';

const Filter = ({ filter, changeFilter }) => {
  return (
    <FilterLabel>
      <FilterTitle>Find contacts by name</FilterTitle>
      <FilterInput type="text" value={filter} onChange={changeFilter} />
    </FilterLabel>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

Filter.prototype = {
  filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

export default Filter;
