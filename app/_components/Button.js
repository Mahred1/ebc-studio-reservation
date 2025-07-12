'use client'

import { useFormStatus } from "react-dom";

function Button({ children, style = "primary",onClick}) {
   const { pending } = useFormStatus();
  return (
    <button 
    onClick={onClick}
      className={`${style == "primary" && "bg-primary-100 text-white"} ${
        style === "secondary" && "bg-secondary-100 text-primary-100"
      } ${
        style === "action" && "bg-primary-200 text-white"
      } px-10 py-3 font-md rounded-md font-semibold tracking-widest hover:scale-[103%] `}
    >
      {pending?"loading...":children}
    </button>
  );
}

export default Button;
