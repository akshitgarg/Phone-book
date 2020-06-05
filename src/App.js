import React, { Component } from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ListContacts from './List.js';
import {generate} from 'randomstring';

class App extends Component {
  state = {
    "contacts": [
      {
        "key": generate(10),
        "firstName": "Akshit" ,
        "lastName": "garg",  
        "telephone": "8607489286"
      },
      {
        "key": generate(10),
        "firstName": "rahul",
        "lastName": "jangra",       
        "telephone": "1122334455"
      },
      {
        "key": generate(10),
        "firstName": "abhay",
        "lastName": "Tyagi",
        "telephone": "6793805309"
      },
      {
        "key": generate(10),
        "firstName": "nitish",
        "lastName": "Aggarwal",
        "telephone": "7766987642"
      },
      {
        "key": generate(10),
        "firstName": "sonali",
        "lastName": "gulati",
        "telephone": "9876543215"
      },
    ],
    "formFirstName": '',
    "formLastName": '',
    "formTelephone": '',
    "searchPhrase": ''
  }

  addContactHandler = (event) => {
    event.preventDefault();
    let newContact = {
      key: generate(10),
      firstName: this.state.formFirstName,
      lastName: this.state.formLastName,
     
      telephone: this.state.formTelephone
    };
    this.setState({contacts: [...this.state.contacts, newContact]});
    this.setState({
      "formFirstName": '',
      "formLastName": '',
      "formTelephone": ''  
    });
  }

  deleteContactHandler = (key, event) => {
    let contacts = [...this.state.contacts];
    let deleteIndex = contacts.findIndex((item)=>item.key===key);
    contacts.splice(deleteIndex, 1);
    this.setState({"contacts": contacts});
  }

  handleSearchChange = (event) => {
    this.setState({searchPhrase: event.target.value});
  };

  render() {
    return (
      <div className="App">
        <Container>
          <div className="form-inline d-flex flex-row-reverse">
            <input className="form-control"
              type="text"
              placeholder="Search"
              value={this.state.searchPhrase}
              onChange={this.handleSearchChange} />
          </div>
          <header className="App-header text-center">
            <h1>Contact Book</h1>
          </header>
          <ListContacts
            contacts={this.state.contacts}
            filterPhrase={this.state.searchPhrase}
            closer={(key, e) =>
              window.confirm("Are you sure you want to delete this contact?") && this.deleteContactHandler(key, e)}>
          </ListContacts>
          <div style={{"marginTop": 20}} className="p-4 border border-dark">
            <h2 className="text-left">Add a Contact</h2>
            <Form className="text-left" onSubmit={this.addContactHandler}>
              <Form.Group controlId="formContact">
              <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter First Name"
                  value={this.state.formFirstName}
                  onChange={(e) => this.setState({formFirstName: e.target.value})} />

                  <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Last Name"
                  value={this.state.formLastName}
                  onChange={(e) => this.setState({formLastName: e.target.value})} />
                  <Form.Label>Telephone</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Telephone"
                  value={this.state.formTelephone}
                  onChange={(e) => this.setState({formTelephone: e.target.value})} />
              </Form.Group>
              <Button variant="primary" type="submit"><i className="fa fa-plus"></i> Add Contact</Button>
            </Form>
          </div>
        </Container>
      </div>
    );
  }
};

export default App;
