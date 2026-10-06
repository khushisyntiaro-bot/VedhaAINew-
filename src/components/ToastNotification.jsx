import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
import { CheckCircle2, X } from "lucide-react";
const ToastNotification = ({ message, onClose }) => {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClose();
    }, 4e3);
    return () => clearTimeout(timer);
  }, [message, onClose]);
  if (!message) return null;
  return /* @__PURE__ */ jsx("div", { className: "fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-5 fade-in duration-200", children: /* @__PURE__ */ jsxs("div", { className: "bg-stone-900 text-stone-100 px-4 py-3 rounded-2xl border border-stone-700 shadow-2xl flex items-center gap-3 text-xs max-w-md", children: [
    /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-[#2c9320] shrink-0" }),
    /* @__PURE__ */ jsx("span", { className: "font-normal text-stone-200", children: message }),
    /* @__PURE__ */ jsx(
      "button",
      {
        type: "button",
        onClick: onClose,
        className: "text-stone-400 hover:text-white p-1 rounded-lg cursor-pointer",
        children: /* @__PURE__ */ jsx(X, { className: "w-3.5 h-3.5" })
      }
    )
  ] }) });
};
export {
  ToastNotification
};
