import React from "react";

export class NewContactRow extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const target = event.target;
    const fName = target.fName.value;
    const lName = target.lName.value;
    const email = target.email.value;

    var contact = {
      fName: fName,
      lName: lName,
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
              name="fName"
              className="form-control"
              id="fNameInput"
              placeholder="First name"
            />
          </div>
          <div className="col-md-3">
            <input
              type="text"
              name="lName"
              className="form-control"
              id="lNameInput"
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
