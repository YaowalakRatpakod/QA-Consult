import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ChatComponent() {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const [senderId, setSenderId] = useState(1); // ID ของผู้ส่งข้อความ (ในที่นี้เป็นของผู้ใช้)
    const [receiverId, setReceiverId] = useState(2); // ID ของผู้รับข้อความ (ในที่นี้เป็นของ admin)

    useEffect(() => {
        // เรียก API เมื่อคอมโพเนนต์โหลด
        fetchMessages();
    }, []);

    const fetchMessages = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/get-messages/${senderId}/${receiverId}/`);
            setMessages(response.data.messages);
        } catch (error) {
            console.error('Error fetching messages:', error);
        }
    };

    const sendMessage = async () => {
        try {
            await axios.post('http://localhost:8000/send-message/', {
                sender_id: senderId,
                receiver_id: receiverId,
                message: newMessage
            });
            // ส่งข้อความสำเร็จ ให้เรียก API เพื่อดึงข้อความใหม่
            fetchMessages();
            // ล้างข้อความใหม่ใน state
            setNewMessage('');
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    return (
        <div>
            <h1>Chat Component</h1>
            <div>
                {messages.map((msg, index) => (
                    <div key={index}>
                        <p><strong>{msg.sender}</strong>: {msg.message}</p>
                        <p><small>{msg.timestamp}</small></p>
                    </div>
                ))}
            </div>
            <div>
                <textarea value={newMessage} onChange={(e) => setNewMessage(e.target.value)} />
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
}

export default ChatComponent;
