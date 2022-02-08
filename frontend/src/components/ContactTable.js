import React from "react";

import { ContactRow } from "./ContactRow";

export class ContactTable extends React.Component {
  render() {
    var rows = [];
    this.props.contacts.forEach((contact) => {
      if (contact.fName.indexOf(this.props.filterText) === -1) {
        return;
      }
      rows.push(<ContactRow key={contact.key} contact={contact} />);
    });
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>
              <i className="fa fa-fw fa-user"></i>First name
            </th>
            <th>
              <i className="fa fa-fw fa-user"></i>Last name
            </th>
            <th>
              <i className="fa fa-fw fa-envelope"></i>Email
            </th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}
