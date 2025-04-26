// components/FloatingChatButton.tsx

'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react'; // using lucide icons (lightweight)

export default function FloatingChatButton() {
  const whatsappLink = "https://wa.me/09035986632"; // Replace with your own number!

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-transform transform hover:scale-110"
        aria-label="Chat with us on WhatsApp"
      >
        <MessageCircle size={28} />
      </a>
    </motion.div>
  );
}
