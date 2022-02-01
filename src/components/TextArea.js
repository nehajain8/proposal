import "./TextArea.css";

import React, { useCallback } from "react";

const TextArea = ({
  label,
  rows,
  value,
  name,
  onChange,
  placeholder,
  disabled,
  ...props
}) => {
  const handleChange = useCallback(
    (e) => {
      onChange(e, e.target.value);
    },
    [onChange]
  );

  return (
    <div className="TextArea">
      <label htmlFor={name}>{label}</label>
      <textarea
        id={name}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        rows={rows}
        disabled={disabled}
        {...props}
      />
    </div>
  );
};

export default TextArea;
