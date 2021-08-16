import { getAllMessages, getOneMessage } from "../../services/contact";
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

  return (
    <Layout>
      <div className="messages">
        <h1>Message 💬</h1>
        {contacts.map((contact) => (
          <div key={contact.id}>
            <div>{contact.name}</div>
            <div>{contact.email}</div>
            <div>{contact.message}</div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
export default Message;
