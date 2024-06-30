import React from 'react';
import './ItalicToggle.css';
interface ItalicToggleProps {
  isItalic: boolean;
  onToggleItalic: (checked: boolean) => void;
  disabled: boolean;
}

const ItalicToggle: React.FC<ItalicToggleProps> = ({ isItalic, onToggleItalic, disabled }) => {
  return (
    <div className="italic-toggle">
    
      <input
        type="checkbox"
        checked={isItalic}
        onChange={(e) => onToggleItalic(e.target.checked)}
        disabled={disabled}
      />
    </div>
  );
};

export default ItalicToggle;