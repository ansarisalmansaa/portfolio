import { deleteMessage, getAllMessages } from "../../services/contact";
import { useState, useEffect } from "react";
import Layout from "../Layout/Layout";
import "./Message.css";

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
      <div className="message-main">
        <div className="message-container">
          <h1>Message 💬</h1>
          {contacts.map((contact) => (
            <div className="message-box">
              <div key={contact.id}>
                <div className="text-style">{contact.name}</div>
                <div className="text-style">{contact.email}</div>
                <div className="message-style">{contact.message}</div>
                <button onClick={() => handleDelete(contact.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
export default Message;
