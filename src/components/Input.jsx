import React from "react";

const Input = ({
  label,
  tag: Tag,
  type,
  placeholder,
  name,
  value,
  onChange,
  className,
}) => {
  return (
    <div>
      <label className="block text-sm text-gray-600  mb-1">
        {label}
        <span className="text-red-600">*</span>
      </label>

      <Tag
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        required
        onChange={onChange}
        className={className}
      />
    </div>
  );
};

export default Input;
