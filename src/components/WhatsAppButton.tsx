import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.link/uuzzvl"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-5 py-3 rounded-full bg-[#25D366] text-[#fff] font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
      aria-label="WhatsApp 查詢"
    >
      <MessageCircle className="w-5 h-5" />
      <span className="hidden sm:inline">WhatsApp 查詢</span>
    </a>
  );
};

export default WhatsAppButton;
