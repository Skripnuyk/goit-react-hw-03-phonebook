import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { GlobalStyle } from './GlobalStyled';
import { AppWrap, AppTitle, SecondTitle } from './App.styled';
import ContactForm from './contactForm';
import Filter from './filter';
import ContactList from './contactList'

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const nextContacts = this.state.contacts;
    const prevContacts = prevState.contacts;

    if (nextContacts !== prevContacts) {
      localStorage.setItem('contacts', JSON.stringify(nextContacts));
    }
  }

  addContact = ({ name, number }) => {
    const { contacts } = this.state;
    const newContact = { id: nanoid(), name, number };
    
    contacts.some(contact => contact.name === name)
      ? Report.warning(
          `${name}`,
          'This user is already in the contact list.',
          'OK'
        )
      : this.setState(({ contacts }) => ({
          contacts: [newContact, ...contacts],
        }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  filtredContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const filtredContacts = this.filtredContacts();
    const addContact = this.addContact;
    const deleteContact = this.deleteContact;
    const changeFilter = this.changeFilter;

    return (
      <AppWrap>
        <AppTitle>Phonebook</AppTitle>
        <ContactForm onSubmit={addContact} />
        <SecondTitle>Contacts</SecondTitle>
        <Filter filter={filter} changeFilter={changeFilter} />
        <ContactList
          contacts={filtredContacts}
          onDeleteContact={deleteContact}
        />
        <GlobalStyle />
      </AppWrap>
    );
  }
};

export default App;