import { useSelector } from 'react-redux/es/exports';
import {
  useGetContactsQuery,
  useDeleteContactMutation,
} from 'redux/slices/contactsApi';

const Contacts = () => {
  const { data = [] } = useGetContactsQuery();
  const [deleteContact] = useDeleteContactMutation();
  const filterItem = useSelector(state => state.filter);

  const visibleContacts = data.filter(el =>
    el.name.toLowerCase().includes(filterItem.toLowerCase())
  );

  const handleDeleteContacts = async id => {
    await deleteContact(id).unwrap();
  };

  const component = visibleContacts.map(({ id, name, phone }) => {
    return (
      <li key={id}>
        <p>
          {name}: {phone}
        </p>
        <button
          type="button"
          onClick={() => {
            handleDeleteContacts(id);
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
        {data.length >= 1 ? (
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
