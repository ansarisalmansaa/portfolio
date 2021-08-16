import { getAllMessages, getOneMessage } from "../../services/contact"
import { useState, useEffect } from "react";
import Layout from "../Layout/layout";
function Message(user){
        const [messages, setMessages] = useState([]);
      
        useEffect(() => {
          const fetchMessages = async () => {
            const allMessages = await getOneMessage();
            setMessages(allMessages);
          };
          fetchMessages();
        }, []);
    return(
        <Layout>
        <div className="messages">
            <h1>Message 💬</h1>
           {contacts.map((contacts)=>(
               <div key={contacts.id}>
                   <div>
                       {contacts.name}
                   </div>
               </div>
           ))}
        </div>
        </Layout>
    )
}
export default Message;