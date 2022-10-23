import { useSelector, useDispatch } from 'react-redux/es/exports';
import { remove } from 'redux/store';

const Contacts = () => {
  const dispatch = useDispatch();
  const contactList = useSelector(state => state.items);
  const filterItem = useSelector(state => state.filter);

  const visibleContacts = contactList.filter(el =>
    el.name.toLowerCase().includes(filterItem.toLowerCase())
  );

  const component = visibleContacts.map(el => {
    return (
      <li key={el.id}>
        <p>
          {el.name}: {el.number}
        </p>
        <button
          type="button"
          onClick={() => {
            dispatch(remove(el.id));
          }}
        >
          Delete
        </button>
      </li>
    );
  });

  return (
    <div>
      <ul>
        {contactList.length >= 1 ? (
          component
        ) : (
          <li>
            <p>Нет сохраненных контактов</p>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Contacts;
