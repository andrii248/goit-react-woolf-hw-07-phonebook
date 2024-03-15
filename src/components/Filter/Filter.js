import css from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { filterContacts } from '../../redux/filter/slice';
import React from 'react';
import { selectFilter } from '../../redux/selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const onChangeFilter = e => {
    dispatch(filterContacts(e.target.value));
  };

  return (
    <label className={css.label}>
      Find contact by name
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={onChangeFilter}
      />
    </label>
  );
};

export default Filter;
