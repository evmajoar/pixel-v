import React, {InputHTMLAttributes, useState} from 'react';
import Input from "../ui/input";
import {copyIcon} from "../iconsList";
import cn from "classnames";
import './ClipboardInput.scss';

interface IClipboardInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string,
  value: string,
}

export function ClipboardInput({className, label, value}: IClipboardInputProps) {
  const [isCopied, setIsCopied] = useState(false);

  async function onCopyClick(): Promise<void> {
    try {
      await navigator.clipboard.writeText(value);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (e: any) {
      console.error(e.message);
    }
  }

  const cl = cn("clipboard-input", className);

  return (
    <Input
      color={isCopied ? 'success' : 'default'}
      message={isCopied ? 'Copied to clipboard' : ''}
      className={cl}
      label={label}
      value={value}
      onIconClick={onCopyClick}
      addonRight={copyIcon}
      readOnly
    />
  );
}
