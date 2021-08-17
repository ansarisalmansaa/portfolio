import {
  deleteMessage,
  getAllMessages,
} from "../../services/contact";
import { useState, useEffect } from "react";
import Layout from "../Layout/layout";

function Message(user) {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    const fetchMessages = async () => {
      const allMessages = await getAllMessages();
      setContacts(allMessages);
    };
    fetchMessages();
  }, []);
  const handleDelete = async (id) => {
    const deleteM = await deleteMessage(id);
    if (deleteM === "Deleted") {
      setContacts((prevContacts) => {
        return prevContacts.filter((contact) => contact.id !== id);
      });
    }
  };
  return (
    <Layout>
      <div className="messages">
        <h1>Message 💬</h1>
        {contacts.map((contact) => (
          <div key={contact.id}>
            <div>{contact.name}</div>
            <div>{contact.email}</div>
            <div>{contact.message}</div>
            <button onClick={() => handleDelete(contact.id)}>Delete</button>
          </div>
        ))}
      </div>
    </Layout>
  );
}
export default Message;
