import { Component } from "react";
import "./App.css";
import ContactForm from "./components/contactForm/ContactForm";
import ContactList from "./components/contactList/ContactList";
import Filter from "./components/filter/Filter";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  handleFilter = () => {
    const { filter, contacts } = this.state;
    // const newContactsList = contacts.map((item) => ({ ...item }));
    const filteredContacts = contacts.filter((item) =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
    return filteredContacts;
  };

  handleChange = ({ target }) => {
    const { value, name } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = (newContact) => {
    this.setState(({ contacts }) => {
      const findDoubleContact = contacts.find(
        (contact) => contact.name === newContact.name
      );
      if (findDoubleContact) {
        alert(`${findDoubleContact.name} is already in contacts`);
        return;
      }
      const newContactsList = [...contacts, newContact];
      return {
        contacts: newContactsList,
        name: "",
        number: "",
      };
    });
  };

  handleDelete = (id) => {
    this.setState(({ contacts }) => {
      const copyContactsList = [...contacts];
      const newContactsList = copyContactsList.filter(
        (contact) => contact.id !== id
      );
      return {
        contacts: newContactsList,
      };
    });
  };

  render() {
    const { handleChange, handleSubmit, handleFilter, handleDelete } = this;
    const { contacts, filter } = this.state;
    return (
      <div className="App">
        <h1 className="App-header">Phonebook</h1>
        <ContactForm onSubmit={handleSubmit} />
        <Filter onChange={handleChange} data={contacts} filter={filter} />
        <ContactList data={handleFilter()} onDelete={handleDelete} />
      </div>
    );
  }
}

export default App;
