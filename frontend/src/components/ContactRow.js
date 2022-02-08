import React from "react";

export class ContactRow extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.contact.fName}</td>
        <td>{this.props.contact.lName}</td>
        <td>{this.props.contact.email}</td>
      </tr>
    );
  }
}
