function Input({ label, error, className = "", ...props }) {
  return (
    <>
      {label && <label>{label} :</label>}
      <input
        className={`border border-amber-700 p-2 m-3 rounded-4xl ${className}`}
        {...props}
      />
      {error && <div className="text-red-500">{error}</div>}
    </>
  );
}

export default Input;
