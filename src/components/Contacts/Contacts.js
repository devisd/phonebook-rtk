import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import {
  getContactsService,
  removeContactsService,
} from './../../redux/slices/contactsSlice';

const Contacts = () => {
  const dispatch = useDispatch();
  const contactList = useSelector(state => state.items);
  const filterItem = useSelector(state => state.filter);

  useEffect(() => {
    dispatch(getContactsService());
  }, [dispatch]);

  const visibleContacts = contactList.filter(el =>
    el.name.toLowerCase().includes(filterItem.toLowerCase())
  );

  console.log(contactList);

  const component = visibleContacts.map(({ id, name, phone }) => {
    return (
      <li key={id}>
        <p>
          {name}: {phone}
        </p>
        <button
          type="button"
          onClick={() => {
            dispatch(removeContactsService(id));
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
