import logo from './logo.svg';
import './App.css';

const ContactList = (props) => {
  const people = props.contacts;

  return (
    <ol>
      {people.map(person => (
        <li key={person.name}>{person.name}</li>
      ))}
    </ol>
  )
}

function App() {
  return (
    <div className="App">
      <ContactList contacts={[{name: 'Tyler'},{name: 'Karen'},{name: 'Richard'}]}/>
      <ContactList contacts={[{name: 'Amanda'},{name: 'Andrew'},{name: 'David'}]}/>
      <ContactList contacts={[{name: 'Arthur'},{name: 'FDS'},{name: 'React'}]}/>
    </div>
  );
}

export default App;
