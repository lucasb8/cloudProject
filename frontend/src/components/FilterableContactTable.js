import React from "react";

import { ContactTable } from "./ContactTable";
import { NewContactRow } from "./NewContactRow";
import { SearchBar } from "./SearchBar";

export class FilterableContactTable extends React.Component {
  constructor(props) {
    super(props);
    // FilterableContactTable is the owner of the state as the filterText is needed in both nodes (searchbar and table) that are below in the hierarchy tree.
    this.state = {
      filterText: "",
      contacts: [...props.contacts],
    };
    this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
    this.addContact = this.addContact.bind(this);
  }

  addContact(contact) {
    var timestamp = new Date().getTime();
    contact["key"] = timestamp;
    console.log("BEFORE: this.state.contacts: " + this.state.contacts.length);
    // update the state object
    this.state.contacts.push(contact);
    // set the state
    this.setState({ contacts: this.state.contacts });
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
        <h1>React Contacts List App</h1>
        <SearchBar
          filterText={this.state.filterText}
          onFilterTextInput={this.handleFilterTextInput}
        />
        <NewContactRow addContact={this.addContact} />
        <ContactTable
          contacts={this.state.contacts}
          filterText={this.state.filterText}
        />
      </div>
    );
  }
}
