import React, { FC } from "react";

interface InputProps {
  id: string;
  label?: string;
  name?: string;
  value?: string | number;
  defaultVal?: string | number;
  error?: string | boolean | undefined;
  touch?: string | boolean | undefined;
  disabled?: boolean | undefined;
 
}

interface InputTextProps extends InputProps {
  type?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
}

interface TextAreaProps extends InputProps {
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
  onBlur?: React.FocusEventHandler<HTMLTextAreaElement>;
}
interface SelectProps extends InputProps {
  onChangeSelect?: React.ChangeEventHandler<HTMLSelectElement>;
  onBlur?: React.FocusEventHandler<HTMLSelectElement>;
  children: React.ReactNode;
}
export const Input: FC<InputTextProps> = ({
  id,
  label,
  name,
  type,
  value,
  error,
  onChange,
  onBlur,
  touch,
  disabled,

}) => {
  return (
    <div className="h-16 w-full">
      <input
        className={`input w-full bg-base-200 ${
          error && touch ? "input-error" : ""
        }`}
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={label}
        onBlur={onBlur}
        disabled={disabled}
      />

      {error && touch && (
        <span className="text-sm text-error label-text-alt">{error}</span>
      )}
    </div>
  );
};

export const InputFile: FC<InputTextProps> = ({
  id,
  label,
  name,
  value,
  error,
  onChange,
  onBlur,
  touch,
}) => {
  return (
    <div className="h-16 w-full">
      <input
        className={`file-input w-full bg-base-200 ${
          error && touch ? "file-input-bordered file-input-error" : ""
        }`}
        id={id}
        type="file"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={label}
        onBlur={onBlur}
      />

      {error && touch && (
        <span className="text-sm text-error label-text-alt">{error}</span>
      )}
    </div>
  );
};

export const TextArea: FC<TextAreaProps> = ({
  id,
  label,
  name,
  value,
  error,
  onChange,
  onBlur,
  touch,
}) => {
  return (
    <div className="h-[90px] w-full">
      <textarea
        className={`textarea w-full bg-base-200  ${
          error && touch ? "textarea-error" : ""
        }`}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={label}
        onBlur={onBlur}
      />
      <p>
        {error && touch && <span className="text-sm text-error">{error}</span>}
      </p>
    </div>
  );
};

export const Select: FC<SelectProps> = ({
  id,
  label,
  name,
  value,
  error,
  onChangeSelect,
  onBlur,
  touch,
  children,
}) => {
  return (
    <div>
      <div className="h-16 w-full">
        <select
          className={`select w-full bg-base-200 ${
            error && touch ? "select-error" : ""
          }`}
          id={id}
          name={name}
          value={value}
          onChange={onChangeSelect}
          onBlur={onBlur}
        >
          <option disabled>{label}</option>
          {children}
        </select>
        <p>
          {error && touch && (
            <span className="text-sm text-error">{error}</span>
          )}
        </p>
      </div>
    </div>
  );
};
