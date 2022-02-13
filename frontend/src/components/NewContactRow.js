import React from "react";

export class NewContactRow extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const target = event.target;
    const firstName = target.firstName.value;
    const lastName = target.lastName.value;
    const email = target.email.value;

    var contact = {
      firstName: firstName,
      lastName: lastName,
      email: email,
    };
    this.props.addContact(contact);
  }

  render() {
    return (
      <form className="form-inline" onSubmit={this.handleSubmit}>
        <div className="form-group row">
          <div className="col-md-3">
            <input
              type="text"
              name="firstName"
              className="form-control"
              id="firstNameInput"
              placeholder="First name"
            />
          </div>
          <div className="col-md-3">
            <input
              type="text"
              name="lastName"
              className="form-control"
              id="lastNameInput"
              placeholder="Last name"
            />
          </div>
          <div className="col-md-3">
            <input
              type="email"
              name="email"
              className="form-control"
              id="emailInput"
              placeholder="Email"
            />
          </div>
          <div className="col-md-3">
            <button type="submit" className="btn btn-primary">
              <i className="fa fa-fw fa-plus"></i>Add
            </button>
          </div>
        </div>
      </form>
    );
  }
}
