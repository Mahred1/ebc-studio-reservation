"use client";

import { useFormStatus } from "react-dom";

function Button({ children, style = "primary", onClick,disabled }) {
  const { pending } = useFormStatus();
  return (
    <button
    disabled={disabled}
      onClick={onClick}
      className={`${style == "primary" && "bg-primary-100 text-white"} ${
        style == "fallback" && "bg-white border border-[#a7a7a7] text-[#7E7E7E]"
      } ${style === "secondary" && "bg-secondary-100 text-primary-100"} ${
        style === "action" && "bg-primary-200 text-white"
      } px-10 py-3 font-md rounded-lg font-normal tracking-widest hover:scale-[103%] `}
    >
      {pending ? "loading..." : children}
    </button>
  );
}

export default Button;
