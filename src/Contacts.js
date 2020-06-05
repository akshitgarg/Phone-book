import React from 'react';
import Card from 'react-bootstrap/Card';

function Contacts(props) {
  let contacts = [...props.contacts];
  let contactsList = contacts.filter(contact => {
      for(let i in contact)
        if (contact[i].toLowerCase().indexOf(props.filterPhrase.toLowerCase()) !== -1)
          return true;
      return false;




    }).map(contact =>
      <Card key={contact.key}>
        <Card.Body className="text-left">
        <Card.Title><h5>{contact.firstName} {contact.lastName}</h5></Card.Title>
        <Card.Text>Telephone: {contact.telephone}</Card.Text>
        <span>
          <i key={contact.key}
            className="fa fa-trash-o text-danger"
            aria-hidden="true"
            onClick={props.closer.bind(null,contact.key)} />
        </span>
        </Card.Body>
      </Card>);
    return contactsList;
}



export default Contacts;