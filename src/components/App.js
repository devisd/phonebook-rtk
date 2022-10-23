import Form from './Form';
import Contacts from './Contacts';
import Filter from './Filter';

const App = () => {
  return (
    <div
      style={{
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101',
        padding: 50,
      }}
    >
      <h1>Phonebook</h1>
      <Form />
      <Filter />
      <h2>Contacts</h2>
      <Contacts />
    </div>
  );
};

export default App;
