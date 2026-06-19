function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`bg-blue-500 text-white px-4 py-2 rounded m-3 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
