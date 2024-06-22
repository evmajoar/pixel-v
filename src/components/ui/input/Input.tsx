import React, {ChangeEvent, InputHTMLAttributes, ReactNode,} from 'react';
import cn from 'classnames';
import './Input.scss';

export type InputColor = 'success' | 'warning' | 'error' | 'default';

export interface IInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  label: string;
  addonRight?: ReactNode;
  isLoading?: boolean;
  color?: InputColor;
  message?: string;
  onChange?: (value: string) => void;
  onIconClick?: () => void|Promise<void>;
}

export function Input(props: IInputProps) {
  const {
    className,
    value,
    defaultValue,
    type = 'text',
    name,
    placeholder,
    readOnly,
    addonRight,
    color = 'default',
    label,
    isLoading = false,
    disabled = false,
    message,
    onChange,
    onIconClick,
    ...otherProps
  } = props;

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  const cl = cn(
    'input',
    readOnly && 'input--readonly',
    isLoading && 'input--loading',
    disabled && 'input--disabled',
    addonRight && 'input--addon-right',
    color && `input--${color}`,
    className,
  );

  return (
    <label className={cl} htmlFor={name}>
      <span className="input__label">{label}</span>

      <span className="input__wrapper">
        <span className="input__container">
          <input
            className="input__field"
            type={type}
            value={value}
            id={name}
            name={name}
            readOnly={readOnly}
            disabled={disabled}
            placeholder={placeholder}
            onChange={onChangeHandler}
            {...otherProps}
          />

          {addonRight && <button type="button" className="input__addon-right" onClick={onIconClick}>{addonRight}</button>}
        </span>

        {message && <span className="input__message">{message}</span>}
      </span>
    </label>
  );
}
