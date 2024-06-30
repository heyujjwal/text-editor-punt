import React from 'react';

interface FontSizeSelectorProps {
  sizes: number[];
  selectedSize: number;
  onSizeChange: (size: number) => void;
}

const FontSizeSelector: React.FC<FontSizeSelectorProps> = ({ sizes, selectedSize, onSizeChange }) => {
  return (
    <div className="font-size-selector">
      
      <select value={selectedSize} onChange={(e) => onSizeChange(Number(e.target.value))}>
        {sizes.map((size) => (
          <option key={size} value={size}>
            {size}px
          </option>
        ))}
      </select>
    </div>
  );
};

export default FontSizeSelector;
