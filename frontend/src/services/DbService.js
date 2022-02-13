export class DbService {
  static getAllContacts() {
    const url = "http://localhost:8081/person/";

    return fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        return data;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  static addNewContact(email, firstName, lastName) {
    const url = `http://localhost:8081/person/`;
    console.log(email + firstName + lastName);

    var payload = {
      name: {
        firstName: firstName,
        lastName: lastName,
      },
      email: email,
    };

    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    return fetch(url, {
      method: "POST",
      headers,
      body: JSON.stringify(payload),
    }).then(function (res) {
      return res.json();
    });
  }

  static deleteAllContact() {
    const url = `http://localhost:8081/person/`;

    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    return fetch(url, {
      method: "DELETE",
      headers,
    }).then(function (res) {
      return res.json();
    });
  }
}
