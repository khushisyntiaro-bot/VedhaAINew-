import { MessageCircle } from "lucide-react";

const WA_MESSAGE = encodeURIComponent(
  `Hello, I'm interested in your courses and would like to know more.

Could you please share:
• Available courses
• Course duration
• Fees & payment options
• Online/Offline mode
• Batch timings
• Placement/Job assistance
• Certification details

Please share the complete details. Thank you!`
);

/**
 * Floating WhatsApp chat button component.
 * Appears in the bottom‑right corner of the viewport.
 * Pre-fills a detailed course enquiry message to +91 8805579222.
 */
const WhatsAppFloating = () => (
  <a
    href={`https://wa.me/918805579222?text=${WA_MESSAGE}`}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-4 right-4 bg-green-500 hover:bg-green-600 text-white rounded-full p-3 shadow-lg transition transform hover:scale-110"
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle className="w-6 h-6" />
  </a>
);

export default WhatsAppFloating;
