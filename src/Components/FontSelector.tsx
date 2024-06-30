import React from 'react';

interface FontSelectorProps {
  fonts: { [key: string]: any };
  selectedFont: string;
  onFontChange: (font: string) => void;
}

const FontSelector: React.FC<FontSelectorProps> = ({ fonts, selectedFont, onFontChange }) => {
  return (
    <select value={selectedFont} onChange={(e) => onFontChange(e.target.value)}>
      {Object.keys(fonts).map((font) => (
        <option key={font} value={font}>
          {font}
        </option>
      ))}
    </select>
  );
};

export default FontSelector;
