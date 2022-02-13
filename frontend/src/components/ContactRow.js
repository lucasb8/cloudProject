import React from "react";

export class ContactRow extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.contact.name.firstName}</td>
        <td>{this.props.contact.name.lastName}</td>
        <td>{this.props.contact.email}</td>
      </tr>
    );
  }
}
