import React from 'react';
import { InputProps } from 'react-aria-components';
import { Input } from './Field';
import { EyeOffIcon, Eye } from 'lucide-react';
import { ToggleButton } from './Button';

export function PasswordInput(props: InputProps) {
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);

  return (
    <div className="relative">
      <Input
        type={isPasswordVisible ? 'text' : 'password'}
        className="peer pr-8"
        {...props}
      />
      <ToggleButton
        isSelected={isPasswordVisible}
        onChange={setIsPasswordVisible}
        aria-controls="Toggle button"
        unstyle
        className="absolute right-1 top-1/2 -translate-x-1/4 -translate-y-1/2 rounded p-0.5 text-muted opacity-75 hover:opacity-100 focus:opacity-100 peer-disabled:pointer-events-none"
      >
        {isPasswordVisible ? (
          <EyeOffIcon className="size-4" />
        ) : (
          <Eye className="size-4" />
        )}
      </ToggleButton>
    </div>
  );
}
