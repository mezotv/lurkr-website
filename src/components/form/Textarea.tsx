import { useState } from 'react';

interface TextareaProps {
  id: string;
  initialText: string;
  maxLength: number;
  placeholder: string;
  disabled?: boolean;
  onChange: (text: string) => unknown;
}

export default function Textarea({ id, initialText, maxLength, placeholder, disabled, onChange }: TextareaProps) {
  const [text, setText] = useState(initialText);

  return (
    <textarea
      className="w-full rounded-md bg-discord-not-quite-black py-1.5 px-2 text-white shadow focus:outline-none disabled:select-none"
      id={id}
      placeholder={placeholder}
      onChange={({ target }) => {
        if (target.value.length > maxLength) return;
        setText(target.value);
        onChange(target.value);
      }}
      rows={text.split('\n').length + 2}
      value={text}
      wrap="soft"
      disabled={disabled}
    />
  );
}
