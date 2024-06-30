import React from 'react';

interface FontWeightSelectorProps {
  weights: string[];
  selectedWeight: string;
  onWeightChange: (weight: string) => void;
}

const FontWeightSelector: React.FC<FontWeightSelectorProps> = ({ weights, selectedWeight, onWeightChange }) => {
  return (
    <select value={selectedWeight} onChange={(e) => onWeightChange(e.target.value)}>
      {weights.map((weight) => (
        <option key={weight} value={weight}>
          {weight}
        </option>
      ))}
    </select>
  );
};

export default FontWeightSelector;
