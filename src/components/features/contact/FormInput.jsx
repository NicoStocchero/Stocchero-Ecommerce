// FormInput.jsx - Campo de formulario reutilizable con label, error y estilos

const FormInput = ({ label, id, value, onChange, error, type = "text" }) => {
  return (
    <div className="mb-4">
      {/* Label */}
      <label
        htmlFor={id}
        className="block text-sm font-semibold text-gray-700 mb-1"
      >
        {label}
      </label>

      {/* Input */}
      <input
        type={type}
        id={id}
        name={id}
        placeholder={label}
        value={value}
        onChange={onChange}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      />

      {/* Mensaje de error */}
      {error && (
        <p id={`${id}-error`} className="mt-1 text-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  );
};

export default FormInput;
