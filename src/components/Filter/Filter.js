import { useSelector, useDispatch } from 'react-redux/es/exports';
import { filter } from 'redux/store';

const Filter = () => {
  const dispatch = useDispatch();
  const filterItem = useSelector(state => state.filter);

  const onHandleChange = event => {
    dispatch(filter(event.currentTarget.value));
  };

  return (
    <div>
      <label>
        Find contacts by name
        <input
          type="text"
          name="filter"
          value={filterItem}
          onInput={onHandleChange}
        />
      </label>
    </div>
  );
};

export default Filter;
