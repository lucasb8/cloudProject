import React from "react";

import { DbService } from "./../services/DbService";
import { ContactTable } from "./ContactTable";
import { NewContactRow } from "./NewContactRow";
import { SearchBar } from "./SearchBar";

export class FilterableContactTable extends React.Component {
  constructor(props) {
    super(props);

    // FilterableContactTable is the owner of the state as the filterText is needed in both nodes (searchbar and table) that are below in the hierarchy tree.
    this.state = {
      filterText: "",
      contacts: [],
    };

    this.loadData = this.loadData.bind(this);
    this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
    this.addContact = this.addContact.bind(this);
    this.deleteAllContact = this.deleteAllContact.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    DbService.getAllContacts().then((contacts) =>
      this.setState((prevState) => ({ ...prevState, contacts }))
    );
  }

  addContact(contact) {
    DbService.addNewContact(
      contact.email,
      contact.firstName,
      contact.lastName
    ).then(() => this.loadData());
  }

  deleteAllContact() {
    DbService.deleteAllContact().then(() => this.loadData());
  }

  handleFilterTextInput(filterText) {
    //Call to setState to update the UI
    this.setState({
      filterText: filterText,
    });
    //React knows the state has changed, and calls render() method again to learn what should be on the screen
  }

  render() {
    return (
      <div>
        <h1>Contacts List</h1>
        <SearchBar
          filterText={this.state.filterText}
          onFilterTextInput={this.handleFilterTextInput}
        />
        <NewContactRow addContact={this.addContact} />
        <ContactTable
          contacts={this.state.contacts}
          filterText={this.state.filterText}
        />
        <button onClick={this.deleteAllContact} className="btn btn-danger">
          Delete all contacts
        </button>
      </div>
    );
  }
}
