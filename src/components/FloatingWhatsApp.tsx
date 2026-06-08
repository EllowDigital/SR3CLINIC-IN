import { motion } from "framer-motion";

export default function FloatingWhatsApp() {
  const phone = "919369643922";
  const message = encodeURIComponent(
    "Namaste SR\u00b3 Centre, I would like to book an appointment/inquire about services.",
  );

  return (
    <motion.a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-2xl flex items-center justify-center"
      style={{ backgroundColor: "#25D366" }}
    >
      <svg
        viewBox="0 0 32 32"
        className="w-8 h-8 fill-white"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M16.004 2.667C8.64 2.667 2.667 8.64 2.667 16c0 2.363.618 4.58 1.698 6.507L2.667 29.333l7.027-1.666A13.265 13.265 0 0016.004 29.333C23.36 29.333 29.333 23.36 29.333 16S23.36 2.667 16.004 2.667zm0 2.4c5.918 0 10.93 5.01 10.93 10.933 0 5.918-5.012 10.933-10.93 10.933a10.882 10.882 0 01-5.506-1.486l-.39-.23-4.172.988.946-4.077-.254-.404A10.887 10.887 0 015.077 16c0-5.924 5.004-10.933 10.927-10.933zm-3.09 5.6c-.22 0-.572.082-.87.41-.299.328-1.14 1.113-1.14 2.716 0 1.603 1.168 3.152 1.33 3.37.163.217 2.259 3.595 5.563 4.9 2.747 1.085 3.306.87 3.9.815.595-.054 1.918-.783 2.19-1.54.271-.756.271-1.404.19-1.54-.082-.135-.3-.217-.625-.38-.326-.163-1.919-.948-2.217-1.057-.299-.11-.516-.163-.732.163-.217.326-.84 1.057-1.03 1.274-.189.218-.379.245-.704.082-.326-.163-1.377-.508-2.624-1.62-.97-.864-1.626-1.932-1.816-2.258-.19-.326-.02-.502.143-.664.147-.147.326-.38.489-.571.163-.19.217-.326.326-.543.109-.218.054-.41-.027-.571-.082-.163-.714-1.787-.99-2.44-.244-.584-.499-.576-.713-.585l-.62-.01z" />
      </svg>
      <span
        className="absolute inset-0 rounded-full animate-ping opacity-30"
        style={{ backgroundColor: "#25D366" }}
      />
    </motion.a>
  );
}
