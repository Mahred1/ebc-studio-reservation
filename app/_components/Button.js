function Button({ children, type = "primary" }) {
  return (
    <button
      className={`${type == "primary" && "bg-primary-100 text-white"} ${
        type === "secondary" && "bg-secondary-100 text-primary-100"
      } ${
        type==="action"&&"bg-primary-200 text-white"
      } px-10 py-3 font-md rounded-md font-light tracking-widest `}
    >
      {children}
    </button>
  );
}

export default Button;
