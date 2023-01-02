import { useState, useEffect } from "react";
import List from "./List";
import Form from "./Form";
import './styles.css';

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname: "Onur",
      phone_number: "12345",
    },
    {
        fullname: "Göktuğ",
        phone_number: "54321",
      },
      {
        fullname: "Rıdvan",
        phone_number: "112233",
      },
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);
  return (
    <div id="container">
        <h1>Contacts</h1>
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  );
}

export default Contacts;
