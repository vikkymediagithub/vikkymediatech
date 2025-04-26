"use client"
import { useState } from "react";
import { HiChatAlt } from "react-icons/hi";  // Icon for chat button
import { FaTimes } from "react-icons/fa";  // Close button icon

export const FloatingChat = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => setIsOpen(!isOpen);

  return (
    <div>
      {/* Floating Chat Button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-4 right-4 p-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 focus:outline-none"
      >
        <HiChatAlt size={30} />
      </button>

      {/* Chat Popup */}
      {isOpen && (
        <div className="fixed bottom-16 right-4 bg-white w-80 h-96 shadow-lg rounded-lg p-4 flex flex-col">
          <div className="flex justify-between items-center">
            <span className="text-xl font-semibold">Chat with Us</span>
            <button onClick={toggleChat} className="text-xl">
              <FaTimes />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto mt-4">
            <p>Start chatting with our support team...</p>
            {/* Add Chat UI or embed chat service here */}
          </div>
          <input
            type="text"
            placeholder="Type your message..."
            className="mt-4 p-2 border border-gray-300 rounded-lg w-full"
          />
        </div>
      )}
    </div>
  );
};
