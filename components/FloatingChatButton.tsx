'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react'; 

export default function FloatingChatButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const whatsappBaseLink = "https://wa.me/2348169827547";

  const sendMessage = () => {
    const encodedMessage = encodeURIComponent(message || "Hello! I would like to learn more about Vikkymedia Technologies.");
    window.open(`${whatsappBaseLink}?text=${encodedMessage}`, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Box */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-xl w-80 mb-4"
          >
            <div className="flex justify-between items-center mb-2">
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Vikkymedia Technologies</h4>
              <button onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                <X size={20} />
              </button>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Welcome to Vikkymedia Technologies! 🚀 We specialize in web development, branding, and digital solutions to take your business higher!
            </p>
            <textarea
              className="w-full p-2 border rounded-md text-gray-800 dark:text-white dark:bg-gray-800 border-gray-300 dark:border-gray-700"
              rows={3}
              placeholder="Type your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button
              onClick={sendMessage}
              className="mt-3 w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md transition-colors"
            >
              Send on WhatsApp
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-transform transform hover:scale-110"
        aria-label="Chat with us on WhatsApp"
      >
        <MessageCircle size={28} />
      </motion.button>
    </div>
  );
}
